/*
@param int (number) :  Read a number from user and display table of the number till 10 * Number 
*/

exports.displayTable = (number) =>{
    for(let i = 0; i <= 10; i++){
        console.log(`${number} * ${i} = ${number * i}`);
    }
}