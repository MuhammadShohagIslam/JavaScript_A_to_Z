/* 
    The else if Statement: Use the else if statement to specify a new condition if the first condition is false.

    Syntax: 
        if (condition) {
            // block of code to be executed if the condition is true.
        }else if {
            // block of code to be executed if the condition 1 is false and condition 2 is true.
        }else {
            // block of code to be executed if the condition 1 is false and condition 2 is false.
        }
*/

var a = 10;
var b = 20;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else if (a < b) {
  console.log(`${b} is greater than ${a}`);
} else {
  console.log(`${a} is same as like ${b}`);
}

var a = 11;

if (a == 0) {
  console.log(`${a} is Zero`);
} else if (a % 2 == 0) {
  console.log(`${a} is Even Number`);
} else {
  console.log(`${a} is Odd Number`);
}
