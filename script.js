const resultDiv = document.getElementById("resultDiv");
let equation = "";
const operators = ["+", "-", "*", "/"];


function addNumber(number) {
    const lastCharacter = equation.slice(-1);
    if (operators.includes(lastCharacter) && operators.includes(number)) {
        deleteNumber();
    } 
    
    equation += number;
    resultDiv.innerText = equation;
}

function calculate() {
    const result = eval(equation);
    resultDiv.innerText = result;
    equation = result;
}

function clearScreen() {
    equation = "";
    resultDiv.innerText = 0;
}

function deleteNumber() {
    equation = equation.slice(0, -1);
    if (equation == "") {
        resultDiv.innerText = 0;
    } else {
        resultDiv.innerText = equation;
    }
}
