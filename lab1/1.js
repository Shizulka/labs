//1

const inc = (n) => ++n;

const a = 5;
const b = inc(a)
console.dir({a, b});

//2

const i = (num) => num.n +=1;
const obj = { n: 5 }
i(obj);

console.dir(obj);