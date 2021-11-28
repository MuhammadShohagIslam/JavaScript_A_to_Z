/*
    Hoisting: Hoisting is JavaScript default behaviour of moving declarations to the top.

    * Var, Let, and Const declaration part moving to the top.

    *** Var and Let Hoisting ***
        Let and Const are hoisted, it is moving declaration
        to the top but it can not do assign undefined. 
        that is why there is no memroy space and no reference
            * it is in a 'temporal dead zone'

        ** Using a const variable before it is declared, is a syntax error, so code will simply not run.


*/

// var is hoisted and it is moving delcaration to the top. like var x;
// var x;
// x = undefined;
// x =10;
x = 10;

console.log(x); // return 10
var x;

/* Let and Const are hoisted, it is moving declaration to the top but it can not do assign undefined. that is why there is no memroy and no reference */
// let y
// y = undefined *** it can not do this 
y = 5;
console.log(y); // return reference error

let y;

// Using a const variable before it is declared, is a syntax error, so code will simply not run.
// const z // can not do this
// z = 40  // can not do this beacuse it is const rules
z = 40;

console.log(z); // return syntax error.

const z;

// it is the same result same rule and regulation of hoisting Const and Let variable
function abc(){
    x = 10;
    y =10
    console.log(x); // it is reference error
    console.log(x); // it is syntax error
    let x;  // it is reference error
    const y; // it is syntax error
}






