/*
    Parameters: when we declare a function with function name and body, we can see a funnel like () beside the function name where we can provide variable, it is a parameters.***
        *** Function parameters are the names listed in the function definition.
        *** Function arguments are the real values passed to (and received by ) the function

    Parameter Rules:
        1. JavaScript function definitions do not specify data types for parameters.
        2. A JavaScript function does not perform any checking on parameters values(argument)
        3. JavaScript functions do not check the number of arguments received.

        Syntax:
            function functionName(parameter1, parameter2, parameter3){
                // code can be executed
            }
*/
// function parameters and arguments
function functionName(a, b) { // a, b are function parameters
    return a * b;
}
let x = functionName(10,2) // 10,2 are function arguments
console.log(x);

// JavaScript function definition do not specify data types for parameters
// function functionName(var a, var b) { 
//     return a * b;
// }

// a JavaScript function does not perform any checking on parameters values(argument)
function functionName1(a, b) {
    return a +' '+ b;
}
let y = functionName1('Muhammad Shohag', 23); // does not any checking on parameters values(arguments) 
console.log(y);

// JavaScript function does not check number of arguments received.
function functionName2(a, b) {
    return a * b;
}
let z = functionName2(10,20, 23,30); // does not any checking number of arguments 
console.log(z);

/*
    *** Default Parameters ***
    When a function is called with missing arguments (less than declared), the missing values are set to undefined.
    ** Sometimes this acceptable, but sometimes it is better to assign a default value to the parameter.
*/
function functionName3(a, b = 10) {
    console.log(b) // missing value is undefined 
    return a * b;
}
let a = functionName3(10);
console.log(a);

// function functionName3(a, b) {
//     if(b === undefined){
//         b = 10;
//     }
//     return a * b
// }
// let a = functionName3(10);
// console.log(a);

/*
    *** The Argument Object  ***
    JavaScript functions have a built-in object called the arguments object.
    The argument object contains an array of the arguments and through arguments.length, we can find length of arguments number.
*/

function functionName4() {
    // return arguments.length;
    let max = 0;
    for (let i = 0; i < arguments.length; i++){
        if (arguments[i] > max){
            max = arguments[i]
        }
    }
    return max;
}
let b = functionName4(1,2,3,4,5,6);
console.log(b);

// create a function to sum all input values
function sumAll(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum;
}
let d = sumAll(1,2,3,4,5);
console.log(d);

// When a function is called with too many arguments(more than declared), these arguments can be reached using the arguments object.
function functionName5(a, b) {
    console.log(arguments[2]); // collect by index to many arguments
    console.log(arguments.length);
    return a * b;
}
let e = functionName5(10,30,30);
console.log(e);

/*
    *** Arguments are Passed by Value ***
*/
// the function only gets to know the values, not the arguments locations.
 function functionName6(a, b){
     a = a * 10; 
     return a * b;
 }
 let m = 10; // does not change the parameter's orginal value.
 let n = 30;
 let f = functionName6(m, n); // only passed only value not arguments locations.
 console.log(f);
 console.log(m); //// change to arguments are not visible (reflected) outside the function

 /* 
    *** Objects are Passed by Reference ***
    *In JavaScript, object references are value beacuse object will behave like they are passed by reference.
    * when a function change an object property, it changes the original value.
    * Changes to object properties are visible outside the function. 
 
 */
function functionName7(p ,s){
    p.firstName = 'Muhammad';
    return p.firstName+' '+ s.lastName;
}
const k = {
    firstName: 'Muhammad Shohag' // it changes the orginal value when a function change an object property
}
const l = {
    lastName: "Shohag Islam"
}
let v = functionName7(k, l); // object reference are values.
console.log(v);
console.log(k.firstName); // change to object properties are visible outside the function.



