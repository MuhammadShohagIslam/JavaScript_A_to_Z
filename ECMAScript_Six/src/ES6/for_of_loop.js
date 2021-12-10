/*
    For Of Loop: For Of Loop is one kind of JavaScript
    important concept through which we can be done loops
    through the values of an iterable object.(Array, String, Maps, NodeLists and more..)

    * Iterable: An Object through which we can be done loop step by step

*/
let arr = [1, 4, 5, 6, 7,8];
for (let i of arr ){
    console.log(i); // return value not index number
}
console.log("-------------------------");

// looping over a String
let language = "JavaScript";
for (let i of language){
    console.log(i) // return every string character step by step
}
console.log("-------------------------");

// looping over map
let map = new Map([
    ['a', 10],
    ['b', 10],
    ['c', 10]
]);

for (let i of map){
    console.log(i); // return each key value pair
}

