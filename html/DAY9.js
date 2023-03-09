// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.country = "Nepal";
//   }
//   getName() {
//     return this.name;
//   }
//   setName(name) {
//     this.name = name;
//   }
// }
// // const ram = new User("ram", 12);
// const u1 = new User("ram", 12);
// // console.log(ram.getName());
// // ram.setName("hari");
// // console.log(ram);
// u1.age = 40;
// console.log(u1);

// class User {
//   #email;
//   #pin;
//   constructor(email, pin) {
//     this.#email = email;
//     this.#pin = pin - 4;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(email) {
//     this.#email = email;
//   }
//   set pin(pin) {
//     this.#pin = pin - 4;
//   }
//   get pin() {
//     return this.#pin + 4;
//   }
//   set pin(pin) {
//     let oldPin = parseInt(prompt("enter the old pin "));
//     if (oldPin == this.#pin + 4) {
//       this.#pin = pin + 4;
//     } else {
//       alert("incorrect pin");
//     }
//   }
//   set email(email) {
//     this.#email = email;
//   }
// }
// const u1 = new User(" prakandalama1@gmail.com", 5555);
// console.log(u1.email);
// console.log(u1.pin);
// console.log(u1);
// try amd catcj
try {
  document.getElementById("app").innerHTML = "hi";
} catch (e) {
  console.log("no such element exists");
} finally {
  // runs with and without
  console.log("done ");
}
