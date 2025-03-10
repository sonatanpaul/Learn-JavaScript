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
