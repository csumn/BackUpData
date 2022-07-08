/**
Execution           : default node
purpose             : To remove duplicate elements from an Array
@description        : Declare an array and remove duplicate elements from array
@file               : RemoveDuplicatesMain.js
@version            : 1.0.0
@since              : 03-05-2022
*/


let callFunction = require('./RemoveDuplicatesBL');

let originalArray = [1, 1, 2, 5, 2, 3, 4, 2, 3, 1, 5, 6, 5];
const finalArray = callFunction.uniqueArray(originalArray);
console.log(finalArray);
