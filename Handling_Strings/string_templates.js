/*
    String Templates: Template Literals use back-ticks (``)
    rather than the quotes ("") to define a string
*/
let text = `It's often called Olive Oil`;
console.log(text);

// With template literals, you can use both single and double quotes inside a string
let text1 = `It's often called "Olive Oil"`;
console.log(text1);

//Template literals allows multiline strings
let text2 = `The quick
brown fox
jumps over
the lazy dog`;
console.log(text2);

//Template literals allow variables in strings
let firstName = "Muhammad Shohag";
let lastName = "Islam";
let text3 = `My name is ${firstName} ${lastName}`;
console.log(text3);

// Template literals allow expressions in strings
let price = 3.5;
let count = 20.33;
let total = `One month water bill nearly ${price * count}`;
console.log(total);

