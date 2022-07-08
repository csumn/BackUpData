
function add(a,b,callback){
    let sum =  a + b;
    callback(sum)
}

function display(result){
    console.log(result);
}

add(5,5,display);