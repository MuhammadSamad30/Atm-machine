#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 35000;
let myPin = 5566;

console.log("Welcome to the ATM!");
console.log("MY pin code is: 5566");

let pinAns = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin number",
    type: "number",
  },
]);

if (pinAns.pin == myPin) {
  console.log("Your pin is correct!");
} else {
  console.log("Wrong pin! Try again.");
}

let optionsAns = await inquirer.prompt([
  {
    name: "action",
    message: "What would you like to do?",
    type: "list",
    choices: ["Check balance", "Withdraw money", "Deposit money", "Fastcash"],
  },
]);

if (optionsAns.action === "Withdraw money") {
  let amountAns = await inquirer.prompt(
    [
        {
            name: "amount",
            message: "Enter your withdrawal amount.",
            type: "number"
        }
    ]
);

  if(myBalance < amountAns.amount){
      console.log(`Sorry, but you only have ${myBalance}.\nPlease enter a smaller amount.`);
  } else if (myBalance -= amountAns.amount) {
    console.log(`Your withdrawn amount: ${amountAns.amount}\nYour new balance is: ${myBalance}`);
  }
   
   
}  else if (optionsAns.action === "Check balance" ) {
    console.log("Your current balance is: " + myBalance);
}  else if (optionsAns.action === "Deposit money"){
     let depositAmount = await inquirer.prompt(
        [
            {
                 name:"deposit",
                 message:"How much would you like to deposit?" ,
                 type:"number"
            }
        ]
     )
     if(myBalance += depositAmount.deposit) {
     console.log(`You've added: ${depositAmount.deposit}\nyour new balance is: ${myBalance}`);
     }
    } else if (optionsAns.action === "Fastcash") {
      let fastCashAmount = await inquirer.prompt([
        {
          name: "option",
          message: "Select the option to withdraw:",
          type: "list",
          choices: [
            { name: "500", value: 500 },
            { name: "1000", value: 1000 },
            { name: "1500", value: 1500 },
            { name: "2000", value: 2000 }
          ]
        }
      ]);
  
      if (myBalance < fastCashAmount.option) {
        console.log("Insufficient Balance");
      } else {
        myBalance -= fastCashAmount.option;
        console.log(`You've withdrawn: ${fastCashAmount.option}\nYour new balance is: ${myBalance}`);
      }
    }
  

   