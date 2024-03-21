#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Main function for the guessing game
function numberGuessingGame() {
    return __awaiter(this, void 0, void 0, function* () {
        const minNumber = 1;
        const maxNumber = 10;
        let secretNumber = getRandomNumber(minNumber, maxNumber);
        let attempts = 0;
        let guess = 0;
        console.log("Welcome to the Number Guessing Game!");
        console.log(`I've picked a number between ${minNumber} and ${maxNumber}. Can you guess it?`);
        do {
            const guess = yield inquirer_1.default.prompt({
                name: "yournumber",
                type: "number",
                message: "Enter your guess (between 1-10):\n",
            });
            attempts++;
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
                const playAgain = yield inquirer_1.default.prompt({
                    name: "yourChoice",
                    type: "list",
                    message: "Do you want to play again? (Yes/No)",
                    choices: ["Yes", "No"]
                });
                if (playAgain.yourChoice == "No") {
                    break;
                }
                else {
                    secretNumber = getRandomNumber(minNumber, maxNumber);
                    attempts = 0;
                    console.log(`I've picked a new number between ${minNumber} and ${maxNumber}. Can you guess it?`);
                }
            }
        } while (guess != secretNumber);
        console.log("Game over...");
    });
}
numberGuessingGame();
