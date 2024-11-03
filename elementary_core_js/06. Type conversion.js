const a = [1, 2, 3, 4, 5] + ""; // "1,2,3,4,5"
const b = 112 + "abc"; //"112abc"
const c = undefined + "133"; // "undefined133"
const d = true + "test"; // "truetest"
const e = String(null); // "null"

console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
console.log(Boolean(" ".trim())); // false

// In general, JavaScript performs type coercion to numbers in contexts where numeric values are expected or required.
// This process is called type conversion or type coercion, and JavaScript's flexible type system allows for these conversions dynamically.

//  ==============================================================================================================
//  ==============================================================================================================
//  ==============================================================================================================

// Main scenarios when JavaScript converts values into the number type:
// 1. Arithmetic Operations (except + with strings)
let resulA = "5" * "2"; // 10 (both "5" and "2" are converted to numbers)

// The exception is the + operator. When one of the operands is a string, JavaScript treats + as string concatenation:
let resultB = "5" + 2; // "52" (2 is converted to a string, not a number)

//  ==============================================================================================================

// 2.  Unary Plus Operator (+)
// The unary + operator attempts to convert its operand to a number:
let resultC = +"42"; // 42 (string "42" is converted to number 42)
let resultD = +true; // 1 (true is converted to 1)
let resultE = +"hello"; // NaN (non-numeric string returns NaN)

1 + +"1234"; // 1235

//  ==============================================================================================================

// 3. Comparison Operators (like <, >, <=, >=)
// When comparing values using comparison operators, JavaScript converts both operands to numbers (except for strict equality checks with ===):
let resultF = "10" > 5; // true ("10" is converted to 10)
null === 0; // false
null >= 0; // true
null <= 0; // true

//  ==============================================================================================================

// 4. Loose Equality (==)
// When comparing values with ==, JavaScript will convert them to a common type. If one value is a string and the other a number, it will convert the string to a number:
let resultG = "5" == 5; // true ("5" is converted to 5)

//  ==============================================================================================================

// 5. Explicit Conversion Functions (Number(), parseInt(), parseFloat())
// JavaScript provides functions to explicitly convert values to numbers:
let resultH = Number("123"); // 123

let resultI = parseInt("123.45"); // 123 (parses only the integer part)
// The parseInt function accepts a second argument called the radix, which specifies the base of the numeral system to interpret the string.
// If the radix is omitted, JavaScript:
// Defaults to base 10 if the string does not start with 0x (hexadecimal prefix).
// Defaults to base 16 if the string starts with 0x or 0X.
parseInt("1010", 2); // 10 (binary to decimal)
parseInt("20", 8); // 16 (octal to decimal)
parseInt("FF", 16); // 255 (hexadecimal to decimal)
parseInt("100", 10); // 100 (decimal to decimal)

const binary = 0b1011; // 11 in decimal
const octal = 0o17; // 15 in decimal
const hexadecimal = 0xf; // 15 in decimal

const result = binary + octal + hexadecimal; // 11 + 15 + 15
console.log(result); // 41 (in decimal)

let resultJ = parseFloat("123.45"); // 123.45

//  ==============================================================================================================

// 6.  Math Functions
// Functions in the Math object automatically convert arguments to numbers:
let resultK = Math.sqrt("9"); // 3 ("9" is converted to 9)

//  ==============================================================================================================

// 7. Automatic Conversion in isNaN() and isFinite()
// The isNaN() and isFinite() functions will first convert their argument to a number before checking:
isNaN("123"); // false ("123" is converted to 123)
isNaN("abc"); // true ("abc" cannot be converted to a number, so it's NaN)

//  ==============================================================================================================

// 8. Template Literals with Expressions
// When using expressions within template literals (backticks), non-string values within ${} are converted to strings, but this may include converting values to numbers if other arithmetic is applied:

let num = "3" * "2";
let resultL = `Result is ${num}`; // "Result is 6"

//  ==============================================================================================================

// 9. Array to Number Conversion
// When attempting arithmetic on an array, JavaScript tries to convert the array to a number, usually resulting in NaN if the array contains multiple elements:Array to Number Conversion
// When attempting arithmetic on an array, JavaScript tries to convert the array to a number, usually resulting in NaN if the array contains multiple elements:

let resultM = [10] * 2; // 20 (single-element array converts to 10)
let resultN = [10, 20] * 2; // NaN (multiple elements result in NaN)

//  ==============================================================================================================
//  ==============================================================================================================
//  ==============================================================================================================

!!undefined; //false
!!null; //false

!!0; //false
!!NaN; //false

!!Infinity; //true
!!1234; //true

!!" "; //true
!!""; //false

!![]; //true
!!{}; //true

Boolean({}); // true
({}) + ""; // [object Object]
String({}); // [object Object]
