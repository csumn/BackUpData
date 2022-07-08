/*
@param(int) number: To check if a given number is palindrome or not 
*/
exports.palindromeCheck = (number) => {
    let reverseNumber = number.split("").reverse();
    if (number == reverseNumber.join("")) {
        return true;
    }
    else {
        return false;
    }
}
