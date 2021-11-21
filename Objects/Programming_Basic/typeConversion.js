/*
    * JavaScript Type Conversion: Type Conversion means transfer of data from one data type to another
    
*/

// Converting String to Numbers
var a = "3.5"
console.log(Number(a))
console.log(Number.parseInt(a))
// Empty string convert to 0
console.log(Number(""))
// Anything else converts to NaN ( Not a Number )
console.log(Number("99 99"))
console.log(Number("Shohag"))

// Converting Numbers to String
var a = 3.5
console.log(a.toString())

// Infinity Number to String
console.log(String(Infinity))

// Infinity Number to Boolean
console.log(Boolean(Infinity))

/* 
    Which Value exactly JavaScript Compailer think, it is false vlaue, but directly it is not flase value
    That is why, it is called Falsy Values
    List of Falsy Value
     ""
     0
     null 
     undefined 
     NaN

     Without above list, every other value it is called Truty Value
 
 */
console.log(Boolean(''))
console.log(Boolean(0))
console.log(Boolean(234))
console.log(Boolean("sdfaufjs"))
console.log(Boolean(NaN))
console.log(Boolean(null))
console.log(Boolean(undefined))

var x = true
console.log(x)

// Boolean to String Conversion
console.log(x.toString())



