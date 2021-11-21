/*  
    The conditional (ternary) operator is the only JavaScript operator that takes three operands. This operator is frequently used as a shortcut for the if statement. 

    Syntax:
        condition ? exprIfTrue : exprIfFalse
        
    condition
        An expression whose value is used as a condition.

    exprIfTrue
        An expression which is evaluated if the condition evaluates to a truthy value (one which equals or can be converted to true).

    exprIfFalse
        An expression which is executed if the condition is falsy (that is, has a value which can be converted to false).
        *possible falsy expressions are: null, NaN, 0, the empty string (""), and undefined. 
    
*/
var n = 11;

var result = n % 2 == 0 ?  ' Even Number' : 'Odd Number';
console.log(result)
