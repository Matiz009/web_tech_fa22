const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
    .connect("mongodb://localhost:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("Connected..."))
    .catch((error) => {
        console.log(error.message);
    });
app.listen(3000, () => console.log("Server is running"));