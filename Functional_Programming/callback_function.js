/*
    CallBack Function: A callback function is a function through which we can pass a function into another function as a argument, this system called CallBack Function.

    *Remember when we pass a function as a argument, remember not to use parenthesis.
    *This technique allows a function to call another function.
    * A callback function can run after another function has finished.
    
*/
// create a callback function
function sample(a, b, cb) {
    let c = a + b;
    let d = a - b;
    let result = cb(c, d) // it is a callback function.
    // return cb(c, d);
    return result;
}

let sum = sample(10, 20, function(a,b){
    return a + b;
})
let sub = sample(10, 20, function(a, b) {
    return a - b;
})
let div = sample(10, 30 , function(a, b) {
    return a / b;
})
let mod = sample(10, 30 , function(a, b) {
    return a % b;
})
console.log(sum);
console.log(sub);
console.log(div);
console.log(mod);

