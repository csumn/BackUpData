/**
Execution           : default node
purpose             : To find LCM of two numbers
@description        : Read two numbers and find lcm oftwo numbers
@file               : lcmMain.js
@version            : 1.0.0
@since              : 06-05-2022
*/
let read = require('readline-sync');
let callFunc = require('./lcmBL');

const num1 = read.questionInt('Enter first positive integer : ');
const num2 = read.questionInt('Enter second positive integer : ');

callFunc.findLcm(num1, num2);