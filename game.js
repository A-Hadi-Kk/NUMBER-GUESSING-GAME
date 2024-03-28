#! /usr/bin/env node
import inquirer from "inquirer";
let secretNumber = Math.floor(Math.random() * 10 + 1);
let guess = 0;
console.log("Welcome to the Number Guessing Game!");
console.log(`I've picked a number between 1 and 10. Can you guess it?`);
do {
    const guess = await inquirer.prompt({
        name: "yournumber",
        type: "number",
        message: "Enter your guess (between 1-10):\n",
    });
    if (guess.yournumber < secretNumber) {
        console.log("Too low! Try again.");
        break;
    }
    else if (guess.yournumber > secretNumber) {
        console.log("Too high! Try again.");
        break;
    }
    if (isNaN(guess.yournumber)) {
        console.log("Invalid input. Please enter a valid number.");
    }
    if (guess.yournumber == secretNumber) {
        console.log("Congratulations! You guessed the correct number");
        const playAgain = await inquirer.prompt({
            name: "yourChoice",
            type: "list",
            message: "Do you want to play again? (Yes/No)",
            choices: ["Yes", "No"]
        });
        if (playAgain.yourChoice == "No") {
            break;
        }
        else {
            secretNumber = Math.floor(Math.random() * 10 + 1);
            console.log(`I've picked a new number between 1 and 10. Can you guess it?`);
        }
    }
} while (guess != secretNumber);
console.log("Game over...");
