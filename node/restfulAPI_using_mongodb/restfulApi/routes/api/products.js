const express = require("express");
const router = express.Router();
const Product = require("../../models/product");
//getting multiple records
router.get("/", async(req, res) => {
    let products = await Product.find();
    return res.send(products);
});
//getting single records

router.get("/:id", async(req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(400).send("Record not present");
        }
        return res.send(product);
    } catch (err) {
        res.status(400).send("invalid id");
        console.log(err);
    }
});
module.exports = router;