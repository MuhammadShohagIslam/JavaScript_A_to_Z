/*
    Lexical Scope: Lexical scope defines that in a nested group of functions, 
    the inner function have access to the variable and other resources of their parent scope.

    * This means that child's functions are lexically bound 
        to the execution context of their parents.
    ** But it does not work backward to its parents, meaning that 
        the defining child variable can not access by its parents. look below example

*/

function grandMother() {
  var name = "A";

  function parent() {
    console.log(name); // name is accessible beacuse it comes from parent
    console.log(like); // like variable is not accessible beacuse it comes from child, not allow

    function child() {
      var like = "C";
      console.log(like);
      console.log(name); // name variable is accessible beacuse it come from parent
    }
    console.log(like); // / like variable is not accessible beacuse it is only works inside of the child function.
    child();
  }
  parent();
}
