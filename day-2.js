// templete litarels
/*
let name = "Sonatan Paul";
let age = 26;

let template = `amar name ${name} and amar age ${age}`;
console.log(template);
*/

// object :

// const person = {
//   name: "Paul",
//   age: 26,
// };

/*
console.log(person);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
*/

/*
for (let keysValues in person) {
  console.log(keysValues, person[keysValues]);
}
*/

// for (let keyValue of Object.entries(person)) {
//   //   console.log(keyValue);
//   const [frist, second] = keyValue;
//   console.log(frist, second);
// }

// seal method cant add person new properties
/*
console.log(Object.seal(person));
person.fullName = "Sonatan Paul";
console.log(person);
*/

// freeze method cant update or add new properties of person objcet
/*
console.log(Object.freeze(person));
person.fullName = "Kumar Paul";
person.age = 28;
console.log(person);
*/

// how to access object properties

/*
const person = {
  name: "Paul",
  age: 26,
  friends: ["anik", "asraful", "rayhan"],
  details: {
    fColor: "Blue",
    status: "No Data",
    1: 10,
  },
};

console.log(person);
console.log(person.name);
console.log(person.friends);
console.log(person.friends[2]);
console.log(person.details.fColor);
console.log(person.details[1]);
console.log(person.details?.mother?.status);
console.log(person["details"]["fColor"]);
*/

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(numbers);

/*
let sum = [];
for (let i = 0; i <= numbers.length - 1; i++) {
  console.log(i);
  //   const element = numbers[i];
  sum.push(numbers[i] + 1);
}

console.log(sum);
*/

// const double = numbers.map((num) => num + 1);
// console.log(double);
// numbers.map((num) => console.log(num * 2));

// const friends = ["Anik", "Asraful", "Rayhan"];
// console.log(friends);

// friends.map((frined) => console.log(frined));

/*
const person = [
  { name: "Anik", age: 26 },
  { name: "Paul", age: 26 },
];
*/

// const friends = person.map((friend) => friend.name);
// const friends = person.map((friend) => friend.age);
// console.log(friends);

// filter, find, forEach

const persons = [
  { name: "Sonatan", age: 27, color: "blue", isMarried: true },
  { name: "Anik", age: 26, color: "black", isMarried: true },
  { name: "Asraful", age: 27, color: "blue", isMarried: true },
  { name: "Rayhan", age: 26, color: "black", isMarried: true },
];

// persons.forEach((person) => console.log(person.age));
// const newPerson = persons.map((person) => person.name);
// const newPerson = persons.find((person) => person.age === 27);
// const newPerson = persons.filter((person) => person.color === "black");
// const removePerson = persons.filter((person) => person.name !== "Rayhan");
// console.log(removePerson);
