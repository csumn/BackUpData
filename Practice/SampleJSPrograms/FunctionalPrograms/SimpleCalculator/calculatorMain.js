/**
Execution           : default node
purpose             : To design a Simple Calculator
@description        : Read two numbers and perform operations using Switch case
@file               : calculatorMain.js
@version            : 1.0.0
@since              : 06-05-2022
*/

let read = require('readline-sync');
let method = require('./calculatorBL');

let number1 = read.questionFloat('Enter first number : ');
let number2 = read.questionFloat('Enter second number : ');

method.calculatorOperations(number1, number2);