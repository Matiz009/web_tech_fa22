var express = require("express");
var router = express.Router();
var Product = require("../models/product");

/* GET products page. */
router.get("/", async function(req, res, next) {
    let products = await Product.find();
    console.log(products);
    //res.send(products);
    res.render("products", { products });
});

router.get("/add", async function(req, res, next) {
    res.render("products/add");
});
router.get("/delete", async function(req, res, next) {
    res.render("products/delete");
});
router.get("/edit", async function(req, res, next) {
    res.render("products/edit");
});



module.exports = router;