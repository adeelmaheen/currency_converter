#! \env\usr\bin\ node
import inquirer from "inquirer";
import chalk from "chalk";
import { log } from "console";

console.log(chalk.cyan('\t==========================================================================================================='));
console.log(chalk.cyan('\n\t\t====================== Welcome To Currency Converter ========================================\n\t '));
console.log(chalk.cyan('\t============================================================================================================'));


let currency:any ={
    USD:1,  // base currency
    EUR:0.91,
    GBP:0.76,
    INR:83.29,
    PKR:278.48,
    TAKA:117,
    REAL:5.1039,
    POUND:0.7873,
    LEK:92.182,
    AFGHANI:71.83,
};

let answer= await inquirer.prompt([
    {
        name:'from',
        type:'list',
        message:chalk.blue('Enter from currency'),
        choices:['USD', 'EUR', 'GBP', 'INR', 'PKR', 'TAKA', 'REAL', 'POUND', 'LEK', 'AFGHANI']
    },
    {
        name:'to',
        type:'list',
        message:chalk.blue('Enter to currency'),
        choices:['USD', 'EUR', 'GBP', 'INR', 'PKR', 'TAKA', 'REAL', 'POUND', 'LEK', 'AFGHANI']
    
    },
    {
        name:'amount',
        type:'number',
        message:chalk.blue('Enter your amount '),
    }
]);


let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let amount = answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
let decimal = Math.floor(convertedAmount)
//console.log(` Your currency you have in ${fromAmount}`);
//console.log(`your currency you want to convert in ${toAmount}`);
//console.log(amount)
//console.log(baseAmount)
console.log(chalk.green(` Your amount is converted ${decimal}`));

