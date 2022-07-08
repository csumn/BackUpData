/*
@param(int) number: To display sum of n numbers ( n -> is a user input )
*/

let callFunc = require('./SumBL');
exports.sum = (num) => {
    if (num > 0) {
        return num + callFunc.sum(num - 1);
    }
    else {
        return num;
    }
}