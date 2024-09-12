// TASK 1
<script>
        let number = parseInt(prompt("Please enter the number"))
        let activeNumber = document.querySelector('.variable');
        activeNumber.innerHTML = `Quantity: ${number}`;

        let percentage = parseInt(prompt("Please enter the percentage"))
        numberWPercentage = document.querySelector('.percentage')
        numberWPercentage.innerHTML = percentage + "% of " + number + " = " + ((percentage/100)*number)

</script>

//TASK 2
let grade = parseInt(prompt("Please enter a grade between 1 and 100"))
let activeGrade = document.querySelector('.grade')

let displayStr = "";
let ifStr = "";

if (grade > 90) {
    ifStr = "A"
}else if (grade > 80) {
    ifStr = "B"
}else if (grade > 70) {
    ifStr = "C"
}else if (grade > 60) {
    ifStr = "D"
}else{
    ifStr = "F"
}


let switchStr = "";
switch (true){
    case(grade > 90):
    ifStr = "A";
    break;
    case(grade > 80):
    ifStr = "B";
    break;
    case(grade > 70):
    ifStr = "C";
    break;
    case(grade > 60):
    ifStr = "D";
    break;
    default:
        ifStr = "F";
}

activeGrade.innerHTML = `The grade is: ${ifStr}`;

//TASK 3
let proffesorName = prompt("Who are the lines for")
let line = prompt("What is the line to write? ")
let times = parseInt(prompt("How many times do you need to write that?"))

let activeStr = "<ul>";

for (i = 1; i < times; i++) {
    console.log(`${i} ${line}`)
}

let activeLine = document.querySelector('.lines');
activeLine.innerHTML = activeStr;

//TASK 4
let proffesorName = prompt("Who are the lines for")
let line = prompt("What is the line to write? ")
let times = parseInt(prompt("How many times do you need to write that?"))


let activeStr = "<ul>";
let i = 1

while(i <= times) {
    activeStr += `${i} : ${line}<br>`;
    i++;
}

let activeLine = document.querySelector('.lines');
activeLine.innerHTML = activeStr;

//TASK 5 
let proffesorName = prompt("Who are the lines for")
let line = prompt("What is the line to write? ")
let times = parseInt(prompt("How many times do you need to write that?"))

const createLines = (times, line) => {
    let activeStr = "<ul>";
    let i = 1
    while(i <= times) {
        activeStr += `${i} : ${line}<br>`;
        i++;
    }
    return activeStr
}

activeStr = createLines(times, line)

let activeLine = document.querySelector('.lines');
activeLine.innerHTML = activeStr;

//TASK 6
//PART 1
let firstFactor = 1;
let secondFactor = 1;

let displayStr = "";

for (firstFactor = 1; firstFactor <= 12; firstFactor++) {
    for (secondFactor = 1; secondFactor <= 12; secondFactor++) {
        let product = firstFactor * secondFactor;
        displayStr += `${firstFactor} x ${secondFactor} = ${product} <br>`;
    }
    displayStr += "<br>"
}

let refToDisplay2 = document.querySelector(".tables");
refToDisplay2.innerHTML = displayStr; 

//PART 2
let displayStr2 = "";

function createTables(factor){
    for(i = 1; i<= 12; i++) {
        let product = factor * i;
        displayStr2 += `${i} x ${factor} = ${product} <br>`;
    }
    displayStr += "<br>"
}

    let factor = 3
    createTables(factor)

let refToDisplay = document.querySelector(".tables2");
refToDisplay.innerHTML = displayStr2;

//PART 3 

let displayStr3 = "";

function createTables3(factor3, delimeter){
    for(i = 1; i<= delimeter; i++) {
        let product = factor3 * i;
        displayStr3 += `${i} x ${factor3} = ${product} <br>`;
    }
}
    let factor3 = 5
    let delimeter = 10
    createTables3(factor3, delimeter)


let refToDisplay3 = document.querySelector(".tables3");
refToDisplay3.innerHTML = displayStr3;

//TASK 7 
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