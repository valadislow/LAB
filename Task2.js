
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