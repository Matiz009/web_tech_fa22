var express = require("express");
var router = express.Router();
var Product = require("../models/product");

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Express" });
});


router.get("/cart/:id", async function(req, res, next) {
    let product = await Product.findById(req.params.id);
    console.log("Add This Product in cart");
    let cart = [];
    if (req.cookies.cart) {
        cart = req.cookies.cart;
    }
    cart.push(product);
    res.cookie("cart", cart);
    res.redirect("/products");
});

router.get("/cart", function(req, res, next) {
    let cart = req.cookies.cart;
    if (!cart) {
        cart = [];
    }
    res.render("cart", { cart });
});

router.get("/cart/remove/:id", async function(req, res, next) {
    let cart = [];
    if (req.cookies.cart) {
        cart = req.cookies.cart;
    }
    cart.splice(
        cart.findIndex((c) => c._id == req.params.id),
        1
    );
    res.cookie("cart", cart);
    res.redirect("/cart");
});





module.exports = router;