/*
    *** Add New Element ***
        --- Add new element at the end through push() method.
        --- Add new element at the first through unshift() method
*/

/***** Add new element at the end through push() method. *****/
let arr = [1, 3, 4, 5, 6];

arr[arr.length] = 6;
// console.log(arr)

arr.push(7);
// console.log(arr)

let firstItem = [1, 7, 0, 3, 4];
let secondItem = [3, 4, 8, 10, 30];
let thirdItem = [3, 5, 8, 10, 4];

// firstItem.push(secondItem); //can not work beacuse it's push whole array not individual array
firstItem.push(...secondItem);
// console.log(firstItem);

Array.prototype.push.apply(firstItem, thirdItem);
// console.log(firstItem);

let twoDimensionalArr = [
    [1, 7, 0, 3, 4],
    [3, 4, 8, 10, 30],
    [3, 5, 8, 10, 4],
];
let newItem = [];
for (let i = 0; i < twoDimensionalArr.length; i++) {
    newItem.push(...twoDimensionalArr[i]);
}
// console.log(newItem);

/***** Add new element at the first through push() method. *****/
// one way
let item = 9;
let newArray = [item, ...arr];
// console.log(newArray);

// using method
arr.unshift(10);
// console.log(arr);

// with spread oparator
firstItem.unshift(...secondItem);
// console.log(firstItem);

// with apply method
Array.prototype.unshift.apply(firstItem, secondItem);
// console.log(firstItem);

/***** Insert Element At the Given Index *****/
let a = [1, 3, 4, 5];
a.splice(2, 0, 5);
// console.log(a);

// for adding many data, we can use spread operator
a.splice(2, 0, ...[1, 2, 3, 4]);
// console.log(a);

/***** Update Existing Element *****/
let b = [1, 3, 4, 5, 6];
b[1] = 2;
// console.log(b);

let students = [
    { id: 1, name: "Nayem" },
    { id: 2, name: "Shegufa" },
    { id: 3, name: "Salvy" },
    { id: 4, name: "Setu" },
    { id: 5, name: "Mehedi" },
];

let id = 5;
let updateValue = {
    name: "Muhammad Mehedi Hasan",
    age: 24,
};
for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
        students[i] = {
            ...students[i], // through this, we can store previous data
            ...updateValue, // store new data
        };
    }
}

for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
        students[i].age = 25;
    }
}
// console.log(students);

/***** Delete Array Element/Elements *****/
// remove first element from the array with shift() method
let c = [10, 1, 2, 3, 4, 5, 7];
// console.log(c.shift());

// remove the last element from an array
// console.log(c.length);
c.length = c.length - 1;
// console.log(c);

// remove the last element using pop() method
console.log(c.pop());
// console.log(c);

// remove inside elements from an array
// console.log(c)
c.splice(0, 1);
// console.log(c);

let arrayStackLearner = [
    "Stack Learner",
    "Stack School",
    "Stack Consultancy",
    "Stack Tech",
];

let toBeDeleted = "Stack Learner";
for (let i = 0; i < arrayStackLearner.length; i++) {
    if (toBeDeleted === arrayStackLearner[i]) {
        arrayStackLearner.splice(i, 1);
    }
}

// console.log(arrayStackLearner);

// remove element by filter() method
let filterArray = arrayStackLearner.filter(
    (element) => element !== toBeDeleted
);
// console.log(filterArray);

// delete operator . it's just empty index value's but it's have stay index place without value

let arr1 = ["Stack Learner", "Stack School", "Stack Consultancy", "Stack Tech"];
delete arr1[2];
// console.log(arr1)

// reset whole array
let d = [1, 2, 3, 4, 6];
let e = d;
e = [];
// console.log(d, e);

let f = d;
f.length = 0;
// console.log(d, f);

// we can also remove whole array using while and pop() method.
let number = [1, 3, 4, 5, 9];

while (number.length) {
    // 0 is false value, while is looping until come 0
    number.pop();
}
// console.log(number);

// concat multiple array
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// one way with concat() method
let array3 = array1.concat(array2);

// second way
let array4 = [...array1, ...array2];

// slice array into multiple array
let g = [1, 2, 3, 4, 5, 6];
let sliceG = g.slice(2, 4);
// console.log(sliceG);

// we can use slice() method for cloning array
let newCloneArray = g.slice(); // new reference array not g
newCloneArray[0] = 2;
// console.log(newCloneArray, g)
console.log(newCloneArray === g); // return false beacuse both array same but reference different

// creating array through slice method with call()
function toArray() {
    console.log(arguments);
    return Array.prototype.slice.call(arguments);
}
let argsArray = toArray("Stack Learner", 3, "Bangladesh", [1, 2, 3]);
console.log(Array.isArray(argsArray));
