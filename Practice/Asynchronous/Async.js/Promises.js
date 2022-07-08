let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

let order = (time, work) => {

    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work());
            }, time)
        }
        else {
            reject(console.log("Shop is closed"));
        }
    });
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))

    .then(() => {
        return order(0000, () => console.log("production has started"))
    })

    .then(() => {
        return order(2000, () => console.log("The fruits are chopped"))
    })
    .then(() => {
        return order(1000, () => {
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were selected`);
        })
    })

    .then(() => {
        return order(1000, () => {
            console.log(`Start the machine`);
        })
    })

    .then(() => {
        return order(2000, () => {
            console.log(`Ice cream was placed on ${stocks.holder[0]}`);
        })
    })

    .then(() => {
        return order(3000, () => {
            console.log(`${stocks.toppings[0]} was selected`);
        })
    })

    .then(() => {
        return order(2000, () => {
            console.log(`Ice cream was served`)
        })
    })
    .catch(() => {
        console.log("Customer left");
    })

    .finally(() => {
        return order(0000, () => {
            console.log("Day Ended, Shop is closed");
        })
    })