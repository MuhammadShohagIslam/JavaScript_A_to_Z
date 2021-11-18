/* 
    String methods and Properties: Primitive values can not have properties or methods beacuse they are not objects.
    But
    With JavaScript, methods and properties are also available to primitive values, beacuse JavaScript treats primitive values as objects when executing methods and properties. 

    Remember: JavaScript Count Position from Zero. First Position is 0

    * All string methods return a new string. They do not modify the orginal string. 
    * Strings are immutable: String cannot be changed, only replaced.

*/
/***** Extracting String Parts ****
    There are 3 methods for extracting a part of a string:
        * slice(start, end)
        * substring(start, end)
        * substr(start, length)
*/

/*
    slice() extracts a part of a string and returns the extracted part in a new string, 
   it takes 2 parameters: the start position, and the end position (end not included).
*/

let str = 'Olive, Apple, Banana';
let part = str.slice(0,10);
console.log(part);

// counting from the end
let part1 = str.slice(-20);
console.log(part1);

/*
    substring() is similar to slice()
    The difference is that substring() cannot accept negative indexes.
*/
let part2 = str.substring(0,12);
//let part2 = str.substring(-12);
console.log(part2);

/*
    substr() is similiar to slice()
    The difference is that the second parameter specifies the length of the extracted part.
*/
let part3 = str.substr(0,20);
console.log(part3);
// console.log(str.length);

// If you somit the second parameter, substr() will slice out the rest of the string.
let part4 = str.substr(-20);
console.log(part4);

/*
    *** Replacing String Content ***
    The replace() method replaces a specified value with another value in a string
    The replace() method does not change the string it is called on. It returns a new string

*/
// By default, the replace() methods replaces only the first match
let text = 'Let visit Chrome Browser';
let newText = text.replace('Chrome', 'W3School');
console.log(newText);

// By default, the replace() method is case senitive, Writing CHROME (With upper case) will not working
let newText1 = text.replace('CHROME', 'W3School');
console.log(newText1); // not working

// To replace case insensitive, use a regular expression with /i flag
//regular expressions are written without quotes.
let newText2 = text.replace('/CHROME/i', 'W3School');
console.log(newText2);

// To replace all matches, use a regular expression with a /g flag(global match)
let newText3 = text.replace('/CHROME/g', 'W3School');
console.log(newText3);

/*
    **** Converting to Upper and Lower Case ****
    Methods:
        toUpperCase()
        toLowerCase()

*/
// A string is converted to upper case with toUpperCase()
let newText5 = text.toUpperCase()
console.log(newText5);

// A string is converted to lower case toLowerCase()
let newText6 = text.toLowerCase();
console.log(newText6);

/*
    *** The concat() Method ***
*/
// concat() joins two or more strings
let text1 = 'Try to keep positive mind';
let text2 = 'Try to avoid negative mind';
console.log(text1.concat(' ',text2));

// The trim() method remove whtespace from both sides of a string
let text3 = "    Honesty   ";
console.log(text3.trim());

/*
    *** JavaScript String Padding ***
    ECMAScript 2017 added two tring methods: padStart and padEnd to support padding at the beginning and at the end of a string
*/
// padding at the begininig of a string
let text4 = "Honesty";
let startPadding = text4.padStart(4,0)
console.log(startPadding);

// padding at the end of a string
let endPadding = text4.padEnd(4,'*');
console.log(endPadding);

/*
    ** Extracting String Characters
    There are 3 methods for extracting string characters:
        charAt(position)
        charCodeAt(position)
        Property access [ ]
*/

// The charAt() method returns the character at a specified index (position) in a string.
let text5 = "Honesty";
let char = text5.charAt(5);
console.log(char);

// The charCodeAt() method retruns the unicode of the character at a specified index in a string. 
// The method return a UTF-16 code(an integer between 0 and 65535)

let char1 = text5.charCodeAt(5);
console.log(char1);

// ECMAScript 5 (2009) allows property access [ ] on strings
let char2 = text5[4];
console.log(char2);

/*
    ** Converting a String to an Array **
*/

// A string can be converted to an array with the split() method
let text6 = str;
let splitText = text6.split(',');
console.log(splitText);

// If the sperator is ommited, the returned array will contain the whole string in index[0]
let splitText1 = text6.split();
console.log(splitText1);

















