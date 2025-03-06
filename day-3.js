// primitive data
/*
let name = "Sonatan";
console.log(name);
let newName = name;
console.log(newName);
// change name value
name = "Sonatan Paul";
console.log(name); // only change name value
console.log(newName); // cant change new value name
*/

// non - primitive value
/*
const person = {
  name: "Sonatan",
  age: 26,
  color: "Black",
};

console.log(person);
const newPerson = person;
console.log(newPerson);

// change only person property value
person.name = "Sonatan Paul";
console.log(person);
console.log(newPerson);
*/

/*
const friends = ["Anik", "Rayhan", "Asraful"];
console.log(friends);
const newFriends = friends;
console.log(newFriends);

newFriends[1] = "Akash";
console.log(newFriends);
console.log(friends);
*/

// learn undefined

// console.log(name);
// var name = "Sonatan";

/*
let number;
console.log(number); //  undefined
number = 20;
console.log(number); // 20
console.log(typeof undefined); // undefined

function sum(a, b) {
  console.log(a, b); // undefined undefined , reason argument no passing
}

sum();
*/

/*
function sum(a, b) {
  console.log(a, b);
}

const result = sum(20, 10);
console.log(result); // undefined , reason i cant return funtion
*/

/*
const name = null;
console.log(name); // null , null means empty or nothing
console.log(typeof null); // object 
*/

/*
const name = "";

if (name) {
  console.log("This is Truthy Value");
} else {
  console.log("This is Falsey Value");
}

*/

// const name = "Paul";
// if (name) {
//   console.log("True");
// } else {
//   console.log("False");
// }

/*
const number = 0;

if (number) {
  console.log("True Value");
} else {
  console.log("False Value");
}
*/

/*
const number = 10;
if (number) {
  console.log("True value");
} else {
  console.log("False value");
}
*/

/*
const number = -0;
if (number) {
  console.log("True value");
} else {
  console.log("False value");
}

*/

/*
const number = -5;
if (number) {
  console.log("True Value");
} else {
  console.log("false Value");
}
*/

/*
const value = null;

if (value) {
  console.log("True Value");
} else {
  console.log("false value");
}
*/

/*
const value = undefined;
if (value) {
  console.log("True value");
} else {
  console.log("False value");
}
*/

/*
const array = [];
if (array) {
  console.log("true value");
} else {
  console.log("false value");
}

const object = {};
if (object) {
  console.log("true value");
} else {
  console.log("false value");
}
*/

/*
const number = 2;

if (!number) {
  console.log("true value");
} else {
  console.log("false value");
}
*/

/*
const name = "";
if (!name) {
  console.log("true value");
} else {
  console.log("false");
}
*/

// === Equal vs == Equal

// note : === Equal check value or data type,
// note : == Equal check only value,

// let num1 = 10;
// let num2 = 10;

/*
if (num1 == num2) {
  console.log("This is value is Eqaul");
} else {
  console.log("This value is not Equal");
}

*/

/*
if (num1 === num2) {
  console.log("Equal value");
} else {
  console.log("Not Equal value");
}

*/

// let num1 = "10";
// let num2 = 10;

/*
if (num1 == num2) {
  console.log("Equal Value");
} else {
  console.log("Not Equal value");
}
// equal value

if (num1 === num2) {
  console.log("Eqaul value");
} else {
  console.log("Not Equal value");
}
// not equal value

*/

/*
let array = [1, 2, 3, 4];
let array1 = [1, 2, 3, 4];
if (array == array1) {
  console.log("Eqaul value");
} else {
  console.log("Not Equal value");
} // not equal value

// not : non primitive value value same holei reference alada hoi jar karney commpair korle false ase

if (array === array1) {
  console.log("equal value");
} else {
  console.log("not equal value");
} // not equal value

*/

// Hoiting
// var, let , const

/*
console.log(myName); // undifined
var myName = "Sonatan";

console.log(name); // Error
let name = "Sonatan";

console.log(names);
const names = "Sonatan";
*/

/*
{
  var name = "Sonatan";
  console.log(name); // allowed;
}

console.log(name); // allowed;
*/

// console.log(name);

/*
{
  let names = "Sonatan";
  //   console.log(names); // allowed
}

console.log(names); // not allowed

*/

// Note : let always block scope

/*
{
  const number = 10;
  console.log(number); // allwoed
}
console.log(number); // not allowed
*/

// Note : Const always block scope

/*
function sum(a, b) {
  var result = a + b;
  console.log(result); // allowed
}
sum(10, 20);

console.log(result); // not allwoed
*/

// Note : var always function scope

// closure
/*
function outer() {
  let f_name = "Sonatan";
  let l_name = "Paul";

  function inner() {
    let fullName = f_name + " " + l_name;
    console.log(fullName);
  }
  inner();
}

outer();
*/

// callback Funtion

/*
function outer(inner) {
  console.log("Outer");
  inner();
}

function inner() {
  console.log("Inner");
}

outer(inner);
*/

/*
function outer(func, name) {
  console.log("Outer");
  func(name);
}
outer(function (name) {
  console.log("Hello", name);
}, "Sonatan");
*/

/*
function outer(func, name) {
  console.log("Outer");
  func(name);
}

function inner(name) {
  console.log("Inner", name);
}

outer(inner, "Paul");
*/

// function argument and parameter

/*
function sum(a, b, c, d, e, f) {
  console.log(arguments);
  const newArr = [...arguments];
  console.log(newArr);
  console.log(a, b, c, d, e, f); // parameter
}

// argument
sum(1, 2, 3, 4, 5, 6);
*/

const person = {
  name: "Paul",
  age: 26,
  color: "blue",
};
function myName(obj) {
  obj.name = "Sonatan Paul";
  //   console.log(obj);
}
console.log(person);
myName(person);
console.log(person);

const number = 20;

function myNumber(number) {
  number = 50;
  console.log(number);
}

console.log(number);
myNumber(number);

console.log(number);
