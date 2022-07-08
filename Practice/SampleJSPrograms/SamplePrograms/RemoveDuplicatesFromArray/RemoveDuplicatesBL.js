/*
@param(array) array of numbers: Given an Array and need to remove duplicates elements 
*/

exports.uniqueArray = (originalArray) => {
    const uniqueArray = [];
    originalArray.forEach(element => {
        if (!uniqueArray.includes(element)) {
            uniqueArray.push(element);
        }
    });
    return uniqueArray;
}