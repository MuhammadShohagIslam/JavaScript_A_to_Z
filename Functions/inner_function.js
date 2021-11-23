/*
    Inner Function: Inner function is a one kind of nested function where write one function inside the another function.

    Syntax:
        function outerFunction(parameter1, parameter2,....){
            function innerFunction(){
                // code to be executed
            }
            innerFunction() // call Inner Function
            return innerFunction () // return Inner Function
        }

*/
// declare inner function
function add (a, b) {
    let total = 0;
    function sum(){
        total = a+b    
    }
    sum();
    return total;
}
let x = add(10, 30);
console.log(x);

// another example of inner function
function nameFunction (first, last) { // outer function
    let name = '';
    function firstName () { // inner function
       name = first.split(' ')[0]
    }
    firstName();
    return name;
}
let y = nameFunction('Muhummad Shohag','Islam');
console.log(`My First Name is ${y}`);

// function nameFunction (first, last) {
//     
//     function firstName () {
//        let  name = first.split(' ')[0]
//        return name;
//     }
//     return firstName();
//     
// }
// let y = nameFunction('Muhummad Shohag','Islam');
// console.log(`My First Name is ${y}`);


