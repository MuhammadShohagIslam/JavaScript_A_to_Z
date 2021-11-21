/* 
    JavaScript String Search
    JavaScript methods for searching strings:
        *String.indexOf()
        *String.lastIndexOf()
        *String.startsWith()
        *String.endsWith() 
    Note that: JavaScript counts positions from zero.
    0 is the first position in a string, 1 is the second, 2 is the third ...
*/
// The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string.
let str = 'Please locate where \'locate\' occurs!';
console.log(str.indexOf('locate'));
console.log(str.indexOf('locate', 15));

// lastIndexOf() method returns the index of the last occurrence of a specified text in a string
let searchText = str.lastIndexOf('locate');
let searchText1 = str.lastIndexOf('locate', 15);
console.log(searchText + ' '+ searchText1);

// Both indexOf(), and lastIndexOf() return -1 if the text is not founnd.
console.log(str.lastIndexOf('good'));
console.log(str.indexOf('bad'));

/*
    *** The search() Method ***
        indexOf() and search() this two method are not same, beacuse
        * The search() method cannot take a second start position argument
        * The indexOf() method cannot take powerful search values(regular expression)
        
*/

// The search() method searchs a string for a specified value and returns the position of the match.

let searchText2 = str.search('locate');
// let searchText2 = str.search('locate',15);
console.log(searchText2);

/*
    The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object
        *If the regular expression does not include the g modifier (to perform a global search), the match() will return only the first in the string
    Syntax:
        string.match(regexp)
*/
let searchText3 = str.match(/cate/gi);
console.log(searchText3);

/*
    The include() method returns true if a string contains a specified value
    Syntax:
        string.includes(searchValue, start)
        * start => Optional, default 0. Position to start the search
*/
let searchText4 = str.includes('locate')
let searchText5 = str.includes('good');
let searchText6 = str.includes('locate', 15)
console.log(searchText4+" "+ searchText5 + " "+ searchText6);

/*
    The startsWith() method returns true if a string begins with a specified value, otherwise false.
    Syntax:
        string.startsWith(searchValue, start)
        * start => Optional. Default 0. Position to start the search.
    Note that: The startsWith() method is case sensitive
*/
let searchText7 = str.startsWith('Please');
let searchText8 = str.startsWith('locate',15);
console.log(searchText7+ ' '+ searchText8);
console.log(str);

/*
    The endsWith() method returns true if a string ends with a specified value,
    otherwise false.
    Syntax:
        string.endsWith(searchValue, length)
        * length => Optional. The length to search.
*/
let searchText9 = str.endsWith('occurs!');
// let searchText9 = str.endsWith('occurs');
let searchText10 = str.endsWith('locate', 13);
console.log(searchText9 + ' '+ searchText10);


















