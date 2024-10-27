// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
// https://www.w3schools.com/js/js_hoisting.asp

// JS Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

// In simple words, hoisting is the ability to use variables and functions before their declarations in the code

sumNumbers(3, 10);
function sumNumbers(num1, num2) {
  console.log(num1 + num2); // 13 //ES5(2009), ES6(2015)
}

// ==============================================================

(() => {
  console.log("before declaration ", b); // undefined
  var b = 10;
  console.log("after declaration", b); //10
})();

// ==============================================================

// ES5 (2009)
//  var Scope is Function-level, not Block-level

function foo() {
  var car = "honda";

  if (true) {
    var car = "bmw";
  }
  console.log("car inside the function: ", car); // 'bmw'
}

foo();

// console.log("car outside the function: ", car); // ReferenceError: car is not defined

// ==============================================================

// ES6(2015) let and const were introduced
// let and const scopes are Block-level
function foo1() {
  let car = "honda";

  if (true) {
    let car = "bmw";
    console.log("car inside the block: ", car); // 'bmw'
  }
  console.log("car outside the block: ", car); // 'honda'
}

foo1();

// ==============================================================

// console.log(declaration()); // This is function declaration
// console.log(functionalExpression()); // ReferenceError: Cannot access 'functionalExpression' before initialization
// console.log(functionalExpressionArrow()); // ReferenceError: Cannot access 'functionalExpressionArrow' before initialization

function declaration() {
  return "This is function declaration";
}

const functionalExpression = function () {};

const functionalExpressionArrow = () => {};

// ==============================================================

(() => {
  console.log("IIFE Arrow Explicit Return");
})();

(() => console.log("IIFE Arrow Implicit Return"))();

(function () {
  console.log("IIFE Anonymous Function ");
})();

(function namedFunction() {
  console.log("IIFE Named Function");
})();

// ==============================================================

// When we assign a value to car without declaring it with var, let, or const, JS treats car as a global variable (global or window)
(() => {
  function run() {
    car = "Tesla";
  }
  run();
})();

console.log(car); // Tesla

// ==============================================================

// 'use strict'
// The "use strict" directive in JavaScript was introduced in ECMAScript 5 (ES5)

// Prevents Accidental Global Variables (assigning a value to an undeclared variable, will throw an error, preventing accidental creation of global variables)
// Eliminates Silent Errors (i.e. assigning a value to an undeclared variable will throw a ReferenceError, helping to catch potential issues early)
// Disallows Duplicate Parameter Names (prohibits function declarations with duplicate parameter names, which can lead to confusion)
// Modifies this Behavior (if a function is called without an explicit this context (e.g., as a standalone function), this will be undefined instead of the global object)
// Disallows with Statements
// Restricts Certain Variable Declarations (disallows using eval in a way that affects the surrounding scope. Disallows assigning values to read-only properties or non-writable properties)
// Throws an error when assign a value to a property of a primitive value like (1).name = "Bob" // TypeError: Cannot set property 'name' of 1
// Reserved Keywords (Some identifiers are reserved and cannot be used as variable names in strict mode (e.g., implements, interface, let, package, private, protected, public, static, yield)
