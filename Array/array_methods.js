// The JavaScript method toStrings() converts an array to a string of (Comma separated) array values.
const fruits = ['Olive', 'Apple', 'Orange'];
console.log(fruits.toString());

// The join() method also joins all array element into a string.
// It  behaves just like toString(), but you specified the separator
console.log(fruits.join(' - '));

/*
    *** Popping And Pushing***
    *Popping items out of an array.
    *Pushing items into an array.
*/
// The pop() method removes the last element form an array.
const removeLastItem = fruits.pop();
console.log(removeLastItem);
console.log(fruits)

// The push() method adds a new element to an array(at the end);
const addNewElement = fruits.push('Orange');
console.log(addNewElement);// returns new array length
console.log(fruits);

// The shift() method removes the first array element and shifts all other element to a lower index.
const removeFirstItem = fruits.shift();
console.log(removeFirstItem); // returns the value which was shifted out
console.log(fruits);

// The unshift() method adds a new element to an array(at the beginning), and unshifted older element.
const addNewElement1 = fruits.unshift('Olive');
console.log(addNewElement1);// returns the new array length
console.log(fruits);

// The splice() method can use to add or delete items to an array
const addNewElement3 = fruits.splice(1,0,'Mango','Lemon');
console.log(addNewElement3);
console.log(fruits);

// We can use splice() method to remove element to an array
const removeElement = fruits.splice(2,2);
console.log(removeElement);
console.log(fruits);

// We can remove element to an array as well as add element with replacement
const replaceElement = fruits.splice(2,1,'Lemon','Apple');
console.log(replaceElement);
console.log(fruits);

// We can add more array with concat() methods
const fruit3 = new Array('Orage');
const merginArray = fruits.concat(fruit3);
console.log(merginArray);

/*
    The slice() method slice out a piece of an array into a new array.
    it is create new array. It is does not remove any array element from the source array.
*/
// const slicingArray = fruits.slice(2)
// console.log(slicingArray);
// console.log(fruits);

const slicingArray = fruits.slice(1,4);
console.log(slicingArray);
console.log(fruits);

// Through toString() methods, we can convert array to string automatic way.
const automaticArrayToString = fruits.toString()
console.log(automaticArrayToString);







