const express = require('express');
const router = express.Router();
const path = require('path');

const clientController = require('./controllers/clientController');
const productController = require('./controllers/productController');
const orderController = require('./controllers/orderController');

const authService = require('./services/authService');

// Validate user cookie
router.post('/user/validate', authService.authorize, (req, res) => {
    res.status(200).send({
        "token_status" : "OK"
    });
});

// Client/admin routes
router.get('/user/info/:email', authService.authorize || authService.authorize ,clientController.getUserInfo); // only the user can see itself or the admin (can edit anyone)
router.get('/user/list-all', authService.isAdmin, clientController.getUsersList); // only admin can do this
router.post('/user/register', clientController.registerClient);
router.post('/user/login', clientController.authenticateUser); // authenticates user or admins
router.delete('/user/delete/:id', authService.isAdmin, clientController.deleteClient); // only admin can do this
router.put('/user/update', authService.authorize || authService.isAdmin, clientController.updateUser); // only the user can edit itself
router.put('/user/add-address', clientController.addAddress);
router.delete('/user/deleteAddr', clientController.deleteAddress);

// Products routes
router.get('/products/info/:slug', productController.getProductInfoBySlug);
router.get('/products/list-all', productController.getProductsList);
router.post('/products/create', authService.isAdmin, productController.createProduct); // only admins can do this
router.put('/products/update', authService.isAdmin, productController.updateProductById); // only admins can do this
router.put('/products/update-quantity/:slug', productController.updateProductQuantityBySlug);
router.delete('/products/delete/:id', authService.isAdmin, productController.deleteProductById); // only admins can do this

// Order routes
router.get('/order', authService.authorize, orderController.getOrder); // only logged users can do this
router.post('/order/new', authService.authorize, orderController.createOrder); // only logged users can do this

// Created because of our build folder...
router.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

router.get('/store', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
  
// Test route
// router.get('/', (req, res) => {
//     console.log("Request: ", req);
//     res.status(200).send({
//         "version" : "0.0.1",
//         "message": "Working!"
//     });
// });

module.exports = router;