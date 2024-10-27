console.log(typeof []); // object
console.log(typeof new Set()); // object

let personBob = {
  name: "Bob",
  age: 40,
};

function changePerson(person) {
  const personCopy = person;
  personCopy.name = "Bill";
  return personCopy;
}
let personBill = changePerson(personBob);

console.log(personBill); // { name: 'Bill', age: 40 }
console.log(personBob); // { name: 'Bill', age: 40 }
// Objects in JavaScript are passed by reference, not by value
// When assign an object to a variable, the variable holds a reference (or pointer) to the location in memory where the object is stored, not a copy of the object itself.
// Assignment copies the reference, not the object: When assign one object variable to another, both variables now reference the same object in memory.

function changePersonBack(person) {
  const personCopy = { ...person };
  personCopy.name = "Bob";
  return personCopy;
}

personBob = changePersonBack(personBill);

console.log(personBill); // { name: 'Bill', age: 40 }
console.log(personBob); // { name: 'Bob', age: 40 }

// https://lodash.com/

const foo = () => {};
console.log(typeof foo); // function
// JavaScript treats functions as a special type of object because they have unique capabilities (being callable), so the typeof operator returns "function" as a way to distinguish them from regular objects.
// It's a quirk of JavaScript, meant to make it easier to identify functions.

foo.myProperty = "Hello";
console.log(foo.myProperty); // "Hello"
