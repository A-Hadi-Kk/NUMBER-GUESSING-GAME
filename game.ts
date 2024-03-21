#! /usr/bin/env node
import inquirer from "inquirer";
function getRandomNumber(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Main function for the guessing game
async function numberGuessingGame() {
    const minNumber: number = 1;
    const maxNumber: number = 10;
    let secretNumber: number = getRandomNumber(minNumber, maxNumber);
    let attempts: number = 0;
    let guess: number = 0;

    console.log("Welcome to the Number Guessing Game!");
    console.log(`I've picked a number between ${minNumber} and ${maxNumber}. Can you guess it?`);

    do {
        const guess = await inquirer.prompt({
            name: "yournumber",
            type: "number", 
            message: "Enter your guess (between 1-10):\n",
        })
            attempts++;

            if (guess.yournumber < secretNumber) {
                console.log("Too low! Try again.");
                break;
            } else if (guess.yournumber > secretNumber) {
                console.log("Too high! Try again.");
                break;
            }
            if (isNaN(guess.yournumber)) {
                console.log("Invalid input. Please enter a valid number.");
            }
        if (guess.yournumber == secretNumber) {
            const playAgain = await inquirer.prompt({
            name: "yourChoice",
            type: "list",
            message: "Do you want to play again? (Yes/No)",
            choices: ["Yes", "No"]
        })
            if (playAgain.yourChoice == "No") {
                break;
            } else {
                secretNumber = getRandomNumber(minNumber, maxNumber);
                attempts = 0;
                console.log(`I've picked a new number between ${minNumber} and ${maxNumber}. Can you guess it?`);
            }
        } 
    } while (guess != secretNumber);
    console.log("Game over...");
}
numberGuessingGame();