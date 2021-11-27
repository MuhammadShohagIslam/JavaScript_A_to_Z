/*
    Recursive Function:  Recursive function is a one kind of function through which we can work looping way 
    through call recursive system but where we can not use 'for loop' in the system.

    * Recursive is a expensive programme, it is means it's need more memory and need time complexcity, has memory complexcity.

    * Where we can work through 'for loop', we can use for loop, but if any time comes any situition we can do work properly using for loop , we can use 'Recursive Function' doing this work.

*/
// sum calculation using recursive function
function sum(n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}
console.log(sum(5));

// calculation factorial using recursive function
function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));
