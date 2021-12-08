/*
    Symbol: Symbol is a primitive Data Type as well as a unique identifier.
        * Two Synbol never same at a time.
        * Where we need unique identifier, we use Symbol.
        * It is used for hidding/doing Private Class and Object properties.
        
*/
// create a symbol
let a = Symbol();
let b = Symbol("B Symbol");
console.log(a);
console.log(b);

// comapre two symbol
console.log(a === b); // return false, beacuse symbol is unique identifier

// symbol use of object
const obj = {
    head: Symbol("Head"),
    tail: Symbol("Tail")
}
console.log(obj);
console.log(obj.head);

