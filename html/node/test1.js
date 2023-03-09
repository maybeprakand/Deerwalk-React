// read and write a file
// const { rejects } = require("assert");
// const fs = require("fs");
// const text = fs.readFileSync("./test1.txt");
// console.log(text.toString());
// fs.unlinkSync("test1.txt");
//

//  to read from 1 to write to test2
// const fs = require("fs");
// const text1 = fs.readFileSync("test1.txt");
// const write = text1.toString(); // reads and converts to text of contents of test1
// const read2 = fs.readFileSync("test2.txt");
// console.log(read2.toString());
// fs.unlinkSync("test1.txt");

//  using call back arguments
const fs = require("fs");
const { resolve } = require("path");
// fs.readFileSync("test1.txt", "utf-8", (err, data) => {
//   if (!err) {
//     console.log(data);
//   } else {
//     console.lopg(err);
//   }
// });
// // to write
// fs.writeFileSync("test2.txt", data, (err) => {
//   if (!err) {
//     console.log("file created successfully");
//   } else {
//     console.log(err);
//   }
// });

// // asynchronous way to read and write a file
// fs.readFile("test1.txt", "utf-8", (err, data) => {
//   if (!err) {
//     fs.writeFile("test2.txt", (err) => {
//       if (!err) {
//         console.log(data);
//         fs.unlink("test1.txt", (err) => {
//           if (!err) {
//             console.log("file deletion success ");
//           } else {
//             console.log(err);
//           }
//         });
//       } else {
//         console.log(err);
//       }
//     });
//   } else {
//     console.log(err);
//   }
// });

function readFileAsync(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}

function writeFileAsync(filename, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, content, (err) => {
      if (!err) {
        resolve(content);
      } else {
        reject(err);
      }
    });
  });
}
const unlinkAsync = (filename) => {
  return new Promise((resolve, reject) => {
    fs.unlink(filename, (err) => {
      if (!err) {
        resolve();
      } else {
        reject(err);
      }
    });
  });
};
// async function run() {
//   const readFile = await readFileAsync("test1.txt");
//   const writeFile = await writeFileAsync("test4.txt", readFile);
//   console.log(writeFile);
// }
// run();
module.exports = {
  readFileAsync,
  writeFileAsync,
  unlinkAsync,
};
