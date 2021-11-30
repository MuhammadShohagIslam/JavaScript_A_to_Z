/*
    Closure: A Closure is a function having access to the parent scope, even after the parent function has closed.
    It is makes it possible for a function to have "Private"
    variable.
    *JavaScript variable can belong to the local or global scope.
    *Global variable can be made local (private) with closures.
    * JavaScript is a garbage collected language.

*/
// let counter = 0;
// function add(){
//     counter += 1;
// }
// add()
// add()
// add()
// console.log(counter);
// counter = 4;
// console.log(counter); // it is creating problem beacuse we can increament counter number without function


let counter = 0; // global variable
function add(){
    let counter = 0;
     counter += 1;
    return counter;
}

const x = add(); // return 1 
const y = add(); // return 1
const z = add(); 
console.log(x);
console.log(y); // return 1 beacuse when function call they created counter after the function is finished, it can be automatically deteleted. 
console.log(z);// return 1 beacuse we reset the local counter every time we call the function.
console.log(counter) // return global counter value is 0;

// to solve this problem with closure/ inner function
function temporary () {
    let counter = 0;
    return function (){ // this function is a closure
        counter += 1
    }
}
const g = temporary(); // g is a function at the end.
g()
g()
console.log(g);

// Aonther Example
const increment = (function (){
    let counter = 0;
    return function (){
        counter += 1;
        return counter;
    }
})()
const a = increment();
const b = increment();
const c = increment();
console.log(a);
console.log(b);
console.log(c);




