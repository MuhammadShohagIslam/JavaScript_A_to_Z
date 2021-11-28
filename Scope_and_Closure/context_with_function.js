/*
    *** Context With Function ***

        Creational Phrase of Function:
            Store to memory = function name + reference(unique name or identity)

        Example below code:
            Creational Phrase
                abc = ref
            Executional Phrase
                are executed as a references.

*/
abc(); // return value,  not problem

function abc() {
  console.log("I am ABC Function");
}

abc(); // return value

/*
    *** Function Declaration vs Function Expression ***
        // Creational Phase:
            declarationFunction = ref
            expressionFunction = undefined
        // Execution Phase:
            all code are executed But after invoking expressionFunction return undefined because we invoke function before function
*/
declarationFunction();

function declarationFunction() {
  console.log("I am a Declaration Function");
}

expressionFunction(); // return undefined

function expressionFunction() {
  console.log("I am a Expression Function");
}
// expressionFunction // return value
