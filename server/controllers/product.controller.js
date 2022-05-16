const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({products : allProducts}))
        .catch(err => res.json({msg : "An Error Occured", error : err}));
}

module.exports.addAProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => {
            res.json({product : newProduct})
        })
        .catch(err => res.json({msg : "An Error Occured", error : err}));
}