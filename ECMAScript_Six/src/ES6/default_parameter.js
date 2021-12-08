/*
    Default Parameter: Default Parameter is a one kind of parameter, which allow to pass value default way
    , it mean if we do not pass parameter value, it take this value which one we set it.

    Note that: we set default value, do not put null inside the arguments value.

*/
function myFunction(x, y = 40) {
  return x + y;
}
console.log(myFunction(10));

// do try this way, otherwise we get one kind of error
function myFunction1(x, y = 40) {
  console.log(y);
  return x * y;
}
console.log(myFunction1(10, null)); // not use null
