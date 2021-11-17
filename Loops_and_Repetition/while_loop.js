/* 
    The while Loop: Loops can execute a block of code as long as a specified condition is true.

    Syntax : 
        while (condition) {
            // code block to be executed
            increement or dicreement or anything else
        }

    Note that: If we forgot to increase the variable used in the condition, the loop will never end, This will crash our browser. 

*/

// infinity while loop
var running = true;

while (running) {
  let randNumber = Math.floor(Math.random() * 10) + 1;
  if (randNumber == 9) {
    console.log(randNumber + " is my prefer random number");
    running = false;
  } else {
    console.log(randNumber + " is not my random number");
  }
}

// infinity while loop
while (true) {
  let randNumber = Math.floor(Math.random() * 10) + 1;
  if (randNumber == 9) {
    console.log(randNumber + " is my prefer random number");
    break;
  } else {
    console.log(randNumber + " is not my random number");
  }
}

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

let a = 0;
const cars = ["A", "B", "C", "D"];
let text = "";

while (cars[a]) {
  text += cars[a];
  a++;
}
console.log(text);
