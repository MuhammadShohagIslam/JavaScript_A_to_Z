/*
    Array: An array is a special variable, which can hold more than one value. Array is mutable
    Syntax: 
        const array_name = [item1, item2, item3, ... ];
    
        * It is a common practice to decclare arrays with the const keyword.
        Note: For simplicity, readability and execution speed, use the array literal method.

*/
const foods = ['Olive','Banana','Apple'];
console.log(foods);

// We can also create an array, and then provide the element
const cars = [];
cars[0] = "A";
cars[1] = "B";
cars[2] = "C";
console.log(cars); 

// Using the JavaScript Keyword new, we can create a array
const foods1 = new Array('Olive','Banana','Apple');
console.log(foods1);

//We access an array element by referring to the index number
const accessFoods = foods[0];
console.log(accessFoods);

//Changing an Array Element
foods[1] = "Dates";
console.log(foods);

// The length property of an array returns the length of a array(The number of array element)
// The length property is always one more than the highest array index.
const foods2 = foods;
console.log(foods2.length);

// Accessing the last array element
let foods3 = foods2[foods2.length - 1];
console.log(foods3);

// Looping array element
let fLen = foods2.length
//let text = '<ul>'
// for (let i = 0; i<fLen; i++) {
//     text += '<li>'+foods2[i]+'</li>';
// }
// text  +=  '</ul>';
// console.log(text);
let text = '';
for (let i = 0; i < fLen; i++) {
    text += foods2[i]+' ';
}
console.log(text);

// Adding array element, the easiest way to add a new element to an array is using the push() method.
const foods4 = foods;
foods4.push('Orange');
console.log(foods4);

// New element can also be added to an array using the length property.
foods4[foods4.length] = 'Lemon';
console.log(foods4);

// Adding element with high indexes can create undifined holes in an array.
foods4[6] = 'Banana';
console.log(foods4);

// The typeof operator returns object beacuse a JavaScript array is an object.
let type =  typeof foods4;
console.log(type);
// Anothe way ywe can check our type of the array
let type1 = Array.isArray(foods4);
console.log(type1); // Return True beacuse it is Array.

// The instanceof operator returns true if an object is created by a given constructor.
console.log(foods4 instanceof Array)



