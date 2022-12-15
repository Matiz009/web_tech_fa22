const express = require("express");
const fs = require("fs");
const app = express();
console.log("express");
app.use(express.json());

app.get("/", (req, res) => {
    console.clear();
    res.send("Express is rock!");
});
//get request
app.get("/api/products/", (req, res) => {
    const data = fs.readFileSync("./products.json", "utf-8");
    console.clear();
    console.log(data); //reading file
    res.send(JSON.parse(data));
});
//post request
app.post("/api/products/", (req, res) => {
    const data = fs.readFileSync("./products.json", "utf-8");
    console.clear();
    console.log(data); //reading file
    const info = JSON.parse(data);
    info.push(req.body.name);
    res.send(info);
});
//delete request
app.delete("/api/products/:index", (req, res) => {
    const data = fs.readFileSync("./products.json", "utf-8");
    const info = JSON.parse(data);
    info.splice(req.params.index, 1);
    res.send(info);
});

app.listen(3000);