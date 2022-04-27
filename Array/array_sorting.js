/*
    *********JavaScript Sorting Arrays***********
*/
// The sort() method sort an array alphabetically
const fruits = ['Olive', 'Apple','Banana','Mango'];
console.log(fruits.sort());

// The reverse() method reverses the elements in a array
const reverseElement = fruits.reverse();
console.log(reverseElement);

/*
    ***Numeric Sorting***
        by default, the sort() function sorts value as a string.
        when sorting numbers, the sort() method will produce incorrect result.
        But we can fix this by using a compare function

*/
const points = [10,2,4,6,77,88];
const sortNumeric = points.sort(function (a,b) {
    return a-b
});
console.log(sortNumeric); // Sorting Ascending Order

// To sort descending Order
const sortNumeric1 = points.sort((a,b) => b-a);
console.log(sortNumeric1) // Sorting Descending order

// To sort an array in random order
const sortNumeric2 = points.sort((a,b) =>  .5 - Math.random());
console.log(sortNumeric2);

// array.sort() method is not accurate, it will favour some number over the others.
// The Fisher Yates Method
for ( let i = points.length - 1; i > 0; i-- ) {
    let j = Math.floor(Math.random() * i);
    let k = points[i]
    points[i] = points[j]
    points[j] = k
}
console.log(points)

// To find max value from array use Math.max.apply()
const maxValue = Math.max.apply(null,points);
//const maxValue1 = Math.max(1,2,8);
console.log(maxValue);

// To find min value from an array use Math.min.apply()
const minValue = Math.min.apply(null, points);
console.log(minValue);

// Sorting object
const fruits4 = [
    {type : 'a', year : 2022},
    {type : 'b', year : 2018},
    {type : 'c', year : 2020}
];
const sortObject = fruits4.sort((a,b) => a.year - b.year);
console.log(sortObject); // sorting ascending order

const sortObject1 = fruits4.sort((a,b) => b.year - a.year);
console.log(sortObject1); // sorting descending order



