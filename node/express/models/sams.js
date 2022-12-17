const mongoose = require("mongoose");
const sams = mongoose.Schema({
    id: Number,
    email: String,
    password: String,
});

const Model = mongoose.model("sams", "sams");
module.exports = Model;