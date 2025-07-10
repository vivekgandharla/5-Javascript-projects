
const prompt = require("prompt-sync")()

//Calculator
const num1 = parseFloat(prompt("Enter the First num : "))
const num2 = parseFloat(prompt("Enter the Second num : "))
const operator = prompt("Enter sign : ")

let result;
let valid =true;
switch(operator){
    case "+":
        result = num1 + num2
        break;
    case "-":
        result = num1 + num2
        break;
    case "*":
        result = num1 + num2
        break;
    case "/":
        result = num1 + num2
        break;     
    default:
        console.log("Invalid sign!!")
        valid = false;
        break;
}   
console.log(result);