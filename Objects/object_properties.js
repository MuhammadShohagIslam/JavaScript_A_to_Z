/*
    Properties: Properties are the values associated it with a JavaScript object.
    Properties can usually be changed, added, and deleted, but some are read only.

    Accessing JavaScript Properties:
        Syntax:
            objectName.property
            objectName['property']
            objectName(expression)

*/
// accessing javaScript properties
const obj = { firstName: "Muhammad Shohag", lastName: "Islam", age: 23 };
console.log(obj.firstName); // like objectName.property
console.log(obj["lastName"]); // like objectName['property']

// like objectName(expression)
let x = "age";
console.log(obj[x]);

// console.log(`My name is ${obj.firstName+' '+obj.lastName}.I am ${obj[x]} years old`);
console.log(
  `My name is ${obj.firstName} ${obj.lastName}.I am ${obj[x]} years old`
);

/*
    *** JavaScript for...in Loop***
        The JavaScript for...in statement loops through the properties of an object.
        Syntax:
            for (let properties in object) {
                // code to be executed
            }
*/
const objLoop = Object.create(obj);
let text = "";

for (let i in objLoop) {
  console.log(i);
  text += objLoop[i] + " ";
}
console.log(text);

// adding new properties
obj.eyeColor = "black";
console.log(obj);

// the delete keyword deletes a property from an object
// delete obj['eyeColor'];
delete obj.eyeColor;
console.log(obj);

// nested objects
const myObj = {
  firstName: "Muhammad Shohag",
  lastName: "Islam",
  age: 23,
  location: {
    currentLocation: "Turkey",
    city: "Kayseri",
  },
};
// we can access nested objects using dot notation or bracket notation
console.log(myObj.location.city);
// console.log(myObj.location['city']);
// console.log(myObj['location']['city']);

// Nested array and objects
const nestedArObj = {
  firstName: "Muhammad Shohag",
  lastName: "Islam",
  age: 23,
  locations: [
    { location: "Turkey", city: "Kayseri", foods: ["Olive", "Apple"] },
    { location: "Bangladesh", city: "Dhaka", foods: ["Olive", "Apple"] },
  ],
};
console.log(nestedArObj);
// access array inside arrays, use a for in loop for each array
let y = "";
for (let i in nestedArObj.locations) {
  y += nestedArObj.locations[i].location + " ";
  for (let j in nestedArObj.locations[i].foods) {
    y += nestedArObj.locations[i].foods[j] + " ";
  }
}
console.log(y);
