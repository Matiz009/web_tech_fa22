const express = require("express");
const app = express();
const router = express.Router();

app.use("/users", router);

router.get("/:username/:password", (req, res) => {
    res.end(JSON.stringify(req.params));
});

app.listen("3000", () => {
    console.log("listening");
});