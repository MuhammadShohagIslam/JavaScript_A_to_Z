/*
    reduceRight() method: the reduceRight() method runs a function on each array element to produce a single value.
        * the reduceRight() methods work right-to-left in the array.
        * the reduceRight method does not reduce the orginal array.

*/
// create a reduceRight() build-in-method in JavaScript
const arr = [1, 2, 3, 4, 5, 6];

const sum = arr.reduceRight(function (previousValue, currentValue) {
  return previousValue + currentValue;
});
console.log(sum);

const max = arr.reduceRight(function (previousValue, currentValue) {
  return Math.max(previousValue, currentValue);
});
console.log(max);

const min = arr.reduceRight(function (previousValue, currentValue) {
  return Math.min(previousValue, currentValue);
});
console.log(min);

// manually create reduceRight() method
const arr1 = [1, 3, 4, 5, 7, 8, 10];

function reduceRightFun(arr, cb, acc) {
  for (let i = arr.length - 2; i >= 0; i--) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}
// const x = reduceRightFun(arr1);
// console.log(x)

const sum1 = reduceRightFun(
  arr1,
  function (pv, cv) {
    return pv + cv;
  },
  arr1[arr1.length - 1]
);
console.log(sum1);

const max1 = reduceRightFun(
  arr1,
  function (pv, cv) {
    return Math.max(pv, cv);
  },
  arr1[arr1.length - 1]
);
console.log(max1);

const min1 = reduceRightFun(
  arr1,
  function (pv, cv) {
    return Math.min(pv, cv);
  },
  arr1[arr1.length - 1]
);
console.log(min1);
