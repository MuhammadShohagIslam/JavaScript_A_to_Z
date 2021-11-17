/* 

    The for loop: loops through a block of code a number of time

    Systax:
        for (statement 1; statement 2; statement 3) {
            // code block to be executed
        }
            *Statement 1 is executed one time before the execution of the code block, it is initial value which is indicated as a staring value of this loop;

            *Statement 2 is a condition for executing the code block

            *Statement 3 is a increement or dicreement where is executed very time after the code block has been executed. 
        
*/

for (let i = 1; i <= 10; i++) {
  console.log("My Number is " + i);
}

// We can use many initial values in statement 1 (Separated by comma)
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i, len, text;
for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + " ";
}
console.log(text);

// for (; ;Statement 3) can do anything like negative increment (i--), positive increment (i++ ), or anything else.

let a = 0;
let leng = cars.length;
let texts = "";

for (; a < leng; ) {
  texts += cars[a] + " ";
  a++;
}
console.log(texts);

// Loop Scope

// Using var in a loop

var b = 5;
console.log(b);
for (var b = 0; b < 10; b++) {
  console.log(b);
}
console.log(b); // return 10

// Note that: using var keyword , the variable declared in the loop redeclares the variable outside the loop. we can access outside the block

// Using let in a loop:
let c = 5;

for (let c = 0; c < 10; c++) {
  console.log(c);
}
console.log(c); // return 5

// Note that: using let keyword , the variable declared in the loop does not redeclares the variable outside the loop. we can not access outside the block, it's visible within the loop.

// Infinity loop using for loop

for (;;) {
  let randNumber = Math.floor(Math.random() * 10) + 1;
  if (randNumber == 9) {
    console.log(randNumber + " is my Random Number");
    break;
  } else {
    console.log(randNumber + " is not my Random Number");
  }
}

let e = 0;
const carName = ["A", "B", "C", "D"];
let result = "";
for (; carName[e]; e++) {
  result += carName[e] + " ";
}
console.log(result);
