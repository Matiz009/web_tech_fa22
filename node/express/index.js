const http = require("http");
console.clear();
console.log("working");
http
    .createServer((req, res) => {
        console.log(req.url);
        switch (req.url) {
            case "/":
                {
                    res.write("Home");
                    break;
                }
            case "/Contact":
                {
                    res.write("Contact");
                    break;
                }
            default:
                {
                    res.write("Page not found!");
                }
        }
        res.end();
    })
    .listen(8080);