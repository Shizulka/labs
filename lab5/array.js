const array = () => {
    const arr = [];
    const obj = (i) => arr[i];
    obj.push=(value) => arr.push(value);
    obj.pop = () => arr.pop();
    return obj;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

