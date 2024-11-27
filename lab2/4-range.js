'use strict';

const range = (start, end) => {
    const arr = [];

    for (let i = start; i <= end; i++) {
        arr.push(i);
    }

console.log(arr);

};
range(15,30);

module.exports = { range };
