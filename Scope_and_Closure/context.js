/*
    Context: Context is a object. Context are created when needed.
        There are two pharse to create context
            1. Creational of pharse 
            2. Executional of Context
        
        ** Creational Pharse: 
            (
                It is working, finding them out, 
                where variable declaration,
                Scope chain maintain,
                where function declaration,
                then to make a relation into scope chain
            )
            *** When JavaScript Engine sees a function, to create immediately a reference of this function like unique number each function
                Store Function = to remain function Name and the unique number or identity of this funnction or as a reference

                Variable Store = variable declaration (value undefined) not assigning value to variable.(Like var x;)

        **  Execution Pharse: The Execution Phrase, all code are executed 

        
        * When JavaScript executed any code, this execution depend on A Context.
        ** A function or program automatically will run when this is remain a Global Context
        When a code reamin into function, it does not run automatically.this is why we have to invoke this funnction for a execution. beacuse it is created a new scope or context.

*/
/*   
        **** How to execute this below code ****

            Execution of C Function Context
            Execution of D Function Context
            Execution of B Function Contex
            Execution of A Function Context
            Execution of Global Context


*/
function a() {
  b();
  console.log("I am Function A");
}

function b() {
  d();
  console.log("I am Function B");
}

function c() {
  console.log("I am Function C");
}

function d() {
  c();
  console.log("I am Function D");
}

var x = 100;
a();
console.log("I am Global");
