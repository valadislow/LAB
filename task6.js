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

//TASK 2
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

//TASK 3 

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
