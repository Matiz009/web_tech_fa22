const express = require("express");
const fs = require("fs");
const app = express();
console.log("express");
app.use(express.json());
var data = fs.readFileSync("./products.json", "utf-8");
app.get("/", (req, res) => {
    console.clear();
    res.send("Express is rock!");
});
//get request
app.get("/api/products/", (req, res) => {
    console.clear();
    console.log(data); //reading file
    res.send(JSON.parse(data));
});
//post request
app.post("/api/products/", (req, res) => {
    console.clear();
    console.log(data); //reading file
    const info = JSON.parse(data);
    info.push(req.body.name);
    res.send(info);
});

//post request
app.put("/api/products/:index", (req, res) => {
    console.clear();
    console.log(data); //reading file
    const info = JSON.parse(data);
    info[req.params.index] = req.body.name;
    res.send(info[req.params.index]);
});
//delete request
app.delete("/api/products/:index", (req, res) => {
    const info = JSON.parse(data);
    info.splice(req.params.index, 1);
    res.send(info);
});

app.listen(3000);