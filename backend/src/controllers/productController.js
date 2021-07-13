
const ProductModel = mongoose.model('Product');

exports.createProduct = (req, res, next) => {
    var newProd = new ProductModel();
    
    // missing input treatment....
    newProd.name = req.body.name; 
    newProd.slug = req.body.slug; 
    newProd.price = req.body.price; 
    newProd.quantity = req.body.quantity;
    newProd.description = req.body.description;
    newProd.suppliers = req.body.suppliers;
    newProd.category = req.body.category;

    // must wrap around TRY/CATCH
    newProd.save(); // assync function that saves product to database
};

exports.getProductsList = async (req, res, next) => {
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

exports.getProductInfoBySlug = (req, res, next) => {
    console.log("Executing getProductInfo()");
    let prodSlug = req.params.slug;
    // must validate slug from input...
    console.log("Product slug: ", prodSlug);

    ProductModel.findOne({ slug: prodSlug})
    .then((data) => {
        res.status(200).send(data);
    })
    .catch((err) => {
        res.status(400).send({
            "message" : "Erro ao listas produtos",
            "data" : err
        });
    });
};

exports.updateProductById = (req, res, next) => {
    let prodID = req.body.id; // this Id is created by MongoDB

    ProductModel.findByIdAndUpdate(prodID, {
        $set: {
            name: req.body.name,
            slug: req.body.slug,
            price: req.body.price,
            quantity: req.body.quantity,
            description: req.body.description,
            suppliers: req.body.suppliers,
            category: req.body.category
        }
    })
    .then((data) => {
        res.status(200).send({
            "message" : "Produto atualizado com sucesso!"
        });
    })
    .catch((err) => {
        res.status(400).send({
            "message" : "Erro ao atualizar produto",
            "data" : err
        });
    });
};

exports.deleteProductById = (req, res, next) => {
    let prodID = req.params.id;

    ProductModel.findOneAndRemove(prodID)
    .then((data) => {
        res.status(200).send({
            "message" : "Produto removido com sucesso!"
        });
    })
    .catch((err) => {
        res.status(400).send({
            "message" : "Erro ao remover produto.",
            "data" : err
        });
    });
};