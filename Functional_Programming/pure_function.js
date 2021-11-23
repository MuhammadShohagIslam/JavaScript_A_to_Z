/*
    Pure Function: Pure function is a one kind of function which returns the same result if gives the same arguments
    And
    it does not cause any observable side effects.

*/

// declare a pure function
function pureFunction(a) {
  return a * a;
}
console.log(pureFunction(10)); // provide same argument
console.log(pureFunction(10)); // provide same argument
console.log(pureFunction(10)); // provide same argument

// it is not pure function beacuse it's caused by side effect
function functionName(a) {
  // it is not pure function, it is cause by side effect
  a.firstNumber = 0;
  return a.firstNumber;
}
let obj = {
  // this function changed object value as well. so it is side effect
  firstNumber: 1,
  secondNumber: 2,
};
let x = functionName(obj);
console.log(x);
console.log(obj.firstNumber);
