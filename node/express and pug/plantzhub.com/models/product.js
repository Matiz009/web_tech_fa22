const mongoose = require("mongoose");
const products = mongoose.Schema({
    id: Number,
    name: String,
    price: String,
    type: String,
});

const productModel = mongoose.model("crud", products);
module.exports = productModel;