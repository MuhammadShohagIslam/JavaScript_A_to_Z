/*
    reduce() method: The reduce() method runns a function on each array element to produce a single value.
    * the reduce() method works from left-to-right in the array.
    *the reduce() method does not reduce the orginal array

*/
const arr = [1, 3, 4, 5, 6, 7, 8];

let sum = arr.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
});
console.log(sum);

let max = arr.reduce(function (previousValue, currentValue) {
  return Math.max(previousValue, currentValue);
});
console.log(max);

let min = arr.reduce(function (previousValue, currentValue) {
  return Math.min(previousValue, currentValue);
});
console.log(min);

// create manually filter function
const arr1 = [1, 3, 5, 7, 8, 10];

function reduceFunction(arr, cb, acc) {
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]); // call back function
  }
  return acc;
}

let sum1 = reduceFunction(
  arr1,
  function (a, b) {
    return a + b;
  },
  arr1[0]
);
console.log(sum1);

let max1 = reduceFunction(
  arr1,
  function (a, b) {
    return Math.max(a, b);
  },
  arr1[0]
);
console.log(max1);

let min1 = reduceFunction(
  arr1,
  function (a, b) {
    return Math.min(a, b);
  },
  arr1[0]
);
console.log(min1);
