const buttons = document.querySelectorAll("button")
const screenDisplay = document.querySelector(".screen")


let calculation = []
let accummalativeCalculation;

function calculate(button){
const value = button.textContent


if (value === "CLEAR"){
    calculation = []
    screenDisplay.textContent = '.'
} else if (value === "="){
 screenDisplay.textContent = eval(accummalativeCalculation)
}  else {

calculation.push(value)
accummalativeCalculation = calculation.join("")
screenDisplay.textContent = accummalativeCalculation
}
}


buttons.forEach(button => {

button.addEventListener("click", () => {
calculate(button)}
)})