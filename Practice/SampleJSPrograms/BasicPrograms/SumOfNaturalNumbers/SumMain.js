/**
Execution           : default node
purpose             : To display sum of n numbers ( n -> is a user input )
@description        : Read a number from user and display sum of n numbers
@file               : SumMain.js
@version            : 1.0.0
@since              : 06-05-2022
*/

let read = require('readline-sync');
let callFunc = require('./SumBL');

const number = read.questionInt('Enter a positive integer : ');
const result = callFunc.sum(number);
console.log(`The sum is of natural numbers till ${number} is ${result}`);

