const http = require("http");
//created a server
const server = http.createServer((req, res) => {
    res.write("Server is started running\n");
    if (req.url == "/home") {
        res.write("Home Page");
    } else if (req.url == "/about") {
        res.write("About");
    } else {
        res.write("error");
    }
    res.write("Url: " + req.url);
    res.end("\nHello from the server");
});
console.clear(); //clearing the console
server.listen(3000, "127.0.0.1", () => {
    console.log("listening to the server");
});