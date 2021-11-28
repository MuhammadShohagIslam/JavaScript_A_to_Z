/*
    Scope: Scope determines the acceeibilty (visibility ) of variables.
    JavaScript has 3 types of scope:
        * Block scope
        * Function scope
        * Global scope
    
    * Do not create global variable unless we think that this global variable is needed of your work purpose.

    *** The lifetime of a JavaScript variable starts when it is declared
    *** Function's local variables are deleted when the function is completed.

*/
// Let and Const, these keywords provide Block Scope in JavaScript
// Variables declared inside a {} block can not be accessed from outside the block

{
    let x = 10;
    console.log(x);
}
// Variables declared inside a {} block can not be accessed from outside the block
console.log(x) ;

{
    const x = 10;
    console.log(x);
}
// Variables declared inside a {} block can not be accessed from outside the block
console.log(x);

/*
    *** Local Scope ***
        * Local variables have Function Scope
        * They can only be accessed from within the function
        ** Local Variables are created when a function starts, and deleted when the function is completed.
*/

// variable declared within a JavaScript function, become LOCAL to the function.
function localScopeFun() {
    let x = "Olive";
    console.log(x); // we can use here
}
// we can not use local variable from localScopeFun outside the this function.
console.log(x);

// local variable with the same name can be used in different functions 
function localScopeFun1 () {
    let x = 'Banana';
    console.log(x);
}
// we can not use local variable from localScopeFun1 outside the this function
console.log(x);

/*
    *** Function Scope ***
        *JavaScript has function scope: Each function creates a new scope.
        * Variable defines inside a function are not accessible(visible)
        from the outside the function.
        * Variable declared with var, let, and const are quite similar when declared inside a dunction
        *** we can say, Var keyword is a global scope and function scope
        *** Let and Const are block scope

*/
// function scope using Var Keyword
function functionScope () {
    var a = 10; // var is function
    console.log(a);
}
// we can not access;
console.log(a)

if (true){
    var a =10;
    console.log(a)
}
// it is accessible
console.log(a)

// function scope using Let Keyword
function functionScope1() {
    let a = 10;
    console.log(a);
}
// we can not access;
console.log(a)

// function scope using Const Keyword
function functionScope2() {
    const a = 10;
    console.log(a);
}
// we can not access;
console.log(a)

/*
    *** Global JavaScript Variables ***
        A variable declared outside a function, it will become a global
        * Variables declared globally (outside any function) have Global Scope.
        * All Scripts and function on a web page can access it.
        * Global variables can be accessed from anywhere in a JavaScript program.
*/
let fruits = "Olive"; // it is working as a global variable
function myFunction() {
    console.log(fruits) // we can access a global variable
}

// In JavaScript, objects is also variable
let g = { // x is a variable
    a: 10
}

// In JavaScript, function is also variable
let h = function myFunction(){ // h is a variable
    let x = 20;
    console.log(x)
}

/*
    *** Automatically Global ***
        * When we assign a value to a variable that has not been declared(like not using let, const, var),  it will automatically become inside a function.
        it is called accidentally Global Variable
        *** but if we use 'Strict Mode', undeclared variables are not automatically global

*/
function autoGlobalFun() {
    flower = "Rose"; // it will be autoatically global variable
    console.log(flower);
}

/*
    *** Global Variables in Html ***

        * With JavaScript, the global scope is the JAvaScript enviornment.
        * in HTML, the global scope is the window object.
        * Global variables defiend with the Var keyword belong to the window object
        *** But Global variables defiend with the Let keyword 
        do not belong to the window object (All of Build in JavaScript Function we can find here)
        
*/
// global variables are stored into windows object
var i = "olive";
console.log(window.i) // i is global variable.

// using Let keyword, it is not stored into windows object.
let j = "Olive";
console.log(window.j) // return undefined.

/*
    Function parameters works as local variables inside functions
*/

function functionVariable(a, b) { // here a and b works as local variable inside the function
    console.log(a + b);
}
functionVariable(10, 30);





