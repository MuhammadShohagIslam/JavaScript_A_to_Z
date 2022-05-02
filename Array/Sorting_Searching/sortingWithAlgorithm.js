/*
    *** Sorting: Sorting is one kind of process through which we can ordering list of element data. It can be ascending ordering or desecnding ordering element.

    *** There are lots of Sorting Algorithm ***
        1. Bubble Sort
        2. Selection Sort
        3. Insertion Sort
        4. Quick Sort
        5. Merge Sort
        6. Heap Sort
        7. Redix Sort
        Tons of Different Sorting Algorithm Available...

*/

/*
 *** Implementation of Bubble Sort ***
 */
const myArray = [1, 6, 3, 4, 5, 6, 10, 16, 8, 100, 9];

const bubbleSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
};
// console.log("Unsorted Array", myArray);
bubbleSort(myArray);
// console.log("Sorted Array", myArray);

/*
 *** How to Work with Sort Method ***
 */
// const numbers = [10, 20, 30, 40, 80, 100];
// numbers.sort();
// console.log(numbers); // this way sorting is not working

// we have to define the callback with the condition
const numbers = [10, 20, 30, 40, 80, 100, 55, 44, 77, 1];

numbers.sort((a, b) => {
    console.log(a, b);
});

// ascending order sorting
numbers.sort((a, b) => a - b);
console.log(numbers);

// descending order sorting
numbers.sort((a, b) => b - a);
console.log(numbers);

// we want to sorting string array
let string = ["Cat", "Ball", "Apple"];
string.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});
console.log(string);

let string1 = ["apple", "Cat", "cat", "Ball", "ball", "Apple"];
string1.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});
console.log(string1);

// sorting object through id
const team = [
    { id: 2, name: "Shegufa" },
    { id: 4, name: "Badhon" },
    { id: 10, name: "Setu" },
    { id: 1, name: "Nayem" },
    { id: 8, name: "Tamim" },
    { id: 3, name: "Salvy" },
    { id: 6, name: "Sakib" },
    { id: 5, name: "Asief" },
    { id: 9, name: "Riya" },
    { id: 7, name: "Mehedi" },
]; // credit by stack learner
team.sort((a, b) => {
    if(a.id > b.id) return 1;
    if(a.id < b.id) return -1;
    return 0;
});
console.log(team);

// sorting object through name
team.sort((a, b) => {
    if(a.name > b.name) return 1;
    if(a.name < b.name) return -1;
    return 0;
});
console.log(team);

// Implement Bubble Sort with Callback
const myArray1 = [1, 6, 3, 4, 5, 6, 10, 16, 8, 100, 9];

// one way
// const bubbleSort1 = (array, cb) => {
//     for(let i = 0; i < array.length -1; i++){
//         for(let j = 0; j < array.length -1; j++){
//             if(cb(array[j], array[j+1])){
//                 let temp = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = temp;
//             }
//         }
//     }
// }

// const cbFunction = (a, b) => {
//     if(a.name > b.name) return true;
//     if(a.name < b.name) return false;
//     return false;
// }

// bubbleSort1(team,cbFunction);
// console.log(team);

// second way
const bubbleSort1 = (array, cb) => {
    for(let i = 0; i < array.length -1; i++){
        for(let j = 0; j < array.length -1; j++){
            if(cb(array[j], array[j+1]) > 0){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}

bubbleSort1(myArray1,(a, b) => a - b);
console.log(myArray1);

bubbleSort1(team, (a, b) => b.name - a.name);
console.log(team);

