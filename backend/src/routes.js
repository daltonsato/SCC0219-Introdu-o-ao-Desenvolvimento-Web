const express = require('express');
const router = express.Router();

const clientController = require('./controllers/clientController');
const productController = require('./controllers/productController');

// Client routes
router.get('/user/info/:email', clientController.getUserInfo);
router.get('/user/list-all', clientController.getUsersList);
router.post('/user/register', clientController.registerClient);
router.delete('/user/delete/:id', clientController.deleteClient);
router.put('/user/update', productController.updateUser); // only the user can edit itself



// Products' routes
router.get('/products/info/:slug', productController.getProductInfoBySlug);
router.get('/products/list-all', productController.getProductsList);
router.post('/products/create', productController.createProduct); // only admins can do this
router.put('/products/update', productController.updateProductById); // only admins can do this
router.delete('/products/delete/:id', productController.deleteProductById);

// Test route
router.get('/', (req, res) => {
    console.log("Request: ", req);
    res.status(200).send({
        "version" : "0.0.1",
        "message": "Working!"
    });
});

module.exports = router;