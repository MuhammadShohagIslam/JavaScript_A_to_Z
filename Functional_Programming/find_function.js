/*
    find() method: The find() method returns the value of the first array element that pass a test function

*/
// create find() method JavaScript build in function
const arr = [1, 2, 4, 5, 6, 7, 8];
const x = arr.find(function (value) {
  return value > 2;
});
console.log(x);

// create findIndex() method JavaScript build in function
const y = arr.findIndex(function (value) {
  return value > 2;
});
console.log(y);

// manually create find() method
function findFunction(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return arr[i];
    }
  }
}
const a = findFunction(arr, function (value, index) {
  return value == 2;
});
console.log(a);

// manually create findIndex() method
function findFunction(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return i;
    }
  }
}
const b = findFunction(arr, function (value) {
  return value == 8;
});
console.log(b);
