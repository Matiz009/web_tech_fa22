console.log("asynchronous file");
const fs = require("fs");
fs.writeFile("data.txt", "Its 4:06 am!", (res) => {
    console.log("completed");
    console.log(res);
});

fs.readFile("./data.txt", "utf-8", (response) => {
    console.log(response);
});

fs.appendFile("./data.txt", "hello", (res) => {
    console.log(res);
});