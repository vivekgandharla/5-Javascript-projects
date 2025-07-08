const prompt = require("prompt-sync")()
//Lets make a program to check if you're eligible to vote!
const nameOfTheVoter = prompt("Whats you name? ")
console.log("Hey! "+nameOfTheVoter+" Welcome to the portal of checking eligiblity.")
const details = prompt("Let's have some details from you, Are you ready?")
if(details.toLowerCase() ==="yes"||details ==="ready"){
    const age = prompt("What's your age?")
        if(age>=18){
            console.log("Congrats!!, you're eligible.")
        }else{
            console.log("You'll be eligible after age"+age-18)
        }
    }else{
        details.toLowerCase() === "no"
        console.log("Better check it!")
    }


    switch (details.toLowerCase()) {
        case "yes":
        case "ready":
            const age = prompt("What's your age?");
            if (age >= 18) {
                console.log("Congrats!!, you're eligible.");
            } else {
                console.log("You'll be eligible after age " + (18 - age));
            }
            break;
        case "no":
            console.log("Better check it!");
            break;
        default:
            console.log("Invalid response. Please answer 'yes', 'ready', or 'no'.");
            break;
    }