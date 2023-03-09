// // function sayhi(name) {
// //   return `hi ${name}`;
// // }
// // function saybye(name) {
// //   return `bye ${name}`;
// // }
// // function display(name, getmsg) {// getmsg is a call back function

// //   console.log(getmsg(name));
// // }
// // function greet(action) {
// //   var user = document.getElementById("my-text").value;
// //   if (action == "hi") {
// //     display(user, sayhi);
// //   } else {
// //     display(user, saybye);
// //   }
// // }

// //array methods
// const num = [1, 2, 3, 4, 5];
// num.forEach((value) => {
//   // value index and array
//   console.log(value);
// });
// // gives new array
// const sq = num.map((value) => {
//   return value * value;
// });
// console.log(sq);
// // remove any elements
// const even = num.filter((value) => {
//   return value % 2 == 0;
// });
// console.log(even);
// const sum = num.reduce((acc, value, index, arr) => {
//   return acc + value;
// });
// console.log(sum);
// const abc = num.every((value, index, arr) => !isNaN(num)); // isnan is function because obj comes with a dot (.)
// console.log(abc);
// const bcd = num.some((value) => {
//   return value;
// });
// console.log(bcd);
