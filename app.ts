#! /usr/bin/env node

import chalk from "chalk"
import inquirer from "inquirer"

// Main Function
const startApplication = async () => {

  //Taking {operator, number1 and number2 from the User}
   const answers = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "\n Select an Operator \n",
            choices: ["Add", "Subtract", "Multiply", "Divide"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter first Number: "
        },
        {
            type: "number",
            name: "num2",
            message: "Enter second Number: "
        },
    ]);

    calculate_and_display_result(answers.operator, answers.num1, answers.num2);
};

//___________________________________________________________________________________________________
// Do-While loop for asking User to contiue or not?
do {
  await startApplication();
  var proceed_further = await inquirer.prompt([
    {
      input: "input",
      name: "cont",
      message: chalk.bgRedBright("\n Do you want to continue?: Yes / No")
    }
  ]);
} while(proceed_further.cont.toLowerCase() === "yes" || proceed_further.cont.toLowerCase() === "y");


//_____________________________________________________________________________________________________
// Fuction for displaying Results
function calculate_and_display_result(operator: string, num1: number, num2: number)
{
  if (operator === "Add") {
    console.log(chalk.green(`\n${num1} + ${num2} = ${num1 + num2}`));    
  } 
    else if (operator === "Subtract") {
        console.log(chalk.yellow(`\n${num1} - ${num2} = ${num1 - num2}`));
    }
    else if (operator === "Multiply") {
        console.log(chalk.magenta(`\n${num1} x  ${num2} = ${num1 * num2}`));
    }
    else if (operator === "Divide") {
      console.log(chalk.white(`\n${num1} / ${num2} = ${num1 / num2}`));        
    }
    else {
      console.log("Error occured!")
    }
}

export default startApplication;
startApplication();