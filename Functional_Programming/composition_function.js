/*
    Function Composition: Function Composition is a one kind of function through which the output of the second function can be given in the form of input of the first function.

*/
function sum (a , b) {
    console.log(a, b);
   return a + b;

}
function firstElem(a) {
    return a;
}
function secondElem(b){
    return b;
}
const x = sum(firstElem(10), secondElem(20));
console.log(x);

// Another Example
function print(input) {
    console.log(input);
}
function multiply(n) {
    return n * n;
}
function add (a, b) {
    return a + b;
}
const y = print(multiply(10));
const z = print(add(10, 20));
console.log(z);
