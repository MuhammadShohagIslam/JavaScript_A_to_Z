/*
    Curring: Curring is when we break down a function  multiple arguments into a series of functions that each take only one argument.

*/
// normal function
function normalFun(a, b, c) {
  return a + b + c;
}
console.log(normalFun(10, 20, 30));

// curring function
function curring(a) {
  let num = 0;

  for (let i = 0; i <= a; i++) {
    num += i;
  }
  return function (b) {
    for (let i = 0; i <= b; i++) {
      console.log(`${i} curring second function`);
    }
    return function (c) {
      return num + b + c;
    };
  };
}
console.log(curring(4)(3)(4));
