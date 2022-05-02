/*
    *** Linear Search ***
        => It's a one kind of searching proccess throuhg which we can firstly check every array element, then check excat desire element which we want
*/
const myArray = [1, 6, 3, 4, 5, 6, 10, 16, 8, 100, 9];

//***  Searching algorithm without callback ***
const linearSearch = (array, key) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === key) {
            return i;
        }
        if (array[i].id === key || array[i].name === key) {
            return i;
        }
    }
    return -1;
};
const id = linearSearch(myArray, 100);
console.log(id);

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

const id1 = linearSearch(team, 1);
console.log(id1);

/*
 *** Searching algorithm with callback ***
 */
const linearSearch1 = (array, cb) => {
    for (let i = 0; i < array.length; i++) {
        if (cb(array[i])) {
            return i;
        }
    }
    return -1;
};
const index = linearSearch1(myArray, (value) => value === 1);
console.log(index);

const object = linearSearch1(team, (item) => item.name === "Shegufa");
console.log(object);

const object1 = linearSearch1(team, (item) => item.id === 1);
console.log(object1);

/*
    *** Understanding Binary Search ***
        => Binary Search is working with index
*/
const myArray1 = [1, 6, 3, 4, 5, 6, 10, 16, 8, 100, 9];

const binarySearch = (array, key) => {
    let lowest = 0;
    let highest = array.length - 1;

    while (lowest <= highest) {
        let mid = Math.floor((lowest + highest) / 2);

        if (array[mid] === key) return mid;
        if (array[mid] < key) lowest = mid + 1;
        if (array[mid] > key) highest = mid - 1;
    }
    return -1;
};

myArray1.sort((a, b) => a - b);
console.log(myArray1);
const findIndex = binarySearch(myArray1, 5);
console.log(findIndex);

/*
 *** JavaScript Searching Method  find(), findIndex() ***
 */

 // findIndex()
const myArray2 = [1, 6, 3, 4, 5, 6, 10, 16, 8, 100, 9];
let todos = [
    { name: 'Project 1', isDone: true },
	{ name: 'Project 2', isDone: true },
	{ name: 'Project 3', isDone: true },
	{ name: 'Project 4', isDone: false },
	{ name: 'Project 5', isDone: false },
	{ name: 'Project 6', isDone: false },
	{ name: 'Project 7', isDone: false },
] // credit by Stack Learner

const index1 = myArray2.findIndex((value) => value === 1);
console.log("Index 1",index1);
const index2 = todos.findIndex((item) => item.isDone === false);
console.log("Index 2",index2);

// *** custome findIndex() array method ***
const findIndexFunction = (array , cb) => {
    for(let i = 0; i < array.length; i++){
        if(cb(array[i], i, array)){
            return i;
        }
    }
}
const index3 = findIndexFunction(myArray2, (value) => value === 70);
console.log("Index 3",index3);

const index4 = findIndexFunction(todos, (item) => item.isDone === false);
console.log("Index 4",index4);

// find() method
let todos1 = [
	{ id: '123', task: 'Eat', time: 'Morning' },
	{ id: '234', task: 'Code!', time: 'Afternoon' },
	{ id: '532', task: 'Coffee Break', time: 'Eveneing' },
	{ id: '121', task: 'Sleep', time: 'Night' },
];
const value = todos1.find(item => item.time === "Afternoon");
console.log("Find Value",value);


// *** custome find() array method***
const findFunction = (array , cb) => {
    for(let i = 0; i < array.length; i++){
        if(cb(array[i], i, array)){
            return array[i];
        }
    }
}
const value1 = findFunction(myArray2, (value) => value === 6);
console.log("Find Value 1",value1);

const value2 = findFunction(todos1, (item) => item.time === "Afternoon");
console.log("Find Value 2",value2);