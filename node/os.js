const os = require("os");
//description of these functions can be accessed through the
//following link https://nodejs.org/api/os.html
console.clear();
console.log(os.arch());
console.log(os.cpus());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.homedir());
console.log(os.networkInterfaces());
console.log(os.type());
console.log(os.release());
console.log(os.loadavg());
let totalMem = os.totalmem();
totalMem = totalMem / 1024;
totalMem = totalMem / 1024;
totalMem = totalMem / 1024;
console.log("Total memory: " + totalMem);
let memory = os.freemem();
memory = memory / 1024;
memory = memory / 1024;
memory = memory / 1024;
console.log("Free memory in gbs:" + memory);
console.log(os.version());
console.log(os.endianness());