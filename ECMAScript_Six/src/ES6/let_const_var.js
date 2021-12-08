/*
    Var Let Const : Variables are container where we can be stored data(values).
    * There are 3 ways to declare a JavaScript variables:
                Using var
                Using let 
                Using const
*/
/*
    *** JavaScript Let , Const, And Var ***
        The 'let', 'const', keyword were a modern JavaScript features.
            * Variable defined with let and const can not be redeclared, but with 'var' keyword, it is possible
            * Variables defined with let, var, and const must be declared before use.
            * Variables defined with let and const  have Block Scope.
*/
// variable defined with 'let' can not be redeclared.
let x = 10;
// let x = 40; // it's not possible with same name like redeclare.
console.log(x);

// // variable defined with 'const' can not be redeclared.
// const z = 40;
const z = 40;
console.log(z);

// // variable defined with 'var' can be redeclared.
var g = 40;
var g = 50;
console.log(g);

// variables defined with 'let' must be declared before use
console.log(y); // it is not possible, return undefined.
let y = 10;

// variables defined with 'const' must be declared before use
console.log(h); // it is not possible, return undefined.
const h = 10;

// variables defined with 'var' must be declared before use
console.log(i); // it is not possible, return undefined.
var i = 10;

/*
     *** Block Scope ***
     Before ES6, JavaScript had only Global Scope and Function Scope. After, they introduced a Block Scope.
     *** Let and Const, these two keywords provide Block Scope in JavaScript.

     *** Variable declared inside a {} block cannot be accessed from outside the block.

     Note that: Variable declared with 'var' keeyword inside a {} block cannot be accessed from outside the block.

*/
// use let keyword inside the block scope
{
  let f = 30;
  console.log(f);
}
// console.log(f) // return error, cannot be accessed from outside the block.

// use const keyword inside the block scope
{
  const e = 40;
  console.log(e);
}
// console.log(e) // return error, cannot be accessed from outside the block.

// use var keyword inside the block scope
{
  var p = 60;
  console.log(p);
}
console.log(p); // but it is possible, if use var keyword inside the block scope, it is possible to declare outside

// with Let, redeclaring a variable in the same block is not allowed.
{
  let o = 50;
  //let o = 60; // not possible, it is redeclare
}

{
  let o = 50;
  //var o = 60; // not possible, it is redeclare
}

// redeclaring a variable with let, in another block, IS Possible
let k = 20;

{
  let k = 50;
  console.log(k);
}

{
  let k = 30;
  console.log(k);
}

console.log(k);
