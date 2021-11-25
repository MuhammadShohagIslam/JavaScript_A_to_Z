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
let text = '';
for (let i of y){
    text += i + " ";
    // console.log(i)
}
console.log(text);

