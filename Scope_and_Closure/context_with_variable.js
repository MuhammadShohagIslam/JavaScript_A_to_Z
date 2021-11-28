/*
    *** Variable Object Creation ***
        The Creational Phrase:
            all variable name are collected to memory or stored as a object.
            assign as a undefined.
            
        The Executional Phrase:
            if assign to value to the variable, this is executed as a value,
            otherwise, it is executed as a undefined.

        *** If we try to executed this variable before value assign, we can find result is undefined.

        Creational Phrase
            a = undefined
            b = undefined
            c = undefined

        Executional Phrase
            a = 10
            b = 10

*/
var a = 10;
var b;

console.log(b); // return undefined
console.log(a);

b = 10;
console.log(c); // return undefined

var c = 10;
console.log(c); // return 10
