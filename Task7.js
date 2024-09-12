// Hoisting is the process in Java when its reading the code not 
// just from top to the bottom, but its automatically putting the functions and 
// variables before they are getting declared

// Here is the example of hoisting
console.log(a)
var a = 12 

hoistedFunction(); // This works because the function declaration is hoisted

function hoistedFunction() {
    console.log("This function was hoisted!");
}

// Its weird that Java actually excutes that, but it does beacause of hoisting


// In the latest ECMAScript (ES6) standards, `let` and `const` were introduced to resolve issues with variable hoisting.
// Variables declared with `let` and `const` are hoisted to the top of their block scope, but they are not initialized. This means that if you try to access them before their declaration, 
// you will get a `ReferenceError` instead of `undefined`. This behavior is often referred to as being in a "temporal dead zone" from the start of the block until the variable's declaration.

// Example of `let` and `const` hoisting behavior
console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization
let letVariable = "This will cause an error with let";

console.log(constVariable); // ReferenceError: Cannot access 'constVariable' before initialization
const constVariable = "This will cause an error with const";