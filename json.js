const person = {
  name: "Sonatan Paul",
  age: 26,
  isStudent: true,
  color: "black",
};
// console.log(person);

// how to convert object to JSON

const newPerson = JSON.stringify(person);
// console.log(newPerson);

// how to convert JSON to object

const newPerson2 = JSON.parse(newPerson);
// console.log(newPerson2);
