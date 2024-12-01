const pipe = (...fns) => {
    for (const f of fns) {
        if (typeof f !== 'function') {
            throw new TypeError('All compose arguments should be functions');
        }
    }
    return (x) => fns.reduce((value, fn) => fn(value), x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f1 = pipe(inc, twice, cube );
const f2 = pipe(inc, inc);

try {
    const f3 = pipe(inc, 7, cube);
    console.log(f3(5));
}
catch (error) {
    console.error(error.message);
}

console.log(f1(5));
console.log(f2(7));