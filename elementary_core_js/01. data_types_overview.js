// primitive data types
// These are the most basic data types in JavaScript. They are immutable, meaning the actual value cannot be altered once created.
// When we say primitive types are immutable, it means:
// The value itself cannot be changed or modified.
// However, the variable that holds the primitive value can be reassigned to a different value.

// Number: Represents numeric values, including integers and floating-point numbers.
let age = 20;
let result = -80.1;
let pi = 3.14159;
Number(1);

// Special numeric values include:
// NaN (Not-a-Number): Represents a computational error.
Number("abc"); // NaN

// Infinity and -Infinity: Represent values greater or smaller than the maximum/minimum representable number.

// BigInt: Represents integers larger than the safe limit for Number. It is created by appending an n to the end of the number.
let bigNumber = 1234567890123456789012345678901234567890n;
BigInt(5);
console.log(typeof 3n); // bigint

// String: Represents a sequence of characters, enclosed in single ('), double ("), or backticks (`).
let name = "John Doe";
let greeting = "Hello";
let template = `Welcome, ${name}`;
String("Hello");

// Boolean: Represents a logical entity and can be either true or false.
let isAvailable = true;
let hasFinished = false;
console.log(typeof false); // boolean

// Undefined: Represents an uninitialized variable or a missing value.
let notAssigned; // notAssigned is undefined

// Null: Represents an intentional absence of any object value.
let emptyValue = null;
console.log(typeof null); // Although typeof null returns "object", null is a primitive value that represents the intentional absence of any object value

// Symbol: Represents a unique identifier, often used as object property keys. Every Symbol is unique.
let id = Symbol("id");
let anotherId = Symbol("id");
// id !== anotherId

// Primitives in JavaScript are immutable and copied by value
let name1 = "Bob";
let name2 = name1;
name1 = "Joe";
console.log(name2); // 'Bob'

// =======================================================================================================================================================
// Non-Primitive (Complex) Data Types
// These are objects that can store collections of data or more complex entities.

// Object: A collection of key-value pairs. An object can contain any type of data, including other objects. Object is the fundamental complex data type
let person = {
  name: "Alice",
  age: 30,
  isEmployed: true,
};

// Array: A special type of object used to store ordered collections of data. Arrays use numeric indices.
let colors = ["red", "green", "blue"];

// Function: A special object that is executable. Functions are first-class objects in JavaScript, meaning they can be assigned to variables, passed as arguments, or returned from other functions.
function greet(name) {
  return `Hello, ${name}!`;
}

// Date: An object that represents dates and times.
let now = new Date();

// RegExp: Represents regular expressions, used for pattern matching within strings.
let pattern = /ab+c/;

// Map: A collection of key-value pairs, similar to objects but with ordered keys and better performance for frequent additions/removals.
let map = new Map();
map.set("name", "Bob");
map.set("age", 40);

// WeakMap: A WeakMap is similar to a Map, but it only allows objects as keys (not primitive values).A WeakMap is similar to a Map, but it only allows objects as keys (not primitive values).
// The keys are not enumerable, so you can't iterate over them.
// If the key object is no longer needed elsewhere in the code, it can be garbage collected, which prevents memory leaks.
// Storing metadata or data associated with an object without preventing it from being garbage collected.
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "Some data");
obj = null; // Now the object can be garbage collected

// Set: A collection of unique values, useful for storing items without duplicates.
let set = new Set();
set.add(1);
set.add(2);
set.add(2); // Duplicate, won't be added

// WeakSet: A WeakSet is like a Set, but it only stores objects (no primitives) and the objects are held weakly
// Like WeakMap, the entries are not enumerable.
// An object added to a WeakSet will be removed when there are no other references to it, making it ideal for tracking objects without causing memory leaks.
// Keeping track of a list of objects without preventing them from being garbage collected.
let weakSet = new WeakSet();
let objA = { name: "example" };
weakSet.add(objA);
objA = null; // The object can be garbage collected

// HTML Collection: An HTMLCollection is a live collection of DOM elements, typically returned by DOM methods like document.getElementsByTagName or document.forms
// let divs = document.getElementsByTagName("div");
// console.log(divs.length); // This length updates if more divs are added to the DOM

// Arguments: the arguments object is a special object available inside functions that contains all the arguments passed to that function
function showArguments() {
  console.log(arguments); // An array-like object with all the passed arguments
}
showArguments(1, 2, 3); // { '0': 1, '1': 2, '2': 3 }

// Primitive Data Types:
// Number
// BigInt
// String
// Boolean
// Undefined
// Null
// Symbol

// Non-Primitive (Complex) Data Types:
// Object (The fundamental complex data type)
// Special types of objects:
// Array
// Function
// Date
// RegExp
// Map
// WeakMap
// Set
// WeakSet
// HTMLCollection
// Arguments
