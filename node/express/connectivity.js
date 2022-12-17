const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { CreateUser } = require("./users");
mongoose.set("strictQuery", false);
mongoose
    .connect("mongodb://localhost:27017/sample", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        console.log("connected");
        await CreateUser();
    })
    .catch((error) => {
        console.log(error);
    });
app.listen(3000, () => console.log("Server is running"));