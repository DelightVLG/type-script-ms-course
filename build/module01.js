"use strict";
const foo = (a, b) => {
    return a + b;
};
foo(3, 2);
const makeAnArray = (length) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(i);
    }
    return arr;
};
console.log(makeAnArray(9));
