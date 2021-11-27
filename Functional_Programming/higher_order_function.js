/*
    Higher Order Function : Higher order function is a function when we can pass a function to another function as a arguments and we can return function from another function, it is called Higher Order Function.

*/

// we can pass function as a arguments, it is not useful function.
function firstClass(a, b) {
  return a + b;
}

function firstClass1(a, b, func) {
  let c = a + b;
  let d = a - b;
  function sum() {
    let m = func(10, 20);
    return c + d + m;
  }
  return sum;
}
let x = firstClass1(10, 20, firstClass2); // firstClass2 function is a argument of func paramater
console.log(x());

// we can return function from another function
function firstClass2(a, b) {
  return a + b;
}

function firstClass3(a, b, func) {
  let g = a + b;
  let h = a - b;
  return function () {
    // return this function from firstClass3 function
    let m = func(15, 20);
    return g + h + m;
  };
}
let y = firstClass3(10, 40, firstClass2);
console.log(y());

// Another Example
function greet(msg) {
  function greeting(name) {
    return `${msg} ${name}`;
  }
  return greeting;
}
let gm = greet("Assalamualikum(Praise and Allah's Mercy Upon You)");
let gn = gm("Muhammad Sojib Brother");
console.log(gn);

// create power function using higher order function
function base(baseNum) {
  function power(powerNum) {
    let result = 1;
    for (let i = 1; i <= powerNum; i++) {
      result *= baseNum;
    }
    return result;
  }
  return power;
}
let b = base(2);
let p = b(3);
console.log(p);

let b1 = base(3);
let p1 = b1(2);
console.log(p1);
