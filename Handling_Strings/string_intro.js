/* 
    String: JavaScript strings are for storing and manipulating text
    Or A JavaScript strings is zero or more characters written inside quotes.

        * As a quotes, we can use single or double Or
        * We can use Template Literals/Template Strings/String Templates/Back-Tic Syntax

*/
//  We can use single or double quotes
let name1 = 'Muhammad Shohag Islam';
let name2 = "Muhammad Shohag Islam";
console.log(name1, name2);

// Back-Tics Syntax/Template String
let name3 = `Muhummad Shohag Islam`;
console.log(name3);

// We can use quotes inside a string, as long as they don't match the quotes surrounding the string.
let answer1 = 'It"s alright';
let answer2 = "It's alright";
let answer3 = 'He is gone "outside"';
console.log(answer1+' '+answer2 +' '+answer3);

/*  String Length */
// To find the length of a string, use the built-in length property
let answer4 = answer3.length;
console.log(answer4)

/* 
    Escape Character: It is one kind of character which use in JavaScript the solution to avoid JavaScript misunderstand with into string. 

    The backlash (\) escape charcter truns special characters into string characters.
*/
// The sequence \" inserts a double quote in a string
let text =  'Its  \"alright \"';
console.log(text);

// The sequence \' inserts a single quote in a string
let texts = 'It\'s alright';
console.log(texts);

// The sequence \\ inserts a backlash in a string
let text1 = "It's \\ alright";
console.log(text1);

// The sequence \\ inserts a new line in a string
let text2 = "It's \nalright";
console.log(text2);

// The sequence \\ inserts a horizontal tabulator in a string
let text3 = "It's \t alright";
console.log(text3);

/*
     Breaking Long Code Lines: For best readability, programmers often like to avoid code lines longer than 80 characters.

     * If a JavaScript statement does not fir one line,the best place to break it is after an operator.
    Or
    * A safer way to break up a string, is to use string addition
    Example: 
        document.getElementById("any_id_name").innerHTML =
        "It\'s alright";;

        document.getElementById("any_id_name").innerHTML = "It\'s"; +
        "alright";
    Note That: The \ method is not the preferred method. It might not have universal support.vSome browsers do not allow spaces behind the \ character.
    Example: 
        document.getElementById("demo").innerHTML = "It is \
        alright";
*/

/* 
    ------------ JavaScript String as Objects -----------------
    *Normally, JavaScript strings are primitive values, created from literals.
    *Do not create Strings objects.
    *The new keyword complicates the code and slows down execution speed.
    *String objects can produce unexpected results

*/
// Normally, JavaScript strings are primitive values, created from literals
let x = "Honesty";
console.log(x);

// Strings can also be defined as objects with the keyword new
let y = new String('Honesty');
console.log(y);

// When using the == operator, x and y are equal
console.log(x == y);

// When using the === operator, x and y are not equal
console.log(x === y);

/* Note that: the difference between (x==y) and (x===y)  */

// Comparing two JavaScript objects always returns false
let d = new String("Honesty");
let e = new String('Honesty');
console.log(d == e);
console.log(d === e);
