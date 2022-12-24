const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();
app.use(bodyParser());

app.get("/", (req, res) => {});

app.post("/", (req, res) => {
    res.end(JSON.stringify(req.params));
});
app.listen("3000", () => {
    console.log("listening at port 3000");
});