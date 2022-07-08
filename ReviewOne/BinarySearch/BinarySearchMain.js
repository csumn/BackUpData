let call = require('./BinarySearchBL');


let result = call.binarySearch();
if (result != -1) {
    console.log(`Number Found at index : ${result}`);
} else {
    console.log(`Sorry number not found `);
}