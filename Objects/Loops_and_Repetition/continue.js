/* 
    The continue Statement: The continue statement breaks one iteration (in the loop), if a specified condition occurs and contitnue with the next iteration in the loop.

    This statement work look like as a  'skip' 

*/
// for loop
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    continue;
  } else {
    console.log(i);
  }
}

// while loop
let i = 0;
let n = 10;

while (i < n) {
  i++;
  if (i == 5) {
    continue;
  } else {
    console.log(i);
  }
}
