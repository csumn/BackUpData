/**
Execution           : default node
purpose             : To find Area Of Triangle
@description        : Read Base and Height from user and find area of triangle
@file               : FindAreaMain.js
@version            : 1.0.0
@since              : 06-05-2022
*/

let read = require('readline-sync');
let callFunc = require('./FindAreaBL');

const baseValue = read.questionFloat('Enter the base of a triangle:  ');
const heightValue = read.questionFloat('Enter the height of a triangle : ');

const areaOfTraingle = callFunc.findArea(baseValue,heightValue);
console.log(`The area of the triangle is ${areaOfTraingle}`);