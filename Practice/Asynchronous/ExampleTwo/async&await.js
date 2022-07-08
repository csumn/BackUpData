const datas = [
    { name: "VK", Profession: "Cricket" },
    { name: "ABD", Profession: "Cricket" }
]

function getDatas() {
    setTimeout(() => {
        let output = "";
        datas.forEach((data, index) => {
            output = `${data.name}`;
            console.log(output);
        })
    }, 1000);
}

function createData(newData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datas.push(newData);
            let error = false;
            if (!error) {
                resolve();
            } else {
                reject("Concept he alag hai, everything is wrong ")
            }
        }, 2000)
    })

}

//Async and Await
async function start() {
    await createData({ name: "DK", Profession: "Cricket" });
    getDatas();
}

start();















// createData({ name: "DK", Profession: "Cricket" })
//     .then(getDatas)
//     .catch(error => console.log(error))
