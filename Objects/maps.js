/*
 *** JavaScript Maps ***
 * A Map holds key-values pairs where the keys can be any datatype.
 *  A Map remembers the orginal insertion order of the keys
 * A Map has a property that represents the size of the map
 */

//  we can create a javaScript Map by using new Map()
const fruits = new Map([
  ["olive", 500],
  ["apple", 500],
  ["banana", 400],
]);
console.log(fruits);

// we can add new element by using set() method
fruits.set("orange", 300);
fruits.set("pineapple", 500);
console.log(fruits);

// the get() method gets the value of a key in a map
const getValue = fruits.get("olive");
console.log(getValue);

// the size property returns the number of elements in a Map
console.log(fruits.size);

// the delete() method removes a Map element
const removeElement = fruits.delete("pineapple");
console.log(removeElement);
console.log(fruits);

// the has() method return true if a keys exits in a Map
const keyExist = fruits.has("olive");
console.log(keyExist);

// the forEach() method  invokes a callback for a each key/value pair in a Map
let text = " ";
fruits.forEach(function (value, key) {
  text += key + " " + value;
});
console.log(text);

// the keys() method returns an iterator object with the keys in a Map
for (const x of fruits.keys()) {
  console.log(x);
}

// The values method returns an iterator object with the value in a Map
let total = 0;
for (const x of fruits.values()) {
  total += x;
}
console.log(total);

// the entries() method returns an iterator object with the [key, values] in a map
let text1 = " ";
for (const x of fruits.entries()) {
  console.log(x);
  text1 += x;
}
console.log(text1);

// check the data type of a Map
console.log(typeof fruits); // return object, beacuse Map is a Object
console.log(fruits instanceof Map); // retruns true if it is a Map
