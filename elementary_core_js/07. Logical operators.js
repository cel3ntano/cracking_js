// In JavaScript, && evaluates expressions from left to right
// and returns the last "truthy" value if all expressions are truthy, or the first "falsy" value it encounters.

console.log(true && true); // Returns: true
console.log(true && false); // Returns: false
console.log(false && true); // Returns: false
console.log(false && false); // Returns: false

function validateUser(age, name) {
  // Both conditions must be true for the validation to pass
  if (age >= 18 && name.length > 0) {
    return 'User is valid';
  }
  return 'Validation failed';
}

// How does && handle non-boolean values?
// JavaScript will convert these values to booleans through a process called "type coercion."
// Here are the values that JavaScript considers "falsy":

// These all evaluate to false when used with &&
false;
0;
(''); // Empty string
null;
undefined;
NaN; // Not a Number

console.log('Hello' && 0); // Returns: 0
console.log('Hello' && 'World'); // Returns: "World"
console.log(0 && 'World'); // Returns: 0

// This behavior makes && particularly useful for checking if properties or methods exist before using them, often called "short-circuit evaluation":
// Safe way to access nested properties
const user = {
  profile: {
    name: 'John',
  },
};

// This will not throw an error if profile doesn't exist
const userName = user && user.profile && user.profile.name;

// ===========================================================================================================
// ===========================================================================================================
// ===========================================================================================================

// The OR operator (||) evaluates expressions from left to right
// and returns the first "truthy" value it encounters OR the last "falsy" value if all values are falsy
// The second part never gets evaluated because true is already truthy
console.log(true || console.log('This never runs')); // Returns: true

// Using a function to demonstrate
function expensiveOperation() {
  console.log('This is a heavy computation');
  return true;
}

// expensiveOperation() never runs because the first value is truthy
const result = 'Hello' || expensiveOperation(); // Returns: "Hello"
// Also The OR operator uses what's called "short-circuit evaluation," which is a really important optimization feature.
// When the OR operator encounters its first truthy value, it immediately returns that value and stops evaluating any remaining expressions.

// Basic boolean logic with OR
console.log(true || true); // Returns: true
console.log(true || false); // Returns: true
console.log(false || true); // Returns: true
console.log(false || false); // Returns: false

// When all values are falsy, it returns the last falsy value
console.log(false || 0 || ''); // Returns: '' (empty string)
console.log(null || undefined); // Returns: undefined
console.log(false || 0 || null); // Returns: null

// As soon as it finds a truthy value, it returns that and stops
console.log(false || 'Hello' || 0); // Returns: 'Hello'
console.log(0 || {} || false); // Returns: {} (empty object is truthy)

// Just like AND, the OR operator has interesting behavior with non-boolean values.
// It returns the first "truthy" value it finds, which makes it excellent for providing fallback values:
// Using OR for default values

function greetUser(name) {
  // If name is undefined or empty, use "Guest" instead
  const userName = name || 'Guest';
  return `Hello, ${userName}!`;
}

console.log(greetUser()); // Returns: "Hello, Guest!"
console.log(greetUser('John')); // Returns: "Hello, John!"

// This pattern was so useful that in modern JavaScript, they introduced the nullish coalescing operator (??) as a more precise alternative.
// While || checks for any falsy value, ?? only checks for null or undefined
// Comparing OR vs nullish coalescing

const count = 0 || 5; // Returns: 5 (because 0 is falsy)
const count2 = 0 ?? 5; // Returns: 0 (because 0 is not null/undefined)

const nullValue = null || 'default'; // Returns: "default"
const emptyString = '' || 'default'; // Returns: "default"
const zero = 0 || 'default'; // Returns: "default"

//  common real-world use case combines both AND and OR operators for complex conditions:
// Validating a user form
function validateForm(formData) {
  // Check if required fields are filled AND either email OR phone is provided
  const isValid =
    formData.name && // name must be present
    formData.age && // age must be present
    (formData.email || formData.phone); // either email OR phone must be present

  return isValid ? 'Form is valid' : 'Please fill all required fields';
}

// Test the validation
const form1 = {
  name: 'John',
  age: 25,
  email: 'john@example.com',
  // No phone number, but that's okay because we have email
};

// One thing to be careful about is operator precedence - AND has higher precedence than OR.
// This means that in complex expressions, AND operations are evaluated before OR operations, unless we use parentheses to specify otherwise:

// Understanding operator precedence
console.log(true || (false && false)); // Returns: true
// Because it evaluates as: true || (false && false)

console.log((true || false) && false); // Returns: false
// Parentheses change the evaluation order

// ===========================================================================================================
// ===========================================================================================================
// ===========================================================================================================

// The ternary operator in JavaScript is a concise way to write simple if/else conditions.
condition ? valueIfTrue : valueIfFalse;
// Traditional if/else
let age = 20;
let message;
if (age >= 18) {
  message = 'Adult';
} else {
  message = 'Minor';
}

