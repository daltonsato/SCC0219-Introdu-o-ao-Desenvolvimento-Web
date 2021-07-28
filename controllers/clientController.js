const crypto = require('crypto');

const mongoose = require('mongoose');

const Client = mongoose.model('Client');
const authService = require('../services/authService');

exports.registerClient = async (req, res, next) => {
    console.log("Executing registerClient()");
    var newClient = new Client();

    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    //let addresses = [];

    // TO DO: Must make some checks before using username, password and email

    let hashedPass = crypto.createHash("sha256").update(String(password) + process.env.SALT_KEY).digest("hex");

    newClient.name = username;
    newClient.password = hashedPass;
    newClient.email = email;
    newClient.roles = ["user"]; // there are user or admin roles
    //newClient.addressList = req.body.address;

    try {
        await newClient.save();
        res.status(201).send({
            "message" : "Cliente cadastrado com sucesso!"
        });
    }
    catch (err) {
        res.status(400).send({
            "message" : "Erro ao cadastrar usuário.",
            "data" : err
        });
    }
};

exports.authenticateUser = async (req, res, next) => {
    console.log("Executing authenticateUser()");
    try {
        const client = await Client.findOne({
            email: req.body.email,
            password: crypto.createHash("sha256").update(String(req.body.password) + process.env.SALT_KEY).digest("hex")
        });
        
        if(!client) {
            res.status(404).send({
                message: 'Usuário ou senha inválidos.'
            });
            return;
        }

        const token = await authService.generateToken({
            id: client._id,
            email: client.email,
            name: client.name,
            roles: client.roles
        });

        if (client.roles.includes('admin')) {
            res.cookie("ADMIN_SESSION", token, {
                // secure: true, // used with HTTPS !!
                // httpOnly: true, // avoid XSS JS from stealing cookies
                sameSite : 'strict',
                path: '/'
            });
        }
        else {
            res.cookie("SESSION", token, {
                // secure: true, // used with HTTPS !!
                // httpOnly: true, // avoid XSS JS from stealing cookies
                sameSite : 'strict',
                path: '/'
            });
        }

        res.status(200).send({
            token: token,
            data: {
                email: client.email,
                name: client.name
            }
        });
    }
    catch (err) {
        res.status(500).send({
            message: 'Falha ao processar requisição.'
        });
    }
};

exports.refreshToken = async(req, res, next) => {
    console.log("Executing refreshToken()");

    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];

        if (!token) {
            res.status(401).json({
                message: 'Acesso não autorizado.'
            });
        }

        const data = await authService.decodeToken(token);

        const client = await Client.findOne({ email: data.email});

        if (!client) {
            res.status(404).send({
                message: 'Cliente não encontrado.'
            });
            return;
        }

        const newToken = await authService.generateToken({
            id: client._id,
            email: client.email,
            name: client.name,
            roles: client.roles
        });

        if (client.roles.includes('admin')) {
            res.cookie("ADMIN_SESSION", token, {
                // secure: true, // used with HTTPS !!
                httpOnly: true,
                sameSite : 'strict',
                path: '/'
            });
        }
        else {
            res.cookie("SESSION", token, {
                // secure: true, // used with HTTPS !!
                httpOnly: true,
                sameSite : 'strict',
                path: '/'
            });
        }

        res.status(200).send({
            token: newToken,
            data: {
                email: client.email,
                name: client.name
            }
        });
    } 
    catch (err) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição.'
        });
    }
};

exports.deleteClient = async (req, res, next) => { 
    console.log("Executing deleteProductById()");
    
    // TO DO: must be admin to do this, must validate later!!

    let userID = req.params.id;

    try {
        let aux = await Client.findOneAndDelete({_id: userID});
        res.status(200).send({
            "message" : "Cliente removido com sucesso!"
        });
        console.log(aux);
    }
    catch (err) {
        res.status(400).send({
            "message" : "Erro ao remover cliente.",
            "data" : err
        });
    }
};

exports.getUserInfo = async (req, res, next) => { 
    console.log("Executing getUserInfo()");
    
    // TO DO: must be admin or the current user to do this!!

    let userMail = req.params.email;

    try {
        let data = await Client.findOne({ email: userMail});
        res.status(200).send(data);
    }
    catch (err) {
        res.status(400).send({
            "message" : "Erro ao buscar informações do usuário.",
            "data" : err
        });
    }    
};

exports.getUsersList = async (req, res, next) => {
    console.log("Executing getUsersList()");
    
    try {
        let data = await Client.find({}, 'name email addressList');
        res.status(200).send(data);
    }
    catch (err) {
        res.status(400).send({
            "message" : "Erro ao listas usuários.",
            "data" : err
        });
    }
};

exports.updateUser = async (req, res, next) => {
    let userID = req.body.id; // this ID is created by MongoDB

    console.log("Executing updateUser()");
    console.log(req.body);

    // TO DO: Only the user can edit itself or the admin can edit anyone, must validate!!!

    try {
        await Client.findByIdAndUpdate(userID, {
            $set: {
                name: req.body.username,
                email: req.body.email,
                password: crypto.createHash("sha256").update(String(req.body.password) + process.env.SALT_KEY).digest("hex")
            }
        });
        
        res.status(200).send({
            "message" : "Dados do cliente atualizados com sucesso!"
        });
    }
    catch (err) {
        res.status(400).send({
            "message" : "Erro ao atualizar dados do cliente.",
            "data" : err
        });
    }

    
};

exports.addAddress = async (req, res, next) => {
    
    let userID = req.body.id;
    //console.log(req.body);
    try {
       let aux =  await Client.findByIdAndUpdate(userID, {
            $push: {
                addressList: req.body.address
            }
        });
        console.log(aux);
        res.status(201).send({
            message: 'Endereço registrado'
        });
    }
    catch (err){
        res.status(400).send({
            "message" : "Erro ao atualizar dados do cliente.",
            "data" : err
        });
    }
};

exports.deleteAddress = async (req, res, next) => {
    
    let userID = req.body.id
    let AddrID = req.body.addrid
    try {
        let aux = await Client.findByIdAndUpdate(userID, {
            $pull: {
                "addressList": {_id: AddrID}
            }
        });
        console.log(aux);
        
        if(aux === null)
        {
            res.status(400).send({
                "message" : "Endereço não encontrado!"
            });
            console.log(aux);
        }
        else
        {
            res.status(200).send({
                "message" : "Endereço removido com sucesso!"
            });
            console.log(aux);
        }
    }
    catch (err) {
        res.status(400).send({
            "message" : "Erro ao remover Endereço.",
            "data" : err
        });
    }
}

