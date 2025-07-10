
const prompt = require("prompt-sync")()

//Calculator

function getNumber(numberString) {
    while(true){
        const num = parseFloat(prompt("Enter the number : "+ numberString+ ": "))
        if(isNaN(num)){
            console.log("Invalid Input")
        }else{
            return num
        }
    }
}
const num2 = getNumber("One");
const num1 = getNumber("Two");

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
        if(num1===0){
            valid=false
            console.log("Invalid")
        }
        result = num1 + num2
        break;     
    default:
        console.log("Invalid sign!!")
        valid = false;
        break;
}   
console.log(result);

