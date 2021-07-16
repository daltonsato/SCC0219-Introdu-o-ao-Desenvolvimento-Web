const crypto = require('crypto');

const ClientModel = mongoose.model('Order');

// May use "guid" to generate IDs...

exports.registerClient = async (req, res, next) => {
    console.log("Executando funçaõ registerClient()");
    var newClient = new ClientModel();

    let username = req.body['username'];
    let password = req.body['password'];
    let email = req.body['email'];

    let hashedPass = crypto.createHash("sha256").update(str(password) + process.env.SALT_KEY).digest("hex");

    newClient.name = username;
    newClient.password = hashedPass;
    newClient.email = email;

    try {
        await newOrder.save();
        res.status(200).send({
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

exports.deleteClient = async (req, res, next) => { 
    console.log("Executing deleteProductById()");
    
    // must be admin to do this, must validate later!!

    let userID = req.params.id;

    try {
        await ClientModel.findOneAndRemove(userID);
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
    
    // must be admin or the current user to do this!!

    let userMail = req.params.email;

    try {
        await ClientModel.findOne({ email: userMail})
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
        let data = await ClientModel.find({}, 'name email');
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

    // Only the user can edit itself, must validate!!!

    try {
        await ClientModel.findByIdAndUpdate(userID, {
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