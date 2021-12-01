/*
    apply() and call(): apply(), call(), and bind() are a method that calls a function.
    Apply() and call() are called instantly. But bind() are not called instantly, just it's used to pass aonther object to function and to bind a object

    *** When a function share different object to another function, we have to use apply(), call(), bind()

*/
const obj = {
    firstName: 'A',
    lastName: "B"
}
const obj1 = {
    firstName: 'C',
    lastName: "D"
}
const obj2 = {
    firstName: 'E',
    lastName: "F"
}

function myFunction(a, b){
    console.log(this.firstName + this.lastName + a+ b)
}
// apply() method, when we want to pass argument, we have to pass argument with Array like []
const applyFunction = myFunction.apply(obj, [10, 20])
console.log(applyFunction);

// call() method, when we want to pass argument, we have to pass argument with  comma separate way
const callFunction = myFunction.call(obj1, 10, 20)
console.log(callFunction);

/* 
   ***  bind() method when we use ***
    => When we know that this function does not need to be called now, we will call later when needed, it return a function which we store to a variable.

*/
// const bindFunction = myFunction.bind(obj2, 10, 20)
const bindFunction = myFunction.bind(obj2)
console.log(bindFunction(10, 30));