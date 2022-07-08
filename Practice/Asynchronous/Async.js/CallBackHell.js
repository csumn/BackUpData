
// function one(callback) {
//     console.log("Step 1 complete, now call step two");
//     callback();
// }
// function two() {
//     console.log("Step 2");
// }

// one(two);

let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let order = (Fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected`);
        call_production();
    }, 2000)
};

let production = () => {
    setTimeout(() => {
        console.log("Production has started");
        setTimeout(() => {
            console.log("Fruit has been chopped");
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`);
                setTimeout(() => {
                    console.log("Machine has been started");
                    setTimeout(() => {
                        console.log(`Ice cream was placed on ${stocks.holder[0]}`);
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was added as toppings`);
                            setTimeout(() => {
                                console.log("Serve the Ice Cream");
                                setTimeout(()=>{
                                    console.log("Day ended, Shop is closed ");
                                },5000)
                            }, 2000)
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000)
    }, 0000)
};

order(0, production);