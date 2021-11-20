/*
 *** JavaScript Object Methods ***
 *JavaScript methods are actions than can be performed on objects.
 *A JavaScript method is a property containing a function definition
 *Methods are function strored as object properties
 **this keyword: In a function definition, this refers to the owner of the function.
 */
const profile = {
  firstName: "Muhammad Shohag",
  lastName: "Islam",
  age: 23,
  fullName: function () {
    return `My name is ${this.firstName} ${this.lastName}`;
  },
};
//accessing object methods like objectName.methodName()
console.log(profile.fullName());

// If we access the fullName property without (), it will return the function definition
console.log(profile.fullName);

// delete property of a function from object
delete profile.fullName;
console.log(profile);

// Adding a method to a object

// const addFunction = profile.fullName = function () {
//     return `My name is ${this.firstName} ${this.lastName}`;
// }
// console.log(addFunction, profile);

profile.fullName = function () {
  return `My name is ${this.firstName} ${this.lastName}`.toUpperCase();
};
console.log(profile);
console.log(profile.fullName());
