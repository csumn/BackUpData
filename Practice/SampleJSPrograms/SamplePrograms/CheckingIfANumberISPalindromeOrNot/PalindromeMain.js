/**
Execution           : default node
purpose             : To check if a given number is palindrome or not 
@description        : Read a number from user and check if a number is palindrome or not 
@file               : palindromeMain.js
@version            : 1.0.0
@since              : 04-05-2022
*/
let read = require('readline-sync');
let callFunc = require('./PalindromeBL');

console.log("Enter a number : ");
let number = read.question('');
if (callFunc.palindromeCheck(number)) {
    console.log("Yes, " + number + " is a Palindrome");
}
else {
    console.log("oops ! " + number + " is not a Palindrome");
}