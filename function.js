// console.log("Hello WOrld");

// function :
// define or declare function

/*
function printThis() {
  console.log("hello world");
}

// invoke function or call function
printThis();

// more one

function myFunction() {
  console.log("Learn Funciton");
}
myFunction();
*/
// function as an expression

// const printMe = function () {
//   console.log("hello world");
// };

// printMe();

// more one

/*
const myFunction = function () {
  console.log("Hello world");
};

console.log(myFunction);
myFunction();
*/

// parameters and arguments
/*
function sum(a, b, c) {
  let result = a * (b + c);
  console.log(result);
}

sum(2, 4, 6);
*/
// More One

/*
function sum(a, b) {
  let result = a + b;
  console.log(result);
}
sum(10, 20);
*/

// function return keyword

/*
function sum(a, b) {
  let result = a + b;
  return result;
}

let totalSum = sum(10, 9);
console.log(totalSum);

function double(x) {
  let result = 5 * x;
  return result;
}

console.log(double(10));
*/

// default parameters

// function sum(a, b) {
//   let result = a * (b + 12);
//   return result;
// }
// let result = sum(2, 10);
// console.log(result); // 240

/*
function sum(a, b) {
  let result = a * (b + 12);
  return result;
}
let result = sum(2);
console.log(result); NaN
*/

/*
function sum(a, b = 10) {
  let result = a * (b + 12);
  return result;
}
let result = sum(2);
console.log(result); //44
*/

/*
function sum(a = 10, b = 2) {
  let result = a * (b + 12);
  return result;
}
let result = sum();
console.log(result); 140
*/

// rest parameters

// function sum(a, b, c) {
//   let result = a + b + c;
//   return result;
// }

// let result = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 7);
// console.log(result);

/*
function sum(a, b, c, ...rest) {
  let result = a + b + c;
  console.log(...rest);
  return result;
}

let result = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 7);
console.log(result);
*/

// Nested function

// function outer() {
//   console.log("outer");
//   function inner() {
//     console.log("inner");
//   }
//   inner();
// }

// const retFunc = outer();

/*
function outer() {
  console.log("outer");
  return function inner() {
    console.log("inner");
  };
}

const retFunc = outer();
retFunc();
*/

// callback function

// function foo(buzz) {
//   console.log("Foo");
//   buzz();
// }

// const buzz = function () {
//   console.log("buzz");
// };

// foo(buzz);

// function foo(buzz) {
//   console.log("Foo");
//   buzz();
// }

// foo(function () {
//   console.log("buzz");
// });

// Pure function

// function greeting(name) {
//   let names = "Hello" + " " + name;
//   console.log(names);
// }

// greeting("Sonatan");

// In pure function

// let myName = "Hello";
// function greeting(name) {
//   console.log(myName + " " + name);
// }

// myName = "Hola";

// greeting("Paul");

// higer order function

// function getCamera(camera) {
//   console.log("Sony");
//   camera();
// }

// getCamera(function () {
//   console.log("Sony Camera");
// });

// more option

// function returnFunc() {
//   console.log("Outer");
//   return function () {
//     console.log("Inner Function");
//   };
// }

// const func = returnFunc();
// func();

// arrow function

// function myFunction() {
//   console.log("hello");
// }

// myFunction();

// const myFunction = () => {
//   console.log("hello");
// };
// myFunction();

// const func = (a, b) => a + b;

// const result = func(20, 20);
// console.log(result);

// const func = (a) => a * 5;
// const result = func(20);
// console.log(func(20));

// IIFE

/*
(function () {
  console.log("hello");
})();

// more option
(function (a, b) {
  console.log(a + b);
})(20, 20);

// more option

(function (a) {
  console.log(a * 5);
})(20);
*/

// recursion

function foo() {
  foo();
}

function fethchWater(count) {
  console.log("fateching water", count);
  if (count === 0) {
    console.log("no more fatching");
    return;
  } else {
    fethchWater(count - 1);
  }
}

fethchWater(5);
