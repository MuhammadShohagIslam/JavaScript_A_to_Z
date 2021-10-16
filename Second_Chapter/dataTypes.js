/*
    Data Type: the data type of a value or variable in some context is an attribute that tells what kind of data that value can have
    JavaScript variables can hold different data types: primitive and object type data type
    Primitive Data Type are Defined by JavaScript: Number, Boolean, Null, Undefined, string
    Object Types are User Defined Data Type: Array, object, function
*/

// ********NUMBER*******//
/*
    *JavaScript has only one type of numbers.Number can be written with or without decimals
    *Extra large or extra small numbers can be written with scientific (exponent) notation
    *Unlike other language, JavaScript does not define different types of numbers, like integers, short, long, foating-point etc
    *JavaScript numbers are always stored as double precision floating point numbers
    *This format stores numbers in 64bits
    *JavaScript interpreter works from left to right
    *NaN is a JavaScript reserved word indicating that a number is not a legal number


*/

var n = 1451
var f = 3.15

var nn = 24.5
// if you want to coverte float number to integer, you use (Number.parseFlaot())

var an = Number.parseInt(nn)
console.log(nn)
console.log(an)
// if you want to coverte to integer to float number, you use (Number.parseInt())
console.log(Number.parseFloat(nn))
//The MAX_VALUE property returns the largest number possible in JavaScript
console.log(Number.MAX_VALUE)
//Number. MIN_VALUE is the smallest positive number (not the most negative number)
console.log(Number.MIN_VALUE)

// NaN: Not a Number--> NaN is a JavaScript reserved word indicating that a number is not a legal number.
console.log(100/"f")

// Infinity --> is the value JavaScript will return if you calculate a number outside the largest possible number
console.log(1/0)

//********* String **************//

/*
    *Anything Wrapped Between Quotes is Called String
    *JavaScript string are used for stroing and manipulating text.
    *A JavaScript string is zero or more characters written inside quotes.
    *It can be Double quotes or single quotes

*/

// You can use single quotes
var str = 'String'
// You can use double quotes
var str2 = "String"
// You can use backtick character
var str3 = `String`

// You can generate String using by String()
var str4 = String("adfhsf")
var str5 = String(156)
var str6 = String(3.1416)

console.log(str4,str5, str6)


//********* Boolean **************//

/*
    *If the answer always be either true or false then you can it Boolean
    *Boolean can only have two values: true or false
    *We have to think everything straight when it comes to solve problem using programming language
    *Booelan are often used in conditional testing
*/
var b1 = true
var b2 = false

// You can construct Boolean
var b3 = Boolean(true)
var b4 = Boolean(false)
console.log(b3, b4)

//********* Undefined / Null **************//

/*
    *In JavaScript, a varible without a vlaue, has the value undefined. The type is also undefined.
    *Undenfined is a property of the global objects.
    *The value of null represents the intentional absence of any object value
    *The value null is written with a literal: null.
    *Null is a special type of Usedd as a Absence of an object
    *A variable that has not been assigned a value is od type undefined
*/

let car;
console.log(car) // will be excuted a undefined

/* 
    Null specialy use of object, for example, an object is about to arrive, but initial state,
    it is not comming, future, you replace this null by pusing value through server 
*/ 
const xyz = null
console.log(xyz) // will be excuted a null






a = 3
b = ""
while (a != Infinity){
    a = a*a
    b=b+a+'</br>'
}
console.log(b)


//===== HexaDecimal and Octal Number ====//

// In order to Hexadecimal, you have to put firstly 0x

var hex = 0xff
console.log(hex)

var oct = 0756
console.log(oct)
