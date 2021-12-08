/*
    Arrow Function: Arrow function is a modern JavaScript function, which allows a short syntax for writing function expression.

    * We do not need the function keyword, the return keyword, and the curly brackets,
    but if the function is a multiple statement, we have to put return and curly brackets.

    * Arrow functions are not hoisted, so we have to define before we are used.
    * If we use Const keyword, it safer to use in the case of arrow funnction.
    * Arrow functions are not supported in IE11 or earlier
    
    Note that: Arrow function do not have their own this, 
    it is not well suited for defining object method.

*/

// create a arrow function
const arrowFun = (a, b) => a + b;
console.log(arrowFun(10, 40));

// when use single parameters, no need to use brackets, it's sometime called banana
const arrowFun1 = a => a * a;
console.log(arrowFun1(20));

// use arrow function inside the object method
const obj = {
  a: 20,
  b: 30,
  total: () => {
    console.log(this); // return global global object like windows object, but to strict mode, it is returned undefined
  },
}; // we can not use arrow function as object method, but alternative way below
console.log(obj.total());

// alternative way to use arrow function inside a arrow function
const obj2 = {
  a: 20,
  b: 30,
  total: function () {
    setTimeout(() => {
      console.log(this.a); // return  obj2
    }, 1000);
  },
};
console.log(obj2.total());

// another alternative way to use arrow function inside a arrow function
const obj3 = {
  a: 20,
  b: 30,
  total: function () {
    setTimeout(() => {
      console.log(this); // return  obj4
    }, 1000);
  },
};

const obj4 = {
  a: 8,
  b: 0,
};
console.log(obj2.total.apply(obj4));
