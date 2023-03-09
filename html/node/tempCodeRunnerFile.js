const fs = require("fs");
const text = fs.readFileSync("test1.txt");
const write = text.toString();
fs.writeFileSync("test2.txt", write);
const read2 = fs.readFileSync("test2.txt");
console.log(read2.toString());
fs.unlinkSync("text.txt");