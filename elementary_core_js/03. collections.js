// Collections:
// Set
// WeakSet
// Map
// WeakMap

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
