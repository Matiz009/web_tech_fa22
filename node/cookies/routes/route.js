const express = require("express");
const app = express();
const router = express.Router();

app.use("/firstRoute", router);

router.get("/route_1", (req, res) => {
    res.end("working");
});

router.get("/route_2", (req, res) => {
    res.end("working on 2nd route");
});

app.listen("3001", () => {
    console.log("listening");
});