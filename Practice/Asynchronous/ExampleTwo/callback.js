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
    }, 3000);
}

function createData(newData,callback) {
    setTimeout(() => {
        datas.push(newData);
        callback();
    }, 4000)
}

createData({ name: "DK", Profession: "Cricket" },getDatas)
