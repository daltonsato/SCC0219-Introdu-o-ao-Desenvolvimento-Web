// Not following CRUD rigidly, but the idea remains...

// To learn how to upload images: https://www.youtube.com/watch?v=BD39FmSlJTs&list=PLHlHvK2lnJndvvycjBqQAbgEDqXxKLoqn&index=33
const mongoose = require('mongoose');

const ProductModel = mongoose.model('Product');

exports.createProduct = async (req, res, next) => {
    var newProd = new ProductModel();
    
    // missing input treatment....
    // must check if it's admin that is making the request!

    newProd.name = req.body.name; 
    newProd.slug = req.body.slug; 
    newProd.price = req.body.price; 
    newProd.quantity = req.body.quantity;
    newProd.description = req.body.description;
    newProd.suppliers = req.body.suppliers;
    newProd.category = req.body.category;

    try {
        await newProd.save();
        res.status(200).send({
            "message" : "Produto atualizado com sucesso!"
        });
    }
    catch (err) {
        res.status(400).send({
            "message" : "Erro ao cadastrar produto",
            "data" : err
        });
    }
};

// Listing all products in the database
exports.getProductsList = async (req, res, next) => {
    console.log("Executing getProductsList()");
    try {
        let data = await ProductModel.find({}, 'name slug price description category');
        res.status(200).send(data);
    }
    catch (err) {
        res.status(400).send({
            "message" : "Erro ao listas produtos",
            "data" : err
        });
    }
};

// Getting all info from a product based on its slug
exports.getProductInfoBySlug = async (req, res, next) => {
    console.log("Executing getProductInfo()");
    
    prodSlug = req.params.slug;

    console.log("Product slug: ", prodSlug);

    try {
        await ProductModel.findOne({ slug: prodSlug})
        res.status(200).send(data);
    }
    catch (err) {
        res.status(400).send({
            "message" : "Erro ao buscar informações sobre produto.",
            "data" : err
        });
    }
};

exports.updateProductById = async (req, res, next) => {
    let prodID = req.body.id; // this ID is created by MongoDB

    console.log("Executing updateProductById()");

    try {
        await ProductModel.findByIdAndUpdate(prodID, {
            $set: {
                name: req.body.name,
                slug: req.body.slug,
                price: req.body.price,
                quantity: req.body.quantity,
                description: req.body.description,
                suppliers: req.body.suppliers,
                category: req.body.category
            }
        });
        
        res.status(200).send({
            "message" : "Produto atualizado com sucesso!"
        });
    }
    catch (err) {
        res.status(400).send({
            "message" : "Erro ao atualizar produto",
            "data" : err
        });
    }
};

exports.deleteProductById = async (req, res, next) => {
    console.log("Executing deleteProductById()");

    let prodID = req.params.id;

    try {
        await ProductModel.findOneAndRemove(prodID);
        res.status(200).send({
            "message" : "Produto removido com sucesso!"
        });
    }
    catch (err) {
        res.status(400).send({
            "message" : "Erro ao remover produto.",
            "data" : err
        });
    }
}