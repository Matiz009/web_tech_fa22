const name = "Matiz";
console.log(name);
const fs = require("fs"); //importing fs module
//fs.mkdirSync("Sample"); created a folder named using this function
console.clear(); //clearing the terminal
fs.writeFileSync("Sample/data.txt", "This is a sample file :)"); //creating a new file
fs.appendFileSync("Sample/data.txt", "Hi"); //adding further data

const data = fs.readFileSync("Sample/data.txt", "utf-8");
console.log(data); //reading file
fs.appendFileSync("Sample/data.txt", "😒"); //adding an emoji

const updated = fs.readFileSync("Sample/data.txt", "utf-8");
console.log(updated);
fs.renameSync("Sample/data.txt", "Sample/newData.txt"); //renaming the file

fs.unlinkSync("Sample/newData.txt"); //deleting a file
fs.rmdirSync("Sample"); //deleting a folder