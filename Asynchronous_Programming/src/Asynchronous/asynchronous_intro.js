/*
    *** What is Synchronous Programming ***
        => Computer programming code will be executed line by line 
        *** Note that: JavaScript By Default Synchronous language

*/
// synchronous behaviour : i have used this example only understanding
let a = 10;
let b = 10;
console.log(a); // step by step executed
console.log(b); // step by step executed

/*
    *** What is Asynchronous Programming ***
        => Asynchronous means that we can be executed multiple things
             at a time and we do not have to wait, whose work will be finshed first,
            it will be executed first.

        * Asynchronous function is not called instantly.
        * JavaScript has not a asynchronous, it is the manipulation of JavaScript Engine.
        
*/
// create asynchronous system
console.log("I am line One");
setTimeout(() => {
  console.log("I am line Two");
}, 1000);

setTimeout(() => {
  console.log("I am line Three");
}, 2000);
console.log("I am line Four");

/*
    *** If there is an asynchronous operation inside a function. We are going to execute the result from this 
        function if the result come from this function, in this case we can not able to store result into a variable.

    *** Solve: to solve this problem, we have to handle inside the asynchronous task.

*/
function sayTalk(a) {
  let result;
  setTimeout(() => {
    result = a; // we can not store value beacuse it is asynchronous.
  }, 1000);
  return result; // return undefined.
}

let v = sayTalk(10);
console.log(v);

/*
    *** Why Does JavaScript Act Like Asynchronous ***
        => Beacuse, JavaScript is a single threaded language
            it means, JavaScript process one task at a time.(Single Threaded )

    *** JavaScript uses two data structure to handle variables and function calls.
        => Heap -- to manage variables
        => Stack -- to manage function calls
*/

/*
        *** How to Handle JavaScript the task of an Asynchronous ***
            => through JavaScript Engine like V8 Engine.

        ***  It is used four step to complete task
                => Call Stack
                => Web API
                => Event Loop
                => Callback Queue

            Call Stack => It is handled JavaScript function, which one is executed first, which one is executed second, third ...

            Web API => The ones that are not included in JavaScript but it is very important for creating 
            powerful web application, they are Web API.
            This is provided by JavaScript Engine.

            Callback / Task Query: We can find all of the function as a form of query. A callback function will be followed by a callback function

    *** Asynchronous Task Process => Call Stack -> Web API -> Callback / Task Queue -> Call Stack
*/

/*
    V8 Engine: V8 is a software, which receives JavaScript Code,
    doing compile, finally do the execution of data. V8 Engine can be worked with Node and Browser.But, 
    V8 Engine do not work with DOM. 

    *** There are three waies to handle of an asynchronous task:
        => Callback (Greater way to handle asynchronous task).
        => Promise (ES6). 
        => Async Function (ES7) -> it is a better version of  Promise.

    *** Collection of Asynchronous Function
        => Async Iteration.
        => For Await of Loop.
        => Async Generation.

*/
