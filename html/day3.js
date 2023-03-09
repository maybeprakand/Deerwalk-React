//loops
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// // odd and evem
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(i + " is odd");
//   }
// }
// // while loop
// var num = 0;
// while (num <= 10) {
//   console.log(num);
//   num++;
// }
// // do while
// do {
//   console.log(num);
//   num++;
// } while (num <= 10);
// printing a leap year
// let num = 2000;
// console.log("the leap years are:");
// for (; num <= 2030; num++) {
//   if (num % 4 == 0) {
//     console.log(num++);
//   }
// }
// for (year = 2000; year <= 2030; year = year + 4) {
//   console.log(year);
// }
//fibonacci
// let sum = 1;
// for (let i = 0; i <= 10; i++) {
//   sum = sum + i;
// }
// console.log(sum);
// let a = prompt("enter the correct number");
// while (a != 1) {
//   a = prompt("that is not the correct answer try again");
// }

function add() {
  let num1 = parseInt(document.getElementById("num1").value); // this helps to use numbers as a number instead of string
  let num2 = parseInt(document.getElementById("num2").value); // no parseInt()means number is a string
  let result = 0;
  for (let i = num1; i <= num2; i++) {
    result = result + i;
  }
  document.getElementById("result").innerHTML = "Result=" + result;
  num2;
}

function sub() {
  let num1;
}
