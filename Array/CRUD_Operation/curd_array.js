/*
    *** CURD OPERATION ***
        --- Create new one ( push, unshift )
        --- Update Operation (for loop, map, reduce )
        --- Read Operation (for loop, map, reduce, reduce)
        --- Delete Operation (slice(), filter())
*/
//*********** Create Operation  ***********
const array = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
    { id: 8, name: "G" },
];

const newObject = {
    id: 5,
    name: "E",
};

// one way
// array[array.length] = newObject;

// seconde way
array.push(newObject);

// third way with unshift() method where new object added first index
array.unshift(newObject);
// console.log(array);

/*********** Update Operation ***********/
let updateID = 5;
let updatedObject = {
    id: 0,
    name: "No Letter",
};
let id = array.findIndex((value) => value.id === updateID);

// update object with reduce() method
array.reduce((acc, _, index) => {
    if (index === id) {
        array[index] = {
            ...array[index],
            ...updatedObject,
        };
    }
    return acc;
}, []);

// update object with map() method.
array.map((value, index) => {
    if (index === id) {
        array[id] = { ...array[id], ...updatedObject };
    }
});

// console.log(array);

/*********** Read Operation ***********/

// read whole data
console.log("read operation with map() method");
for (let i = 0; i < array.length; i++) {
    console.log("Object Id", array[i].id);
    console.log("Object Name", array[i].name);
    console.log(`----------------- ${array[i].id} --------------------`);
}

// second way with map() method
console.log("read operation with map() method");
array.map((value) => {
    console.log("Object Id", value.id);
    console.log("Object Name", value.name);
    console.log(`----------------- ${value.name} --------------------`);
});

// third way with reduce() method
console.log("read operation with reduce() method");
array.reduce((acc, cur) => {
    console.log("Object Id", cur.id);
    console.log("Object Name", cur.name);
    console.log(`----------------- ${cur.name} --------------------`);
    return acc;
}, []);

// *** read data through with id ***
for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
        console.log("Get Data With Id", array[i]);
    }
}

console.log("read operation with filter() method");
let a = array.filter((_, index) => index === id);
console.log(a);

console.log("read operation with map() method");
array.map((value, index) => {
    if (index === id) {
        console.log(value);
    }
});

console.log("read operation with reduce() method");
array.reduce((acc, cur, index) => {
    if (index === id) {
        console.log(cur);
    }
    return acc;
}, []);

/***  Delete Operation ***/
// -- id: id is a index number
// delete data through with splice() method
array.splice(id, 1);
console.log(array);

// delete data with filter() method
array.filter((_, index) => index === id);
console.log(array);
