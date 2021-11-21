/*
    *** JavaScript Sets ***
        * A JavaScript set is a collection of unique values.
        * Each value can only occur in a Set.
        * A Set can hold any value of any data type.

*/
// through the new Set() method, we can create new set
const letters = new Set(["a", "b", "c"]);
console.log(letters);

// through the add() method, we can add literal values
const letter1 = new Set();
letter1.add("a");
letter1.add("b");
letter1.add("c");
console.log(letter1);

// the forEach() method invokes a function for each Set element
let text = "";
letters.forEach(function (value) {
  text += value;
});
console.log(text);

// the values() method returns an Iterator object containing all the values in a Set
console.log(letters.values());

//We can use the Iterator object to access the element
const myIterator = letters.values();
for (let x of myIterator) {
  console.log(x);
}

// the entries() method, returns [value, value] pairs instead of [key, value] pairs
let myIterator1 = letters.entries();
for (const x of myIterator1) {
  console.log(x);
}

// check data type of set
console.log(typeof letters); // return object beacuse set is object
console.log(letters instanceof Set); // return true, if it is a Set
