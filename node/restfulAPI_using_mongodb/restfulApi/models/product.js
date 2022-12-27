var mongoose = require("mongoose");
var productSchema = mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
});

var Product = mongoose.model("cruds", productSchema);
module.exports = Product;