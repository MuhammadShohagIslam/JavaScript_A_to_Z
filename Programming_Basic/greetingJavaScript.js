/*
 ***JavaScript is the world's most popular programming laguage
 ***JavaScript is the programming language of the web
 ***JavaScript is easy to learn
 */

/*
    JavaScript Engine: JavaScript Engine is an another program which can read, understand and translate JavaScript code.

    There are lot of JavaScript Engine:
        * V8 (Google Chrome) = Most Popular
        * Spider Monkey (Mozilla FireFox)
        * Chakra (Microsoft, Internet Explorer)
        * Javascript Core (Apple Safari Browse)
        
    How To Work JavaScript:

        1. Source Code -> 
        2. Parser = Source Code Line by Line have to read through parser to create  Data Structure -> 
        3. Abstract Window Tree =(Tree like Data Structure) When JavaScript Engine can do perfectly parser the code, it is created a data structure like Abstract Window Tree ->
        4. Machine Code = JavaScript Engine has a compiler which is transfered Abstract Window Tree to Machine Code
        5. Execution = After Machine code to Execution.
 
 */
/*
    *** JavaScript Compiled or Interpreted ***
        Interpreted : Interpreted is a one kind of system when we will run a code or write, it can instantly run
        that is why no need to extra step. When we need a code for execution, it is transfered to machine code.
        It is good system but it is slow process.

        Compiled: Compiled is a one kind of system which can not run code instantly. So it's work this way, firstly, it is build up, then it is generated extra file (like machine code), after machine code, this code is executed. 

        JavaScript is a compiled


*/

/* 
    *** What is programming?
        A:Programming is a set of instruction, which our computer can read,
        underdatnd and production and output.

*/

// IF you want to show any ouput of JavaScript, you have to write (console.log(Your Text))
// Anything Wrapped with Quote Called String like ('',"",``)
console.log("Are You Fine?");
console.log(45);
console.log("There has any number in this sentence " + 9);
// When you want to excute string and number together, it haven been become a string
// String + Number = String
console.log(typeof ("There has any number in this sentence " + 9));
console.log(45 + 45);
