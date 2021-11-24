/*
    forEach() method: the forEach() method calls a function for each element in an array.
    
    * The forEach() method is not executed for empty elements.
    Syntax:
        array.forEach(function(currentValue, index, arr), thisValue)
    *** It is not executed new array, it is only work on the existing array. 

*/
const arr = [1, 3, 4, 5, 6];

// let sum = 0;
// arr.forEach(function(value, index, array){
//     return sum += value
//     // console.log(value, index, array);
// })
// console.log(sum);

// manually create a forEach() methods.
function forEach(arr, cb) {
    for (let i = 0; i < arr.length; i++ ){
        cb(arr[i], i, arr);
    }
}

let sum = 0;

forEach(arr, function(value, index, array){
    console.log(value, index, array);
    sum += value;
})
console.log(sum)