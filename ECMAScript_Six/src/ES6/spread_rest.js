/*
    Rest Parameter: Rest parameter is a one kind of technique which collects all remaining elements into an array.
    Or 
    When ( ... ) this signal are used inside as a function parameter, it become a rest operator.

    Spread Oparator: Spread Operator is a one kind of operator which allows iterables(array/objects/strings)
    to be expanded into single.
        * Spread Operator is awesome process through which 
            is created new objecct from existing object.
        * It is used for spreading Array and Object as well as String
*/
// rest parameter
function restFunction(a, ...rest){ // ...rest paramater collect whole parameter to array
    console.log(a);
    console.log(...rest)
   return rest.reduce(function(a, b){
        return a + b;
   })
}
const rest = restFunction(1,2,4);
console.log(rest)

// spread operator
const obj = {
    a: 1,
    b: 2
}
const ob = obj // if we use this way, it creats problem beacuse when we change obj properties, it can be changed as well as obj properties
ob.c= 1;

const obj2 = {
    ...obj, // collect whole object data from obj
    c: 4
}
console.log(obj2)
const obj3 = {
    ...obj
}
console.log(obj === obj3) // return false  which is created new objecct from existing object.

// spread operator for using Array
const arr = [1, 2, 3, 4, 5]
const arr1 = [2, 4, ...arr];
const arr2 = [...arr];
console.log( arr2 === arr ); // return false beacuse which is created new array from existing array.
console.log(arr1);

// spread operator for using String
let str = "ABC";
let strSpread = ['a', ...str]
console.log(strSpread);

console.log.apply(null, str.split(""))

let num = "1 2 3";
console.log(Math.max(...num)) // ["1"," ", "2", " ","3"," "] >>> [1,0,2,0,3]
console.log(num.split("")) // it is good to use


