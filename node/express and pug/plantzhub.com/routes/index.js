var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    //res.render('index', { title: 'Express' });
    //res.send("<h2>Pakistan Zindabad</h2>");
    res.render("products");
});

router.get("/contactus", function(req, res, next) {
    //res.render('index', { title: 'Express' });
    //res.send("<h2>Pakistan Zindabad</h2>");
    res.render("contactus");
});

module.exports = router;