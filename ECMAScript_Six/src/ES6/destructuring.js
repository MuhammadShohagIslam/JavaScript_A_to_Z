/*
    Destructuring: Destructuring assignment syntax in JavaScript expression through which we can get multiple properties shortcut way from array and objecct

*/
const object = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

//destructuring
const { a , b, c, d } = object
console.log(a);
console.log(b);

// destructuring with array
const arr = [1, 3, 4 ,5 ,5 ,6]
const [ first, second, third, ,f ] = arr
console.log(f);

/*
    *** When a object key and value would be same, in this case we can be skip one. It's called Enhance Object

*/
let x = 10;
let y = 20;

const obj = {
    // x: x,
    x,
    // y: y
    y
}
console.log(obj)

/*
   *** Array to Object Transfering ***
*/

// object to array transfering
const object1 = {
    a: 2,
    b: 4
}
const objArray = Object.entries(object1);
console.log(objArray)

// array to object transfering
const arr1 = [
    ['a', 20],
    ['b', 20],
    ['c', 20]
];
const arrObject = Object.fromEntries(arr1);
console.log(arrObject);