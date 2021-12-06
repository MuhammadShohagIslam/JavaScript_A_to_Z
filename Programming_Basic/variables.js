/*
    Var Let Const : Variables are container where we can be stored data(values).
        * There are 3 ways to declare a JavaScript variables:
                    Using var
                    Using let 
                    Using const
        *** A variable declared without a value will have the value undefined.
        *** If you put a number in quotes, the rest of the numbers will be treated as string, 
        and concatenated. like var p = 4 + 4 + "5" 
*/
// create a variable
var a = 5
console.log(a);

// we can create variable much like Algebra
var price1 = 5; // just like algebra, we use variable to hold values.
var price2 = 10
var total = price1 + price2; // it's variable in expression(combination of values, variables, and operator, which computes a value)
console.log(total);

/*
    *** JavaScript Identifiers ***
    All JavaScript variables must be identifies with unique names. These uniques names are called identifiers

    There are some rules for constructing names for variables (unique identifiers) are:
        * Names can contain letter(A-Z or a-z), digit(1), underscore(_) and dollar sign($)
        * Names must begin with a latter
        * Names can also begin with $ and _
        * Names are case sensitive(x and X are different variables)
        * Reserved words (like JavaScript keywords ) can not be used as names.
    JavaScript identifiers are case-sensitive
    Note that: use of  dolar sign($), it is not common in JavaScript, but 
    professional programmers often use for the main function
    in a JavaScript libraray like JQuery.
*/
// Names can contain letter(A-Z or a-z)
// var name = "Muhammad Shohag Islam";
var Name = "Muhammad Shohag Islam";
console.log(Name);

// Names can contain digit
var Name1 = "Muhammad Shohag Islam";
console.log(Name1)

// Names can contain underscore(_)
var _name = "Muhammad Shohag Islam";
var _n = "Muhammad Shohag Islam";
var _1 = "Muhammad Shohag Islam";
console.log(_name, _n, _1);

// Names can contain A dollar sign ($)
var $$$ = "Muhammad Shohag Islam";
var $ = "Muhammad Shohag Islam";
var $name = "Muhammad Shohag Islam";
console.log($name, $$$, $);

/*
    *** Declaring (Creating) JavaScript Variables ***
        Creating a variable in JavaScript is called "declaring" a variable.
        * After the declaration, the variable has no value (technically it has the value of undefined, it's called hoisting)
        *** It's a good programming practice to declare all variables at the begining of a script.
*/
var fruitName;
console.log(fruitName) // return a undefined

// to assign a value to the variable, use the equal sign
fruitName = "Olive"
console.log(fruitName) // return values which one we mantion

// to declare a variable begining of the script, it's good practice
var fruitName = "Olive";
console.log(fruitName)

/*
    *** One Statement, Many Variables ***
        *We can declare many variables in one statement
        * A declaration can span multiple lines
*/      
// Start the statement with var or let and separate the variable by comma
let person = "Muhammad Shohag Islam", age = 23, university="AGU";
console.log(person, age, university)

// with const variable keyword, impossible
// const person = "Muhammad Shohag Islam", age = 23, university="AGU";
// console.log(person, age, university) // return syntax error

// A declaration can span multiple lines
var a = 20,
b = 30,
c = 50
console.log(a, b, c);

/*
    Re-Declaring JavaScript Variables ***
        If we re-declare a JavaScript variables, it will not lose its value.
        *** in this case, it is not possible to use of let and const keyword
*/
// var fruitName = "Olive";
var fruitName1 = "Olive";
var fruitName1;
console.log(fruitName1)

// let fruitName1 = "Olive";
// let fruitName1;
// console.log(fruitName1) // return error