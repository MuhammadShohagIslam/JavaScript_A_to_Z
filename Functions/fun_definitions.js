/*
    JavaScript Functions: A JavaScript functions is a block of code where it's designed to perform a particular task or repetitive task.
    *A JavaScript function is executed when "something" invokes it (call it);
    *JavaScript functions are defined with function keyword
    ** we can use a function declaration or a function expression


    Note that: Semicolons are used to seperate executable JavaScript statements.
    Since a function declaration is not an executable statement,
    it is not common to end it with a semicolon.
*/

// function declaration
function functionName () {
    console.log("It's all right");
}

function functionName1 (a, b) {
    return a + b
}
// declaration function are not executed immediately, they are saved for later use, will be execuetd later when we call it(invoke it)
functionName1(); // invoke it

const a = functionName1;
console.log(a(10,20)); // invoke it

// function define through function expression, it can be stored in a variable
// it is also called anonymous function, beacuse it a function without name.
const x = function (a, b) {
    return a * b
}; // put it semicolon beacuse it is a part of an executable statement.
let y = x(10,4);
console.log(y);

// function defined with function constructor, but it should not use it.
// Most of the time, we should avoid using the new keyword in JavaScript
const constFunction = new Function('a', 'b', 'return a * b');
let b = constFunction(20,20);
console.log(b);

/*
    *** Function Hoisting ***
        Hoisting is JavaScript's default behavior of moving declarations to top of the current scope.
        * Hoisting applies to variable delcaration and to function declaration
        beacuse  JavaScript functions can be called before they are declared
        *** Function defined using an expression are not hoisted.
*/
// functionName(10); // it can be called before they declared.
// function functionName() {
//     return x * y;
// }

/*
    *** Self-Invoking(calling) Functions ***
    We can made self-invoking function through function expression
    *A self invoking expression is invoked(started) automatically, without beign called.
    * It is also called anonymous self-invoking function (a function without name)
    
*/
(function () {
    console.log("It's all right");
    let x = 10;
    console.log(x)
    // return x // it is not working beacuse we can not stored retrun values to a variable.
})();

// function can be used as values
function functionName(a, b) {
    return a * b;
}
let c = functionName(10,2)
console.log(c);

// JavaScipt functions can be used in expressions
let d = functionName(10, 2) *10;
console.log(d);

/*
    *** Functions are Objects ***
        JavaScript functions can be described as objects
        JavaScript functions have both properties and methods.
        * the arguments.length property returns the number of arguments received when function was invoked.
*/
function myFunction(a,b){
    return arguments.length
}
let f = myFunction(1,2,5);
console.log(f);

// the toString() method returns the function as a string
function myFunction1(a,b){
    return (a * b ).toString()
}
let g = myFunction1(1,2);
console.log(g);

// when a function defined as the property of an object, is called a method to the object
const obj = {
    a: 10,
    num: function(){
        this.a = 20;
    } // it is called a method to the object
}
console.log(obj);

/*
    *** Arrow Functions ***
        Arrow functions allow a short syntax for writting function expression.
        * we do not need the function keyword, the return keyword as well as and curly brackets.
        *** Arrow function do not have own this. it is not suited used in defining object methods
            'this' keyword refer global object or window object.
        *Arrow functions are not hoisted.
        * we can omit {}, when the function is a single statement.
        * * Using const is the best instead use of var keyword.
        * 
*/
// ES5
// var x = function (x, y){
//     return x * y;
// }

// ES6 
const h = (x, y) => x * y;
console.log(h(10,4));

const j = (x, y) => {
    console.log(x * y);
    return x*y
}
console.log(j(10,8));







