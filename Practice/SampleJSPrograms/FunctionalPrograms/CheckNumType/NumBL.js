/*
@param (float) (number) :  Read a number from user and check if the number is positive, 
                         negative or equal to zero
*/

exports.checkNumType = (number) => {
    if (number > 0) { console.log(`${number} is a Positive Number`); }
    if (number < 0) { console.log(`${number} is a Negative Number`); }
    if (number == 0) { console.log(`Number which you entered is equal to ${number}`); }
}