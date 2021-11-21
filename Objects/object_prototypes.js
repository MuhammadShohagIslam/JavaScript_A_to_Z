/*
    **** JavaScript Object Prototypes ****
        Prototypes: Prototype is a one kind of object where all JavaScript objects inherit properties and methods from a prototype.
            * Date objects inherit from Date.prototype
            * Array objects inherit from Array.prototype
            * Obejct Constructor object inheirt from objectConstructorName.prototype
        * The Object.prototype is on the top of the prototype inheritance chain.
        Note That: only modify our own prototypes. Never modify the prototypes of standard JavaScript objects.

*/
// create a object constructor
function Profile(first, last, age, eyeColor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyeColor;
}
const shohag = new Profile("Muhammad Shohag", "Islam", 23, "Black");
console.log(shohag);

// we can not add new properties existing constructor traditional way like below
Profile.nationality = "Bangladesh";
console.log(shohag);

console.log(Profile.prototype);

// through using the prototype property, we can add properties and method in the object constructor
Profile.prototype.nationality = "Bangladesh";
console.log(Profile.nationality);
console.log(shohag.nationality);

// Add method in the constructor object
Profile.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};
console.log(shohag.fullName());
