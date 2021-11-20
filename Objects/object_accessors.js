/*
    *** JavaScript object Accessors ***
        Getters and Setters allow we to define Object accessors(Computed Properties)
        What is the reason using Getter or Setter?
            *better data quality
            *gives simpler syntax
            *allows equal syntax for properties and methods
            *useful for doing things behind-the-scenes

*/
// Using Getter ( The get keyword)
const profile = {
  firstName: "Muhammad Shohag",
  lastName: "Islam",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};
console.log(profile.fullName);

// Using Setter (The set Keyword)
const profileObj = {
  firstName: "Muhammad Shohag",
  lastName: "Islam",
  age: undefined,
  set ageSetter(age) {
    this.age = age;
  },
};
profileObj.ageSetter = 23;
console.log(profileObj);

// The Object.defineProperty() method can also be used to add Getters and Setters.
const obj = {
  firstName: "Muhammad Shohag",
  lastName: "Islam",
  age: undefined,
};
Object.defineProperty(obj, "fullName", {
  get: function () {
    return this.firstName + " " + this.lastName;
  },
});
Object.defineProperty(obj, "ageSetter", {
  set: function (age) {
    this.age = age;
  },
});
obj.age = 23;

console.log(obj);
