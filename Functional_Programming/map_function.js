/*
    map() method: the map() method creates a new array by performing a function on each array element.
    *The map() mehods does not execute the function for array element without values.
    * The map() method does not change the orginal array.
    
*/
// working with JavaScript build-in-map method
const arr = [1,3,3,5,6,7,8];

const x = arr.map(function(value, index, array){
    // console.log(value*2, array, index);
     return value * 3;
})
console.log(x) // new array 

// create manually map function
const arr1 = [1,2,4,6,8];

function mapFunction(arr, cb) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(cb(arr[i])); // cb() callback function
    }
    return newArray;
}

let y = mapFunction(arr1, function(value) {
    return value * value;
});
console.log(y);



