// Collections:
// Set
// WeakSet
// Map
// WeakMap

// Description: A Set is a collection of unique values.
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

// Description: A WeakSet is like a Set, but its elements are objects, and they are weakly held. This means they do not prevent garbage collection if there are no other references to the objects.
// Values must be objects.
// Not enumerable (no iteration).
// Useful for tracking objects without retaining them.

const filteredValues = new WeakSet();
filteredValues.add({ name: "Bob" });
// filteredValues.add(1); // TypeError: Invalid value used in weak set
// [...filteredValues]; // TypeError: filteredValues is not iterable
