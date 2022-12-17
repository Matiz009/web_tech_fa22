const mongoose = require("mongoose");
const sams = mongoose.Schema({
    id: Number,
    email: String,
    password: String,
});

const userModel = mongoose.model("sams", sams);
module.exports = userModel;