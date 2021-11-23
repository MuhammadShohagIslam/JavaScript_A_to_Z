/*
    *****  First Class Function  *****
    First class function has 6 characteristics like
        1. A Function can be stored in a Variable
        2. A function can be stored in Array
        3. A function can be stored in an Object
        4. We can create Function as Need
        5. We can Pass Function as an Arguments
        6. We can return function from Another function

        Note that : 5 , 6 characteristics are also Higher Order Function.

        When the above characteristics match a function, we can call it is a First Class Function

*/
// first class function can be stored in a Variable
function firstClass(a, b) {
  return a * b;
}
let x = firstClass; // stored firstClass function to X variable
console.log(x(10, 30));

//  first class function can be stored in Array
const arr = [];
function firstClass1(a) {
  return a;
}
arr.push(firstClass1);
console.log(arr[0]("Olive")); // stored firstClass1 to arr like Array

// first class function can be stored in an Object
const obj = {
  firstName: "Muhammad Shohag",
  lastName: "Islam",
  fullName: function () {
    // first class function can be stored in an Object
    return this.firstName + " " + this.lastName;
  },
};
console.log(obj.fullName);

// we can create first class function as Need
setTimeout(function () {
  // it is a first class function
  console.log("It is first class function");
}, 1000);



