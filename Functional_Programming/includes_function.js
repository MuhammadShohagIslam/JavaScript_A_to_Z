/*
    includes() method: The includes() method allows us to check if element is present in array (including NaN, unlike indexOf())

*/
// create includes() method
const fruits = ["Olive", "Banana", "Orange", "Apple", "Mango", NaN];
const x = fruits.includes("Olive");
console.log(x);

// create includes() method manually
function includesFun(arr, input) {
  let output = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == input) {
      output = true;
    }
  }
  return output;
}

const y = includesFun(fruits, "Orange");
console.log(y);
