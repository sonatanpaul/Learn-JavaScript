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

// let result = number === isPassed;
// console.log(result); // false check value and data type

// console.log(null === null); // true
// console.log(null == undefined); // true only value check
// console.log(null === undefined); // false check data type and value
// console.log(NaN == null);

// console.log(0 == -0);
// console.log(0 === -0);
// console.log(0 == false);
// console.log(0 === false);
// console.log(0 == 0);
// console.log(0 == null);
// console.log(0 == undefined);
// console.log(0 === undefined);
// console.log(0 == "");
// console.log(0 == false);

// Logical Operator

// if (10 > 5 && 10 < 5) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// if (10 > 15 && 6 < 10) {
//   console.log("True");
// } else {
//   console.log("false");
// }

// // || operator
// console.log(false || true);
// console.log(true || false);
// console.log(false || false);
// console.log(true || true);
// console.log(0 || true);
// console.log(null || true);
// console.log(true || undefined);

// ?? operator
// console.log(null ?? false);
// console.log(undefined ?? true);
// console.log("Sontan" ?? false);
// console.log(true ?? "Sonatan");

// console.log(false || true);
// console.log("Sonatan" || false);
// console.log("" || true);
// console.log("" && false);
// console.log(false && "");

// conditional ternary operator

// let age = 20;

// age > 16 ? console.log("You Do") : console.log("You Can't Do");
// age >= 25 ? console.log("Yes You Win") : console.log("You Can't Do");

// console.log(false && true);
// console.log(true && false);
// console.log("" && true);
// console.log(true || false);
// console.log(false || true);
// console.log(null ?? true);
// console.log(true ?? null);

// bitwise operator
// console.log(1111 & 1001);
// console.log(15 & 9);
// console.log(15 | 9);
// console.log(15 ^ 9);
// console.log(9 << 2);
// console.log(9 >> 2);

// Problem Solve with Only operator and Expression

/*
let num1 = 5;
let num2 = 3;
let sum = num1 + num2;
console.log(sum); // 8
*/

/*
let num1 = 10;
let num2 = 4;
let result = num1 - num2;
console.log(result); // 6
*/

/*
let num1 = 7;
let num2 = 2;
let multi = num1 * num2;
console.log(multi); // 14
*/

/*
let num1 = 20;
let num2 = 5;
let result = num1 / num2;
console.log(result); // 4
*/

/*
let num1 = 14;
let num2 = 3;
let result = num1 % num2;
console.log(result); // 2
*/

/*
let num1 = 3;
let num2 = 2;
let result = num1 ** num2;
console.log(result);
*/

/*
let x = 5;
console.log(x);
x += 2; // x = x + 2
console.log(x); //7
*/

/*
let y = 10;
console.log(y);
y -= 4; // y = y - 4
console.log(y); // 6
*/

/*
let z = 6;
console.log(z);
z *= 3; // z = z * 3
console.log(z); // 18
*/

/*
let a = 8;
console.log(a); // 8
a /= 2; // a = a / 2
console.log(a); // 4
*/

/*
let b = 12;
console.log(b); // 12
b %= 5; //b =b% 5
console.log(b); // 2
*/

/*
let c = 4;
console.log(4); // 4
c **= 2; // c = c ** 2
console.log(c); // 16
*/

// comparison operator
/*
5 > 3 ? console.log(true) : console.log(false);
5 < 10 ? console.log(true) : console.log(false);
6 != 9 ? console.log(true) : console.log(false);
4 >= 4 ? console.log(true) : console.log(false);
2 <= 3 ? console.log(true) : console.log(false);
5 == "5" ? console.log(true) : console.log(false);
5 === "5" ? console.log(true) : console.log(false);
null == undefined ? console.log(true) : console.log(false);
null === undefined ? console.log(true) : console.log(false);
*/

// Logical Operator
/*
console.log(true && false);
console.log(false && true);
console.log(true || false);
console.log(false || true);
console.log(!true);
console.log(!false);
console.log(5 > 3 && 2 < 4);
console.log(7 < 5 || 4 < 2);
console.log(7 < 5 || 4 > 2);
console.log(!(4 == 4));
*/
// bitwise operator

/*
console.log(5 & 1);
// console.log(false & true);
// console.log(true & false);
console.log(5 | 1);
console.log(5 ^ 1);
console.log(~5);
console.log(5 << 3);
console.log(5 >> 4);
*/

// string operator
/*
let fname = "Sonatan";
let lname = "Paul";
let fullName = fname + " " + lname;
console.log(fullName);
console.log("hello".length); // 5
console.log("JavaScript".indexOf("Script")); // 4
console.log("Banaana".substring(1, 4)); // ana
*/

//  typeof operator
console.log(typeof 40);
console.log(typeof "Paul");
console.log(+"Paul");
console.log(-"Paul");

let x = 5;
console.log(x++);
console.log(x);
console.log(--x);
console.log(x);
