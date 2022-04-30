/*
 *** Reduce Method of Array's Build In Method ***
 */
// *** Hands-on Reduce ***
const array1 = [1, 2, 3, 4, 5, 6];

const sum = array1.reduce((acc, cur) => {
    acc += cur;
    return acc;
}, 0);
// console.log(sum);

// finding avg number
function reducer(accumulator, currentValue, index, array) {
    accumulator += currentValue;
    if (index === array.length - 1) {
        return accumulator / array.length;
    }
    return accumulator;
}
const avg = array1.reduce(reducer, 0);
console.log(avg);

// *** Flatten Array ***
const multidimensionalArray = [
    [1, 2, 3],
    [1, 2, 3],
    [4, 5, 7],
    [1, 2, 3],
];
const flattenArray = multidimensionalArray.flat();
console.log(flattenArray);

// use reducer method for using flat() method work.
const flattingReducer = multidimensionalArray.reduce((acc, cur) => {
    acc = acc.concat(cur);
    return acc;
}, []);
console.log(flattingReducer);

// Flatmap implementation with reduce method
let array2 = [1, 2, 3, 4];
const map = array2.map((value) => [value * 2]);
const flatMap = map.flat();
console.log(flatMap);

// we can same work above implementation
const mapFlat = array2.flatMap((element) => [element * 2]);
console.log(mapFlat);

const mapFlat1 = array2.flatMap((element) => [element, element * 2]);
console.log(mapFlat1);

// use reduce() method for implementation above work
const mapFlat2 = array2.reduce((acc, cur) => {
    acc = acc.concat(cur * 2);
    return acc;
}, []);
console.log(mapFlat2);

const mapFlat3 = array2.reduce((acc, cur) => {
    acc = acc.concat([cur, cur * 2]);
    return acc;
}, []);
console.log(mapFlat3);

// *** Frequency Checker ***
let languages = [
    "javascript",
    "php",
    "java",
    "php",
    "java",
    "javascript",
    "java",
];

const result = languages.reduce((acc, cur, index) => {
    if (acc[cur]) {
        acc[cur]++;
    } else {
        acc[cur] = 1;
    }
    return acc;
}, {});
console.log(result);

// *** Implement Our Own Reducer Method ***
function ourOwnReducerMethod(array, cb, init) {
    let accumulator = init,
        start = 0;
    if (!accumulator) {
        accumulator = array[0];
        start = 1;
    }
    for (let i = start; i < array.length; i++) {
        accumulator = cb(accumulator, array[i], i, array);
    }
    return accumulator;
}
const result1 = ourOwnReducerMethod(array1, (a, b, c) => {
    return a + b;
});
console.log(result1);

// Matrix Sum
const matrixs = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// horizontal sum
const matrixHorizontalResult = matrixs.map((matrix) =>
    matrix.reduce((acc, cur) => {
        acc += cur;
        return acc;
    }, 0)
);
console.log(matrixHorizontalResult);

// vertical sum
const matrixVerticalResult = matrixs.reduce((acc, cur) => {
    console.log(acc, cur);
    return acc.map((value, index) => cur[index] + value);
});
console.log(matrixVerticalResult);

// matrix flating
const matrixFlatResult = matrixs
    .map((matrix) =>
        matrix.reduce((acc, cur) => {
            acc += cur;
            return acc;
        }, 0)
    )
    .reduce((acc, cur) => {
        return (acc += cur);
    }, 0);
console.log(matrixFlatResult);

// object cheaker
const object = [
    { name: "Olive", price: 140, quantity: 1 },
    { name: "Zytun", price: 90, quantity: 2 },
    { name: "Apple", price: 30, quantity: 3 },
    { name: "Apple", price: 30, quantity: 3 },
    { name: "Olive", price: 140, quantity: 1 },
];
const result2 = object.reduce((acc, cur) => {
    if (acc[cur.name]) {
        (acc[cur.name].price += cur.price),
            (acc[cur.name].quantity += cur.quantity);
    } else {
        acc[cur.name] = {
            price: cur.price,
            quantity: cur.quantity,
        };
    }
    return acc;
}, {});

console.log(result2);
