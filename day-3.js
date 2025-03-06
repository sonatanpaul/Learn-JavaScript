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

const name = null;
console.log(name); // null , null means empty or nothing
console.log(typeof null); // object 
