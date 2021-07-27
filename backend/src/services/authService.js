const jwt = require('jsonwebtoken');

exports.generateToken = async (data) => {
    return jwt.sign(data, process.env.SALT_KEY_JWT, { expiresIn: '1d' });
};

exports.decodeToken = async (token) => {
    let data = await jwt.verify(token, process.env.SALT_KEY_JWT);
    return data;
};

exports.authorize = (req, res, next) => {
    console.log("Executing authorize()");

    let token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        res.status(401).json({
            message: 'Acesso não autorizado.'
        });
    }
    else {
        jwt.verify(token, process.env.SALT_KEY_JWT, (err, decoded) => {
            if (err) {
                res.status(401).json({
                    message: 'Token inválido.'
                });
            }
            else {
                next(); // callback function will be executed
            }
        });
    }
}

exports.isAdmin = (req, res, next) => {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        res.status(401).json({
            message: 'Token inválido.'
        });
    } 
    else {
        jwt.verify(token, process.env.SALT_KEY_JWT, (err, decoded) => {
            if (err) {
                res.status(401).json({
                    message: 'Token inválido.'
                });
            } 
            else {
                if (decoded.roles.includes('admin')) {
                    next();
                } 
                else {
                    res.status(403).json({
                        message: 'Acesso restrito a administradores.'
                    });
                }
            }
        });
    }
};