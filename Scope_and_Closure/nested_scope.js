/*
    Nested Scope: When another scope works inside a scope, it's called Nested Scope.

*/
{
  // it is a Global Scope
  var a = 10;

  function abc() { // Another Scope
    console.log(a);

    function abcd() { // Another More Scope like Nested Scope
      var b = 20;
      console.log(b);
      console.log(a); // a is a global scope
    }
    console.log(b); // b is not accessible, b is a function scope block, it's only works inside abcd function scope
    abcd();
  }
  abc();
}

/*
 *** Create a Scope Chain***
 */
var x = 17;

function A() {
    var b = 10;
    function B() {
      var c = 23;
      console.log(c);
    }
    function C() {
      var d = 30;
      console.log(d);
    }
    console.log(b);
    D(b);
    B();
    C();
}
function D(n) {
  return n + a;
}

// A Function of Scope => Variable( a, b), Function(B(), C(), D())
// B Function of Scope => Variable(a, b, c), Function(B(), C(), D())
// C Function of Scope => Variable(a, b, d), Function(B(),C(), D())
// D Function of Scope => Variable(a, n), Function(A())
