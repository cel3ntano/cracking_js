// @ts-nocheck

// Loose equality (This type of equality is called "loose" because it does not require both values to be of the same type)

// Type Coercion: If the values being compared are of different types, JavaScript will try to convert them to the same type. E.g., a string "2" can be loosely equal to the number 2.
// Potentially Unintuitive Results: Due to type coercion, loose equality can sometimes produce unexpected or unintuitive results.

console.log(null == undefined); // true
console.log(0 == false); // true
console.log("" == 0); // true
console.log("0" == 0); // true
console.log(null == null); // true
console.log([1] == 1); // true
console.log([] == []); // false (check by reference)

// ============================================================
// Strict equality in JavaScript is a comparison that checks whether two values are equal and of the same type

// No Type Coercion: Values must be of the same type for the comparison to return true. If the types differ, the result is false.
// Same Value: The values must be identical (i.e., 5 is not the same as "5").

console.log(null === null); // true
console.log(0 === false); // false
console.log(undefined === undefined); // true
console.log(1 === "1"); // false
console.log({} === {}); // false
console.log([] === []); // false
