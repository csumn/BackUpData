/**
Execution           : default node
purpose             : To swap two numbers
@description        : To Swap Two Numbers by taking user input
@file               : SwapNumbersMain.js
@version            : 1.0.0
@since              : 02-05-2022
*/

let read = require('readline-sync');
let callFunc = require('./SwapNumbersBL');

console.log('Please enter two Numbers');
let firstNumber = read.question('First number : ');
let secondNumber = read.question('Second number : ');
console.log('Numbers before Swapping are')
console.log('First Number is ' + firstNumber);
console.log('Second Number is ' + secondNumber);

callFunc.swapTwoNumbers(firstNumber, secondNumber);