const crypto = require('crypto');

const mongoose = require('mongoose');

const Client = mongoose.model('Order');
const authService = require('../services/authService');

exports.registerClient = async (req, res, next) => {
    console.log("Executing registerClient()");
    var newClient = new Client();

    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;

    // TO DO: Must make some checks before using username, password and email

    let hashedPass = crypto.createHash("sha256").update(str(password) + process.env.SALT_KEY).digest("hex");

    newClient.name = username;
    newClient.password = hashedPass;
    newClient.email = email;
    newClient.roles = ["user"]; // there are user or admin roles

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

exports.authenticateClient = async (req, res, next) => {
    console.log("Executing authenticateClient()");
    try {
        const client = await Client.findOne({
            email: data.email,
            password: crypto.createHash("sha256").update(str(data.password) + process.env.SALT_KEY).digest("hex")
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

        res.status(201).send({
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

        res.status(201).send({
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
        await Client.findOneAndRemove(userID);
        res.status(200).send({
            "message" : "Cliente removido com sucesso!"
        });
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
        await Client.findOne({ email: userMail})
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

    // TO DO: must be admin to do this!!
    
    try {
        let data = await Client.find({}, 'name email');
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

    console.log("Executing updateProductById()");

    // TO DO: Only the user can edit itself or the admin can edit anyone, must validate!!!

    try {
        await Client.findByIdAndUpdate(userID, {
            $set: {
                name: req.body.username,
                email: req.body.email,
                password: crypto.createHash("sha256").update(str(req.body.password) + process.env.SALT_KEY).digest("hex")
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