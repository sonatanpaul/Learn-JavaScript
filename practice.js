// console.log("hello");
// var name = "Sonatan";
// var name = "Sonatan";
// console.log(name);

/*
let name = "Sonatan";
console.log(name);
// let name = "Sonatan"; // re-Declare not allawod
// but re-assign allowed
name = "Sonatan Paul";
console.log(name);
*/

/*
const name = "Sonatan";
// const name = "Paul"; // re-delare not allowed
name = "Paul";
console.log(name); // re-assign not allwoed
*/

/*
const numbers = [1, 2, 3, 4];
console.log(numbers); // 1, 2, 3, 4
// array re-assgin not allowed but array element change allowed
numbers.push(5);
console.log(numbers);
*/

/*
const person = {
  name: "Sonatan",
  age: 26,
};
console.log(person);
// add object key value
person.isMarried = false;
console.log(person);

// but not allow object re-assign
person = { name: "Paul", age: 26 };
console.log(person);
*/

// function declaration

// function printMe(){
//     // Code
// }

/*
function printMe() {
  console.log("Hello");
}
// funtion invoke or function call
printMe(); // Hello
*/

// funtion with parameter and argument
/*
function printMe(a, b) {
  console.log(arguments.length); // 2
  console.log(printMe.length); // 2
}

printMe(2, 4);
console.log(printMe.length); // 22
*/

/*
function sum(a, b) {
  const result = a + b; // undefined + undefined
  console.log(result); //   NaN
}
sum();
*/

/*
function sum(a, b) {
  const sum = a + b; // 10 + 10
  console.log(sum); // 20
}

sum(10, 10);
*/

/*
function sum(a, b) {
  const result = a + b; // 10 + undefined
  console.log(result); // NaN
}
sum(10);
*/

/*
function sum(a, b = 10) {
  let result = a + b; // 20 + 10
  console.log(result); // 30
}
sum(20);
*/

/*
function sum(a = 30, b = 20) {
  let result = a - b; // 30 - 20
  console.log(result); // 10
}
sum();
*/

// template string
/*
let name = "Sonatan\nPaul";
console.log(name);
*/

/*
let name = "Sonatan Paul";
let age = 26;

let information =
  "My name is" + " " + name + " " + "my age is" + " " + age + ".";
console.log(information);

let info = `My name is ${name} and my age is ${age}.`;
console.log(info);
*/

// arrow funtion

/*
function myFunction() {
  console.log("hello world");
}
myFunction();
*/

/*
const myFunction = function () {
  console.log("hello world");
};
myFunction();

*/

/*
const myFunction = () => {
  console.log("hello world");
};
myFunction();

*/

/*
const printMe = (a, b) => console.log(a + b);
printMe(10, 20);
*/

/*
const printMe = (a) => console.log(a * 2);
printMe(5);
*/

/*
const printMe = (a, b = 20) => console.log(a + b);
printMe(20);
*/

/*
const printMe = (a = 20, b) => console.log(a + b);
printMe(undefined, 20);

*/

// Spreed Operator

// copy new array with slice method
/*
const array = [1, 2, 3, 4, 5, 6, 7];
const newArray = array.slice();
console.log(array);
console.log(newArray);
const another = array.slice(1, 3);
console.log(another);
console.log(array);
*/

/*
const array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(array);
const newArray = [...array];
console.log(newArray);
// check two array some or not
const check = array === newArray;
console.log(check);
*/

/*
let array = [1, 2, 3, 4, 5, 6];
let newArray = array;
console.log(array);
console.log(newArray);
const check = array === newArray;
console.log(check);
*/

/*
const array = [1, 2, 3, 4, 5, 6];
const newArray = [...array, 7, 8, 9, 10];
console.log(array);
console.log(newArray);
*/

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const bigNumber = Math.max(...numbers);
// console.log(bigNumber);

/*
console.log(Math.max(10, 25, 300));
console.log(Math.max(10, "20", 35));
console.log(Math.max(10, "Paul", 25));
console.log(Math.min(12, 3, 5, 74, 1));
console.log(Math.min(...numbers));
console.log(Math.max());
console.log(Math.min());
console.log(Math.min("12", 25, 28, 30));
*/

// destructuring in javascript
const person = {
  name: "Paul",
  age: 26,
  Married: false,
};

// console.log(person.age);
// console.log(person["name"]);
// console.log(person["age"]);

// const { name, age, Married } = person;
// console.log(name);
// console.log(Married);

// const { name, age, profession = "student" } = person;

// console.log(profession);
// console.log(name);

// array

const friends = ["anik", "rayhan", "ashraful"];
// console.log(friends[0]);
// console.log(friends[2]);
// const [anik, rayhan, ashraful] = friends;
// console.log(anik);
// console.log(rayhan);

const [anik, , ashraful] = friends;
console.log(anik);
console.log(ashraful);
