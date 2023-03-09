//array
// let names = [
//   "prakanda",
//   "rahul",
//   "ram",
//   "hari",
//   "shyam",
//   "samir",
//   "pramod",
//   "sujan",
//   "dip",
//   "gaurav",
// ];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }
// for (let i in names) {
//   console.log(names[i]);
// }
// for (let item of names) {
//   console.log(item);
// }
//

// console.log(names.length);
//symbolnumber
// let names = ["ram", "hari", "shyam"];
// let i = 1;
// for (let item of names) {
//   console.log(i + "." + item);
//   i++;
// }
//using for in
// for (let i in names) {
//   console.log(i + "." + names[i]);
// }

// let fruits = ["apple", "mango", 1, "banana"];

// for (let item of fruits) {
//   if (item == 1) {
//     break;
//   } else {
//     console.log(item);
//   }
// }
// let arr = "sandeep lamichane";
// console.log(arr.length);
// console.log(arr.slice(1, 3));
// console.log(arr.substring(1, 3));
// console.log(arr.substr(1, 3));
// console.log(arr.concat("y"));//to add
// console.log(arr.toUpperCase());
// console.log(arr.toLowerCase());
// console.log(arr.trim());//cuts space at start and end
// console.log(arr.split("+"));

function count() {
  let str = document.getElementById("my-text").value;
  str = str.trim();
  let words = str.split(" ");

  let len = 0;

  for (let item of words) {
    if (item != "") len++;
  }

  document.getElementById("result").innerHTML = `Total Words: ${len}`;
}
