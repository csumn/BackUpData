/**
Execution           : default node
purpose             : To display Table of a given number
@description        : Read a number from user and display table of the number till 10 * Number 
@file               : TableMain.js
@version            : 1.0.0
@since              : 06-05-2022
*/

let read = require('readline-sync');
let callFunc = require('./TableBL')
let number = read.questionInt('Enter a Number : ');

callFunc.displayTable(number);

