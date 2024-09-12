
let proffesorName = prompt("Who are the lines for")
let line = prompt("What is the line to write? ")
let times = parseInt(prompt("How many times do you need to write that?"))

let activeStr = "<ul>";

for (i = 1; i < times; i++) {
    console.log(`${i} ${line}`)
}

let activeLine = document.querySelector('.lines');
activeLine.innerHTML = activeStr;
