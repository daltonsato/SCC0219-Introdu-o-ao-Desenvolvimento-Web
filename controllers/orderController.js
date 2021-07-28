// Not following CRUD rigidly, but the idea remains...

const mongoose = require('mongoose');
const uuidv4 = require('uuid').v4;
const authService = require('../services/authService');

const Order = mongoose.model('Order');

exports.createOrder = async (req, res, next) => {
    // TO DO: make checks to params send to an order

    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];

        const data = await authService.decodeToken(token);

        var order = new Order({
            client: data.id,
            purchaseID: uuidv4(),
            products: req.body.products
        });

        await order.save();

        res.status(201).send({
            message: 'Pedido cadastrado com sucesso!'
        });
    } 
    catch (err) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição.'
        });
    }
};

exports.getOrder = async (req, res, next) => {
    try {
        var order = await Order.find({}, 'purchaseID status client items')
        .populate('client', 'name') // gets name from Client object -> mongoose.Schema.Types.ObjectId
        .populate('products.product', 'title'); // gets title from Product object -> mongoose.Schema.Types.ObjectId

        res.status(200).send(order);
    } 
    catch (err) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição.'
        });
    }
};