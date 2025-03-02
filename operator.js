// Operator
// ==================================================================
// operator name :  + - * / .
// oprends name :  a + b // a and b is operands .
// expression name : a + b or let x = a + b is expression .

// arithmetic operator number :
/*
let a = 10;
let b = 20;
console.log(a);
console.log(b);
let sum = a + b;
console.log(sum); // 30
let sub = a - b;
console.log(sub); // -10
let sub1 = b - a;
console.log(sub1); // 10
let multi = a * b;
console.log(multi); // 200
let division = a / b;
console.log(division); // 0.5 
*/

// arithmetic operator with string
/*
let f_name = "Sonatan";
let l_name = "Paul";
let fullName = f_name + l_name;
console.log(fullName); // SonatanPaul
// with space
let full_name = f_name + " " + l_name;
console.log(full_name); // Sonatan Paul
*/

// remainder

/*
let number = 12;
let number2 = 5;
let result = number % number2;
console.log(result);
*/

// pre-increment and post increment

/*
let count = 5;
console.log(count++);
console.log(count++);
*/

/*
let number = 6;
console.log(--number);
console.log(--number);
console.log(--number);
*/

// assignment operator
/*
let number = 10;
number = number + 10;
console.log(number);
// short hand
number += 10;
console.log(number);
*/

/*
let number = 10;
number = number - 5;
console.log(number); // 5
number -= 2;
console.log(number); // 3
*/

// comparison operator

// const number = 10;
// const number1 = 10;
// const comparison = number == number1;
// console.log(comparison);

// using ==
// let num1 = 10;
// let num2 = "10";
// let result = num1 == num2;
// console.log(result); // true note == check only value

// using ===
// let result1 = num1 === num2;
// console.log(result1); // false === check value and data type

let number = 0;
let isPassed = false;
// let result = number == isPassed;
// console.log(result); // true check value

let result = number === isPassed;
console.log(result); // false check value and data type

console.log(null === null); // true
console.log(null == undefined); // true only value check
console.log(null === undefined); // false check data type and value
console.log(NaN == null);
