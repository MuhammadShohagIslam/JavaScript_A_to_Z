/*
    every() method: The every() method check if all array values pass a test.
        * if every() method find just only one value unmatch with condition, it will return 'false'

    some() method: the some() method check if some array values pass a test.
        * if some() method find just only one value match with condition, it will return 'true'

*/
// create a every() method
const arr = [1, 3, 4, 5, 6, 7, 7];
const x = arr.every(function(value, index, array){
    return value >= 1;
})
console.log(x)

// create a some() method
const y = arr.some(function(value, index, array){
    return value > 5;
})
console.log(y);

// manually create some() method
const arr1 = [1, 3, 5, 6, 7, 8, 9];
function someFun(arr, cb){
    let newResult;
    for (let i = 0; i < arr.length; i++){
        if(cb(arr1[i])){
            newResult = true;
        }else{
            newResult = false;
        }
    }
    return newResult;
}
const c = someFun(arr1,function(value){
    return value >= 1;
});
console.log(c);