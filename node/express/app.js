const express = require("express");
const app = express();
console.log("express");
app.use(express.json());
const products = [{
        name: "Apple",
        description: "A fruit",
        price: "30Rs",
    },
    {
        name: "Banana",
        description: "A fruit",
        price: "10Rs",
    },
    {
        name: "Onion",
        description: "A Vegetable",
        price: "70Rs",
    },
    {
        name: "Chicken",
        description: "Meat",
        price: "300Rs",
    },
];
app.get("/", (req, res) => {
    console.clear();
    res.send("Express is rock!");
});
app.get("/api/products", (req, res) => {
    res.send(products);
});
//get request
app.get("/api/products/:index", (req, res) => {
    if (!products[req.params.index]) {
        return res.status(400).send("Product not found!");
    }
    res.send(products[req.params.index]);
});

//delete request
app.delete("/api/products/:index", (req, res) => {
    products.splice(req.params.index, 1);
    res.send(products);
});

//post request
app.post("/api/products", (req, res) => {
    products.push(req.body.name);
    res.send(products);
});

//put request
app.put("/api/products/:index", (req, res) => {
    console.log(req.body);
    products[req.params.index] = req.body.name;
    res.send(products[req.params.index]);
});
app.listen(3000);