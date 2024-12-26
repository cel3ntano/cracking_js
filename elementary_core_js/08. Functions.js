// A function declaration follows a specific structure where we use
// the function keyword, followed by the function's name, parameters in parentheses, and the function body in curly braces.
function greetUser(name) {
  return 'Hello, ' + name + '!';
}

// One of the most important characteristics of function declarations is hoisting.
// This means JS moves these declarations to the top of their scope during the compilation phase.
// As a result, we can actually use a function before you declare it in the code
// This works thanks to hoisting
sayHello('John');

function sayHello(name) {
  console.log('Hello, ' + name);
}

// Every function declaration comes with built-in features:
// - the arguments object (pseudo-array) that collects all passed arguments
// - the ability to set default values for parameters
// - the option to use rest parameters (...) to handle multiple arguments.
// - The function's length property tells you how many parameters were defined, though it only counts up to the first parameter with a default value.

function example(a = 1, ...rest) {
  console.log(arguments); // Contains all arguments
  return a + rest[0]; // Uses default and rest parameters
}

// =====================================================================================
// =====================================================================================

// A function expression is when we create a function and assign it to a variable or constant.
// Unlike function declarations that start with the function keyword,
// function expressions are part of a larger expression, typically an assignment.
// This is a function expression
const greet = function (name) {
  return `Hello, ${name}!`;
};

// A function expression occurs when we assign a function to a variable.
// Each function has a length property showing how many parameters it expects in its definition.
// When using function expressions (not declarations), we must define them before calling them.
// Inside a function, we can access all passed arguments through the special arguments object, which acts like an pseudo-array.
// Functions can have default values for parameters using = and can collect unlimited extra arguments using the ...rest parameter.

const greet1 = function (name = 'friend', ...titles) {
  console.log(`Hello ${name}, your titles are: ${titles.join(', ')}`);
  console.log(arguments.length); // Shows number of actual arguments passed
};

// Function declaration - can be used before definition
multiply(2, 3); // Works fine!

function multiply(a, b) {
  return a * b;
}

// Function expression - cannot be used before definition
add(2, 3); // Error: add is not defined

const add = function (a, b) {
  return a + b;
};

// =====================================================================================
// =====================================================================================

// Arrow functions are a modern way to write functions in JavaScript that was introduced in ES6 (2015).
// They provide a more concise syntax compared to traditional function expressions and also handle the this keyword differently.

// Traditional function
const greet2 = function (name) {
  return 'Hello, ' + name;
};

// Arrow function
const greet3 = name => 'Hello, ' + name;

// Arrow functions in JS are function expressions that provide a shorter syntax than traditional functions.
// They automatically capture the surrounding this value and can't be used as constructors.
// While they support default and rest parameters like regular functions, they lack their own arguments object.
// Like all function expressions, they must be defined before use.
// They can use parentheses for both parameters and function body, though these are optional in some cases (like with a single parameter or single return expression).
// The most important distinction is their behavior with this – arrow functions inherit it from their enclosing scope,
// making them ideal for callbacks but unsuitable for object methods where this should refer to the object itself.

// =====================================================================================
// =====================================================================================

// An IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined.
(function () {
  console.log('I run immediately!');
})();

// An IIFE is indeed a function expression that executes immediately when defined.
// While any type of function (regular, arrow, or async) can become an IIFE, each brings its own behavior regarding scope and context.
// Though ES6+ features like block scope and modules have reduced the original need for IIFEs (scope isolation),
// they remain valuable for specific use cases.
// We'll find them particularly useful in scenarios like one-time initialization,
// especially with async operations, and when we need to create clean interfaces with private state.
