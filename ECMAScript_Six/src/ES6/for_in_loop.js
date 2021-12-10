/*
    For In Loop: For in Loop is a system through which we can interate over a object.
        * The for in loop iterates over a object
        * Each iteration returns a key
        * The key is used to access the value of the key
        * The value of the key is objectName[key]
        
    Note that: we should not use for in loop over an Array beacuse if the index order is important.

    *** Iterable: Iterable is that it can do iteration in any place 
    OR
    where we can be done step by step loop inside the any object, it's called Iterable.(Array, String, Map, NodeList)

*/
const obj = {
    a: 10, 
    b: 30,
    c: 50
};

for (let i in obj){
    console.log(i) // return key
    console.log(obj[i]); // return value
}
console.log("============")

// for in statement can also loop over the properties of an array
const arr = [1, 2, 3, 4, 5, 6];
for (let i in arr){
    console.log(i) // return index number
    console.log(arr[i]) // return value
}
console.log("============")

/*
    ***we should not use for in loop over an Array beacuse
     if the index order is important. ***
*/

const arr1 = [2, 3, 4, 5, 6,1];
for (let i in arr1){
    console.log(arr1[i]);
}
