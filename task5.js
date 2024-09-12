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