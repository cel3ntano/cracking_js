// Collections:
// Set
// WeakSet
// Map
// WeakMap
// Arguments
// DOM pseudo arrays

// ===================================================================

// Set

// A Set is a collection of unique values.
// It stores only distinct elements, and you can use it to manage lists of items without duplicates.
// Values are unique.
// Maintains the order of insertion.
// Iterates in insertion order.
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // Won't be added again since it's a duplicate

const numbers = [1, 2, 3, 4, 1, 1, 2, 3, 1, 4, 4, 5, 3];
const filteredNumbers = new Set(numbers);
console.log(filteredNumbers); // Set(5) { 1, 2, 3, 4, 5 }

const numbersArray = [...filteredNumbers];
console.log(numbersArray); // [ 1, 2, 3, 4, 5 ]

const set1 = new Set();
const person1 = {
  name: "Bob",
  age: 40,
};

set1.add(person1);
console.log(set1); // Set(1) { { name: 'Bob', age: 40 } }
console.log(set1.size); // 1
console.log(set1.has(person1)); // true

// Set.prototype.add();
// Set.prototype.clear();
// Set.prototype.delete();
// Set.prototype.entries();
// Set.prototype.forEach();
// Set.prototype.has();
// Set.prototype.keys();
// Set.prototype.values();

// ===================================================================

// WeakSet

const weakSet = new WeakSet();
const obj = {};
weakSet.add(obj);

// A WeakSet is like a Set, but its elements are objects, and they are weakly held. This means they do not prevent garbage collection if there are no other references to the objects.
// Values must be objects.
// Not enumerable (no iteration).
// Useful for tracking objects without retaining them.

const filteredValues = new WeakSet();
filteredValues.add({ name: "Bob" });
// filteredValues.add(1); // TypeError: Invalid value used in weak set
// [...filteredValues]; // TypeError: filteredValues is not iterable

// Set.prototype.add();
// Set.prototype.delete();
// Set.prototype.has();
// ===================================================================

// Map

// A Map is a collection of key-value pairs. Unlike regular JavaScript objects, where keys must be strings or symbols, a Map allows keys of any type, including objects, functions, and primitives.

const map = new Map();
map.set("key", "value");
map.set({ obj: 1 }, 42);
console.log(map.get("key")); // 'value'

// Maintains the order of insertion.
// Keys can be of any type.
// Iterates in insertion order.
const map1 = new Map();
const personBob = {
  name: "Bob",
  age: 40,
};

const pet1 = "dog";

map1.set(personBob, pet1);
console.log(map1); // Map(1) { { name: 'Bob', age: 40 } => 'dog' }

// Map.prototype.set()
// Map.prototype.get()
// Map.prototype.has()
// Map.prototype.clear()
// Map.prototype.delete()
// Map.prototype.entries()
// Map.prototype.forEach()
// Map.prototype.keys()
// Map.prototype.values()

// ===================================================================

// WeakMap

// A WeakMap is similar to a Map, but the keys must be objects, and they are held weakly (meaning they do not prevent garbage collection if there are no other references to the object).
const weakMap = new WeakMap();
const objA = {};
weakMap.set(obj, "metadata");
// Keys are always objects.
// Not enumerable (no iteration).
// Useful for associating data with objects without affecting garbage collection.

// Map.prototype.delete()
// Map.prototype.set()
// Map.prototype.get()
// Map.prototype.has()

// ===================================================================

// Arguments
// Collection-like object (not an actual collection)
// The arguments object is a special object available inside non-arrow functions that contains all the arguments passed to the function. It is not a real array but has array-like properties (e.g., indexed access).
function example() {
  console.log(arguments[0]); // Logs the first argument passed
  console.log(arguments.length); // Logs the number of arguments
}
example("hello", "world");
// Contains all arguments passed to a function.
// Not a true array but array-like (you can use .length, access by index).
// Lacks array methods like .map(), .filter().

function countSomething(a, b, c) {
  global.arg = arguments;
}

countSomething(1, "dog", { name: "Bob" });
console.log(arg); // [Arguments] { '0': 1, '1': 'dog', '2': { name: 'Bob' } }

function countSmth(a, ...rest) {
  console.log(a);
  global.rest = rest;
}
countSmth("Bob", 1, 2, 3, 4, 5);
console.log(rest); // [ 1, 2, 3, 4, 5 ]

// ===================================================================

// HTMLCollection

// An HTMLCollection is a collection of DOM elements. It is a "live" collection, meaning it updates automatically when the document changes (e.g., when elements are added or removed).
// Ordered collection.
// Elements can be accessed via index or by using a name or id.
// Updates automatically with DOM changes.

// const divs = document.getElementsByTagName("div"); // Returns an HTMLCollection
// console.log(divs[0]); // Access the first <div> element

// const HTMLCollection = document.getElementsByClassName("item__box");
// ===================================================================

// NodeList

// A collection of nodes returned by methods like querySelectorAll().
// It can be static or live, depending on how it was created. Unlike HTMLCollection, NodeList can contain any type of nodes, not just elements.

// const NodesCollectionStatic = document.querySelectorAll("item__box"); // static because of querySelectorAll
// const NodesCollectionLive = document.getElementsByTagName(); // live

// Live NodeList can be created using:
// document.getElementsByTagName()
// element.getElementsByTagName()
// element.childNodes