// Same logic using ternary operator
let msg = age >= 18 ? 'Adult' : 'Minor';

// Usage with more complex expressions
let greeting = time < 12 ? 'Good morning!' : 'Good afternoon!';

// The ternary operator becomes particularly useful when you need to assign values conditionally inside template literals or JSX:
// Using ternary in template literals
const userStatus = `User is ${isLoggedIn ? 'logged in' : 'not logged in'}`;

// Using ternary for conditional rendering
const welcomeMessage = `Welcome ${user.name ? user.name : 'Guest'}!`;

// One powerful aspect of the ternary operator is that it's an expression, not a statement.
// This means it can be used in places where we can't use a regular if/else:
// Using ternary in object initialization
const userConfig = {
  theme: isDarkMode ? 'dark' : 'light',
  fontSize: isLargeText ? 16 : 12,
};

// Using ternary in function arguments
setUserPreference(isAdmin ? 'full' : 'limited');

// While ternary operators are powerful, they can become hard to read when nested. Here's an example of what to avoid:
// Avoid this - hard to read nested ternaries
const message1 =
  age >= 18 ? (type === 'admin' ? 'Adult Admin' : 'Adult User') : 'Minor';

// Better to use if/else or split into multiple lines
const userType = type === 'admin' ? 'Admin' : 'User';
const ageGroup = age >= 18 ? 'Adult' : 'Minor';
const message2 = age >= 18 ? `${ageGroup} ${userType}` : ageGroup;

// A common gotcha with ternary operators is forgetting that they're expressions and trying to use them like if/else statements:
// This doesn't work - ternary must return a value
// age > 18 ? console.log("Adult") : console.log("Minor");

// Instead, use if/else for actions without return values
if (age > 18) {
  console.log('Adult');
} else {
  console.log('Minor');
}

// Understanding when to use the ternary operator versus a traditional if/else comes down to a few guidelines:
// - Use ternary for simple conditional value assignments
// - Use if/else for multiple lines of code or complex logic
// - Use if/else when you're performing actions rather than returning values
// - Avoid nesting ternary operators as it reduces code readability

// ===========================================================================================================
// ===========================================================================================================
// ===========================================================================================================

// Optional chaining in JavaScript is a feature that makes it safer and easier to access nested object properties and methods.
// Consider this nested object structure
const user = {
  profile: {
    address: {
      street: '123 Main St',
    },
  },
};

// Traditional way - prone to errors
// This throws an error if profile is undefined
const street = user.profile.address.street;

// Old defensive way - verbose and repetitive
const safeStreet =
  user && user.profile && user.profile.address && user.profile.address.street;

// Modern way with optional chaining - clean and safe
const betterStreet = user?.profile?.address?.street;

// Optional chaining isn't just for object properties - it works in three main contexts:
// 1. Object Properties
const name = user?.profile?.name; // Returns undefined if any step is null/undefined

// 2. Array Elements
const firstItem = array?.[0]; // Safe way to access array elements

// 3. Function Calls
const result = callback?.(); // Only calls the function if it exists

// Here's a real-world example that shows how optional chaining makes code more robust:
function getUserLocation(user) {
  // Without optional chaining, this would need multiple checks
  const cityName = user?.address?.city?.name;
  const coordinates = user?.location?.coordinates?.map(coord =>
    coord.toString()
  );
  const formattedAddress = user?.getFormattedAddress?.();

  return {
    city: cityName ?? 'Unknown City',
    coordinates: coordinates ?? 'No coordinates available',
    address: formattedAddress ?? 'Address not available',
  };
}

// This works safely with any of these cases:
const user1 = {};
const user2 = { address: null };
const user3 = { address: { city: null } };
const completeUser = {
  address: { city: { name: 'New York' } },
  getFormattedAddress: () => '123 Broadway',
};

// One important thing to understand is how optional chaining works with other operators.
// It pairs particularly well with the nullish coalescing operator (??):

// Combining optional chaining with nullish coalescing
const settings = {
  theme: {
    darkMode: false,
  },
};

// This provides a default when the value doesn't exist
// But preserves falsy values that do exist
const isDarkMode = settings?.theme?.darkMode ?? true; // Returns: false

// Compare this with the OR operator
const isDarkMode2 = settings?.theme?.darkMode || true; // Returns: true (probably not what you want!)

// Here's something to be careful about - optional chaining can sometimes mask programming errors if overused:
// Be careful not to overuse optional chaining
// This might hide a real bug in your code
function processUserData(user) {
  // Bad: Masking a potential programming error
  const result = user?.processData?.();

  // Better: Be explicit about what you expect
  if (!user) {
    throw new Error('User is required');
  }
  if (typeof user.processData !== 'function') {
    throw new Error('User must have processData method');
  }
  return user.processData();
}
