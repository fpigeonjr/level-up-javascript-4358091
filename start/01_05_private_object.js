// class User {
//   #userName;
//   #password;
//   constructor(userName, password, age) {
//     this.#userName = userName;
//     this.#password = password;
//     this.age = age;
//   }
// }

// const Frank = new User("Frank", "password123", 45);
// console.log(Frank.age);

const username = Symbol("username");
const password = Symbol("password");

const user = { [username]: "Frank", [password]: "12345", age: 45 };
console.log(user.username); // undefined
console.log(user.password); // undefined
