const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.listen(3000, () => console.log("Server is running"));

mongoose
    .connect("mongodb://localhost:27017/plantsData", { useNewUrlParser: true })
    .then(() => {
        console.log("connected to db");
    })
    .catch((err) => {
        console.log(err.message);
    });