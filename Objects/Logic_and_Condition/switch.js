/* 
    The switch Statement: Use the switch statement to select one of many code blocks to be executed.

    Systax:
        switch(expression) {
            case x:
                // code block
                break;
            case y:
                // code block
                break;
            default:
                // code block
        }
            ** break keyword: This will stop the execution inside the switch block.
                If we omit the break statement, the next case will be executed even if the evalution does not match the casse.
            ** default Keyword: The default keyword specifies the code to run if there is no case match.

        How switch statement work:
            * The switch expression is evaluated once.
            *  The value of the expression is compared with the values of each case.
            * If there is a match, the associated block of code is executed.
            * If there is no match, the default code block is executed.
 */

var today = new Date().getDay()
console.log(today)

switch (today){
    case 0:
        console.log('Today is Sunday')
        break;
    case 1:
        console.log('Today is Monday')
        break;
    case 2:
        console.log('Today is Tuesday')
        break;
    case 3:
        console.log('Today is Wednesday')
        break;
    case 4:
        console.log('Today is Thursday')
        break;
    case 5:
        console.log('Today is Friday')
        break;
     case 6:
            console.log('Today is Saturday')
}

/* 
    The default case does not have to be the last case in a switch block;

    If default is not the last case in the switch block, remember to end the default case with a break

*/

switch(today){
    default:
        console.log('Looking forward to the Weekend')
        break;
    case 6:
        console.log('Today is Saturday')
        break;
    case 0:
        console.log('Today is Sunday')
}

// Common Code Blocks : Sometimes we will want different switch cases to use the same code.

switch (today) {
    case 4:
    case 5:
        console.log('Comming soon weekend, just waiting')
        break;
    case 0:
    case 6:
        console.log('It is weekend')
        break;
    default:
        console.log('Looking forward to the weekend')
}

/* 
    Strict Comparision:
        switch cases use strict Comparision (===)
        The value must be of the same type to match
        A strict comparision can only be true if the operands are of the same type 
*/
var a = '0';
text = ' ';

switch (a) {
    case '0':
        // console.log('True')
        text = 'True'
        break;
    case '1':
        // console.log(`False`)
        text = 'False'
        break;
    default:
        // console.log('No value found')
        text = 'No value found'
}
console.log(text)



