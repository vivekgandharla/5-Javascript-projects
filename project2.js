
const prompt = require("prompt-sync")()

//Calculator
let num1;
let num2;
while(true){
    num1 = parseFloat(prompt("Enter the First num : "))
    if(isNaN(num1)){
        console.log("Invalid Input")
    }else{
        break
    }
}
while(true){
    3num2 = parseFloat(prompt("Enter the Second num : "))
    if(isNaN(num2)){
        console.log("Invalid input")
    }else{
        break
    }
}
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