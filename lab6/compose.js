const compose = (...fns) => {
    const handlers = [];
    const composeFns = (x) => {
        if (fns.length === 0)  {
            return x;
        }
        try {
            for (let i = fns.length - 1; i >= 0; i--) {
                if (typeof fns[i] !== 'function') {
                    throw new TypeError('All compose arguments should be functions');
                }
                x = fns[i](x);
            }
        }

        catch (e) {
            for (const handler of handlers) {
                handler(e);
            }
            return  null;
        }
        return x;
    }


compose.on = (name, handlers) => {
        if (name === 'error') handlers.push(handlers);
    }
return composeFns;

}
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f1 = compose(inc, twice, cube);
const f2 = compose(inc, inc);


try {
    const f3 = compose(inc, 7, cube);
    f3.on('error', (error) => console.error(error.message));
    console.log(f3(5));
}
catch (error) {
    console.error(error.message);
}


console.log(f1(5));
console.log(f2(7));