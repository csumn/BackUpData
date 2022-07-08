/*
@param (int,int) (number,number) :  To find LCM to two integer values
*/

exports.findLcm = (num1, num2) => {
    let min = (num1 > num2) ? num1 : num2;
    while (true) {
        if (min % num1 == 0 && min % num2 == 0) {
            console.log(`The LCM of ${num1} and ${num2} is ${min}`);
            break;
        }
        min++;
    }
}