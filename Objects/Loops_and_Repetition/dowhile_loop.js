/* 
    The Do While Loop: The do while loop is a varient of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

    Syntax: 
        do {

        }
        while (condition)

    Note that: The do while loop will always be executed at least once, even if the condition is false, beacuse the code block is executed before the condition is tested. 

    Do not forget to increase the variable used in the condition, otherswise the loop will never end!

    if we want to execute our code before checking condition, it is the best loop.

*/
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

// The do while loop will always be executed at least once, even if the condition is false,
do {
  console.log("It is a do while loop");
} while (false);
