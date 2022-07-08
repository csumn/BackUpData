let read = require('readline-sync');
exports.factorial = () => {
    let number = read.questionInt("Enter any number : \n")
    if (number < 0) {
        console.log(`There is no factorial for this number `);
    } else {
        let factorial = 1;
        for (let i = 1; i <= number; i++) {
            factorial = factorial * i;
        }
        console.log(`The Factorial of ${number} is ${factorial}`);
    }
}

