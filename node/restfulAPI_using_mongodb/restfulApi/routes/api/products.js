const express = require("express");
const router = express.Router();
const Product = require("../../models/product");
router.get("/", async(req, res) => {
    let product = await Product.find();
    return res.send(product);
});
module.exports = router;