var express = require("express");
var cookie_parser = require("cookie-parser");
var app = express();

app.use(cookie_parser());
//creating cookie
app.get("/", (req, res) => {
    res.cookie("myFirstCookie", "looks good");
    res.end("ended");
});

//removing cookie
app.get("/removeCookie", (req, res) => {
    res.clearCookie("myFirstCookie");
    res.end("ended");
});

app.listen("3000", () => {
    console.log("its working");
});