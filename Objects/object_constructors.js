/*
    *** JavaScript Object Constructor ***
    Object Constructor:  Object constructor is a object constructor function 
    through which we can create many objects of the same 'type'
    *It is considered good practice to name constructor functions with an upper-case first letter.
*/
// Create object constructor
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}
const shohag = new Person("Muhammad Shohag", "Islam", 23);
const sojib = new Person("Muhammad Sojib", "Miah", 21);
console.log(sojib.firstName);
console.log(shohag.firstName);

/*
    *** The this Keyword ***
        In JavaScript, the thing called this is the object that owns the code
        *The value of this, when used in an object, is the object itself.
        *In a constructor function this does not have a value. It is a substiture for the new object.
        The value of this will become the new object when a new objecct is created.
*/

// Adding a property to an object
shohag.location = "Bangaladesh";
console.log(shohag);

// Adding a method to an object
shohag.fullName = function () {
  return this.firstName + " " + this.lastName;
};
console.log(shohag.fullName());

// we can not add a new property to an objects constructor the way we add a new property to an existing object.
Person.nationality = "Bangladesh";
console.log(shohag.nationality);

// to add a new property to a constructor, we must add it to the constructor function
function Person1(first, last, age, nationality) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.nationality = nationality;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
  this.changeName = function (name) {
    this.lastName = name;
  };
}
const eshan = new Person1("Muhummad Eshan", "Miah", 11, "Bangladesh");
eshan.changeName("Islam");
console.log(eshan);
console.log(eshan.fullName());

/*
    The Math() is not the constructor . it is a global objects. The new keyword cannot be used on Math.
*/
