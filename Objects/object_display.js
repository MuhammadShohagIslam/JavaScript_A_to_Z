/*
    *** JavaScript Display Object ***
        * Displaying a JavaScript object will output [object Object]
        * There are few way to display JavaScript objects
            *Displaying the Object Properties by name
            *Displaying the object Properties in a loop
            *Displaying the Object using Object.values()
            *Displaying the Object using JSON.stringify()

*/
// Displaying the Object properties
const profile = {
  firstName: "Muhammad Shohag",
  lastName: "Islam",
  age: 23,
};
console.log(profile.firstName); // it can be displayed as a string.

/*
    *** Displaying the object in a loop ***
    *the properties of an object can be collected in a loop
    Syntax:
        for (let i in objectName) {
            // code can be executed
        }
        * We must use objectName[i] in the loop
        ** We can not use objectName.i, beacuse i is a variable
*/
let text = "";
for (let i in profile) {
  console.log(i);
  text += profile[i] + " ";
}
console.log(text);

/* Displaying the Object using Object.values() */
// any JavaScript object can be converted to an array using Object.values()
const myArray = Object.values(profile);
console.log(myArray);

/* Displaying the Object using JSON.stringify()   */
// any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify()
let myStringify = JSON.stringify(profile);
console.log(myStringify); // return string following the JSON notation

// *Displaying the Object keys using Object.keys()
const myObjKeys = Object.keys(profile);
console.log(myObjKeys);

// *Displaying the Object to array using Object.entries()
const myObjArr = Object.entries(profile);
console.log(myObj);

// JSON.stringify() can be converted dates into strings
const myDateObj = Object.create(profile);
myDateObj.today = new Date();

let myStringify1 = JSON.stringify(myDateObj);
console.log(myStringify1);

/* 
    Stringify Function: will not converted to a string
    but we can be fixed if we converted the functions into string before stringifying

*/
const profileObj = {
  firstName: "Muhammad Shohag",
  lastName: "Islam",
  age: function () {
    return 30;
  },
};
profileObj.age = profileObj.age.toString();
let myStringify2 = JSON.stringify(profileObj);
console.log(myStringify2);

// Strigify Array
const arr = ["a", "b", "c", "d"];
let myStringify3 = JSON.stringify(arr);
console.log(myStringify3);
