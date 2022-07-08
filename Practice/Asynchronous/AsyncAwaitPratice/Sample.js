
console.log("This is sample async and await program");

async function fuctionOne() {
    console.log("Inside Harry Fuction");
    const response = await add();
    console.log(`Before Respose`);
    console.log(response);
    console.log(`fuction One Resolved`);
};

function add() {
    let a = 5, b = 10;
    return a + b;
}

console.log("Before Calling fuctionOne");
fuctionOne();
console.log("After calling fuctionOne");
console.log("Last line of the Js File");