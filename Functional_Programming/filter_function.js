/*
    filter() method: the filter() methods creates a new array with array elements that passes a test.
    *when  the callback function does not use the index and array parameters, so we can be omitted of this parameters.

*/
// create JavaScript build-in-filter method
const arr = [1, 3, 4, 5, 6, 7, 8];
const x = arr.filter(function(value) {
   return value > 3;
})
console.log(x);

// create manually filter function
const arr1 = [1, 3, 5, 7, 8, 10];

function filterFunction (arr, cb) {
    let newArray = [];
    for (let i =0; i < arr.length; i++) {
        if ( cb(arr[i]) ){
            newArray.push(arr[i])
        }
    }
    return newArray;
}
let y = filterFunction(arr1, function(value) {
    return value > 4;
});
console.log(y);