/*
    Break statement: The break statement "Jumps out" of a loop like jump out of a switch() statement;
 */

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  } else {
    console.log(i);
  }
}

let i = 0;
let n = 10;
let result = "";

while (i < n) {
  if (i == 6) {
    break;
  } else {
    result += i;
  }
  i++;
}
console.log(result);
