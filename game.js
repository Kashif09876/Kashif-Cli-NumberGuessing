#! /user/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 6) + 1;
const answers = await inquirer.prompt({
    name: "randomNumber",
    type: "number",
    message: "Guess The Random Number:",
});
if (answers.randomNumber === randomNumber) {
    console.log("Congratulations Your Guess Number Is Correct");
}
else {
    console.log("Your Guess Number Is Not Correct Please Try Again Later Thank You!");
}
