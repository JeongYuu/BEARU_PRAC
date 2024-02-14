function sum(a, b){
    console.log(a+b);
    return a+b;
}

function minus(a, b){
    console.log(a-b);
    return a-b;
}

const bb = function(a, b){
    console.log(a-b);
    return a-b;
}


const s = sum(1,2);
const m = minus(4,3);

console.log(bb(1,3));

console.log(s,m);