// 1️⃣ Numbers
// 2️⃣ Strings
// 3️⃣ Booleans
// 4️⃣ Arrays
// 5️⃣ Objects

// Numbers
let age = 25; // Integer
let price = 99.99; // Decimal
let negative = -10; // Negative number

console.log(age, price, negative); // 25 99.99 -10
let total = 10 + 5;
console.log(total); // 15

// Strings
let name = "Alice";
let greeting = "Hello, world!";
console.log(name, greeting);
let message = "Hello, " + name;
console.log(message); // Hello, Alice
let message2 = `Hello, ${name}`;
console.log(message2); // Hello, Alice

// Booleans only have two values: true or false.
let isOnline = true;
let isRaining = false;

console.log(isOnline, isRaining); // true false

if (isOnline) {
  console.log("User is online");
} else {
  console.log("User is offline");
}

// Arrays (Lists)

let colors = ["red", "blue", "green"];
let numbers = [10, 20, 30];

console.log(colors[0]); // red (first item)
console.log(numbers[1]); // 20 (second item)

// Objects (Key-Value Pairs)
// Objects store data in key-value pairs inside {}.
let person = {
  name: "Alice",
  age: 25,
  isStudent: false,
};

console.log(person.name); // Alice
console.log(person.age); // 25
console.log(person.isStudent); // false
