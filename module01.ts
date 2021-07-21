const foo = (a: number, b: number): number => {
    return a + b;
}

foo(3,2);

const makeAnArray = (length: number): number[] => {
    let arr: number[] = [];

    for (let i = 0; i < length; i++) {
        arr.push(i);
    }

    return arr;
}

console.log(makeAnArray(9));
