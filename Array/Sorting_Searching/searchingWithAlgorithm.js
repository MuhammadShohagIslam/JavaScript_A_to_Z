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
