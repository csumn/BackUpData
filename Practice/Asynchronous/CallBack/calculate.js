let add = function (a, b) {
    return a + b;
};

let multiply = function (a, b) {
    return a * b;
};

let doWhatEverYouWnat = function (a, b) {
    return a * a + b * b;
};

let calc = function (num1, num2, callback) {
    if (typeof callback === "function") {
        return callback(num1, num2);
    }
    else console.log("Invalid");
};

console.log(calc(5, 5, multiply));
console.log(calc(5, 5, add));
console.log(calc(5, 5, doWhatEverYouWnat));
console.log(calc(10, 7, function (a, b) {
    return a - b;
}));


