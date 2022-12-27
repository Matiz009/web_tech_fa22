const express = require("express");
const router = express.Router();

router.get("/", async(req, res) => {
    return res.send(["Pen", "Pencil"]);
});
module.exports = router;