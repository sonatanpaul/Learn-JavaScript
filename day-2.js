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

