/*
@param integer, integer (number, number) : Calculator operations
*/

const { exit } = require('process');
let read = require('readline-sync');
let method = require('./calculatorBL');

exports.calculatorOperations = (number1, number2) => {
    const operator = read.question('select any oerator \n+\n-\n*\n/\n');
    condition = true;
    while (condition) {
        switch (operator) {
            case '+': console.log(`Sum of two numbers is ${number1 + number2}`);
                condition = false;
                break;
            case '-': console.log(`Subraction of two numbers is ${number1 - number2}`);
                condition = false;
                break;
            case '*': console.log(`Multiplication of two numbers is ${number1 * number2}`);
                condition = false;
                break;
            case '/': console.log(`Division of two numbers is ${number1 / number2}`);
                condition = false;
                break;
            default: console.log('Kindly enter a valid Operator');
                condition = false;
                break;
        }
    }
    method.performMoreOperations(number1, number2);
}

exports.performMoreOperations = (number1, number2) => {
    console.log('Would you like to perform again operations on these numbers or would you like to exit ?');
    let option = read.questionInt('Enter 1 to continue (or) 0 to exit : ');
    condition = true;
    while (condition) {
        switch (option) {
            case 0:
                condition = false;
                console.log('Exited');
                break;
            case 1:
                method.calculatorOperations(number1, number2);
                condition = true;
                break;
            default: console.log('Kindly enter a valid inuput');
                condition = false;
                method.performMoreOperations(number1, number2);
                break;
        }
    }
}