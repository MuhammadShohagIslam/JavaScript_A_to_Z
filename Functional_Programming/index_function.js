/*
    indexOf() method: The indexOf() method searches an array for an element value and retruns its position

    lastIndesOf() method: The lastIndexOf() method searches an array for an element value and returns the position of 
    last occurrence of the specified element.

*/
// create indexOf() method 
const arr = [1, 3, 4, 5, 6, 7, 5, 8, 5, 10];
const x = arr.indexOf(5,5)
console.log(x);

// manually create indexOf() method
function indexOfFun(arr, item, startValue = 0){
    let index = -1;
    for (let i = startValue; i <  arr.length; i++ ){
        if (arr[i] == item){
            index = i;
            break;
        }
    }
    return index;
}
const y = indexOfFun(arr, 5,5);
console.log(y);

//  create lastIndexOf() method
const arr1 = [1, 3, 4, 5, 6, 7, 5, 8, 5, 10];
console.log(arr1.lastIndexOf(5));

// manually create lastIndexOf() method
// function lastIndexOfFun(arr, item, start=0){
//     let index = -1
//     for (let i = 0; i < arr.length - start; i++ ){
//         if(arr[i] == item){
//             index = i;
//         }
//     }
//     return index;
// }
// const a = lastIndexOfFun(arr1, 5);
// console.log(a);