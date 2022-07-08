let read = require('readline-sync')

exports.binarySearch = () => {
    let numbers = [80, 2, 85, 4, 69];
    let arr = numbers.sort(function (a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
    console.log(`Sorted array is : ${arr}`);
    let value = read.questionInt("Enter any number ")
    let firstIndex = 0,
        lastIndex = arr.length - 1;
    middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    while (arr[middleIndex] != value && firstIndex < lastIndex) {
        if (value < arr[middleIndex]) {
            lastIndex = middleIndex - 1;
        }
        else if (value > arr[middleIndex]) {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    }
    return (arr[middleIndex] != value) ? -1 : middleIndex;
}


