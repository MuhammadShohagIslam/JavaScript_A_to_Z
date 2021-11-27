/*
    from() method: The from() method returns an Array object from any object with a length property or any iterable object

    The keys() method returns an Array Iterator object with the keys of an array.

*/
// create from() method
const str = "Bangladesh";
const x = Array.from(str);
console.log(x);

// create keys() method
const fruits = ["Olive", "Banana", "Apple"];
const y = fruits.keys();
console.log(y); // return array iterator

// for ( let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }
let text = "";
for (let i of y) {
  text += i + " ";
  // console.log(i)
}
console.log(text);

// create sorting over Array of Object
const persons = [
  {
    name: "A",
    age: 24,
  },
  {
    name: "B",
    age: 25,
  },
  {
    name: "C",
    age: 26,
  },
  {
    name: "D",
    age: 27,
  },
];
persons.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
    // return -1; // descending order
  } else if (a.age > b.age) {
    return -1;
    // return 1;  // descending order
  } else {
    return 0;
  }
});
console.log(persons);

// ceate a sort() method using Array
const arr = [1, 3, 4, 5, 6, 7, 7, 8, 1, -2, -8, 0];
arr.sort(); // not working when comes a negative
arr.sort(function (a, b) {
  if (a > b) {
    return 1;
    // return -1;  // descending order
  } else if (a < b) {
    return -1;
    // return 1; // descending order
  } else {
    return 0;
  }
});
console.log(arr); // it is working perfectly
