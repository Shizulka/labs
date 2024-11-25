const arr = [true, 'hello', 5, 12, -200, false, false, 'word'];
const hash = { number: 0, string: 0, boolean: 0 };
const hash1 = {};

for (let i = 0; i < arr.length; i++) {
    const type = typeof arr[i];

    if (type in hash) {
        hash[type]++;
    }

    if (!(type in hash1)) {
        hash1[type] = 0;
    }
    hash1[type]++;
}

console.log('hash:', hash);
console.log('hash1:', hash1);
