
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms)
        }
        else {
            reject(console.log("Shop is closed"))
        }
    });
}

async function kitchen() {
    try {
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`);

        await time(0000)
        console.log("Started Production");

        await time(2000)
        console.log("Cut the fruit");

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`);

        await time(1000)
        console.log("Start the Machine");

        await time(2000)
        console.log(`Ice Cream placed on ${stocks.holder[0]}`);

        await time(3000)
        console.log(`${stocks.toppings[0]} was selected`);

        await time(2000)
        console.log("Serve the Ice cream");

    } catch (error) {
        console.log("Customer Left");
    }
    finally {
        console.log("Day Ended, Shop is closed now");
    }
}

kitchen();




























// let toppings_choice = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(
//                 console.log("Which you topping would you like to have")
//             )
//     }, 3000)
// })
// }

// async function kitchen() {
//     console.log("A");
//     console.log("B");
//     console.log("C");
//     await toppings_choice()
//     console.log("D");
//     console.log("E");
// }

// kitchen();

// console.log("Other works are happening  Work0001,,,");
// console.log("Other works are happening  Work0002,,,");
// console.log("Other works are happening  Work0003,,,");