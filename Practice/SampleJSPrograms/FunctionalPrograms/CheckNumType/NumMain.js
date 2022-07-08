/**
Execution           : default node
purpose             : To check number type
@description        : Read a number from user and check if the number is positive, 
                      negative or equal to zero
@file               : numMain.js
@version            : 1.0.0
@since              : 06-05-2022
*/

let read = require('readline-sync');
let callFunc = require('./NumBL');
let number = read.questionFloat('Enter a number : ')
callFunc.checkNumType(number);