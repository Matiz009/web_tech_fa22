var express = require("express");
var router = express.Router();
var Product = require("../models/product");

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Express" });
});

router.get("/cart", function(req, res, next) {
    res.render("cart");
});
router.get("/cart/:id", async function(req, res, next) {
    let product = await Product.findById(req.params.id);
    console.log("Add This Product in cart");
    let cart = [];
    if (req.cookies.cart) {
        cart = req.cookies.cart;
    }
    res.cookie("cart", cart);
    res.redirect("/products");
});





module.exports = router;