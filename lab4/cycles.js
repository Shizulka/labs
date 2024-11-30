
//1

function sum(...args) {
    let sum =0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

console.log(sum(1, 2, 3,));

//2

function sum0(...args){

    let sum = 0;
    for (const num of args) {
        sum += num;
    }
    return sum;
}

console.log(sum0(0));

//3

function sum1(...args){
    let sum = 0;
    let i = 0;
    while (i < args.length){
        sum += args[i];
        i++;
    }
    return sum;
}

console.log(sum1());

//4

function  sum2(...args){
    let sum = 0;
    let i = 0;
    do {
        sum += args[i];
        i++;
    }
    while (i < args.length);
    return sum;
}

console.log(sum2(1, -1, 1));

//5

const sum3 = (...args) => args.reduce((x , y) => x + y, 0);

console.log(sum3(10, -1, -1, -1))