const express = require('express');
const router = express.Router();

const productController = require('./controllers/productController');

// User routes

// Products routes
router.get('/products/info/:slug', productController.getProductInfoBySlug);
router.get('/products/list-all', productController.getProductsList);
router.post('/products/create', productController.createProduct);
router.put('/products/update', productController.updateProductById);
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