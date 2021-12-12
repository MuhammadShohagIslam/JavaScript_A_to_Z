/*
    Error_Handiling: Error handling is a one kind of process through which we can be comprised of anticipation,
    detection and resolution of application errors, programming error or communication errors.

    *** Different way we get Errors ***
        => Error can be coding error which made by programmer
        => Due to wrong input
        => unforesseable things.

*/
// easiest way to do Error Handling like if-else statement, but it is not best way

// let basicErrorH = () => {
//   let message = document.getElementById("errorMessage");
//   message.innerHTML = "";
//   let inputValue = document.getElementById("demo").value;
//   // 'throw' statement lets we create custome errors.
//   if (inputValue == "") {
//     message.innerHTML = "Empty";
//     throw new Error("Empty");
//   } else if (isNaN(inputValue)) {
//     message.innerHTML = "Not a Number";
//     throw new Error("Not a Number");
//   } else if (inputValue < 5) {
//     message.innerHTML = "Too Low";
//     throw new Error("Too Low");
//   } else if (inputValue > 10) {
//     message.innerHTML = "To High";
//     throw new Error("To High");
//   }else{
//     message.innerHTML = inputValue;
//   }
// };

/*
  *** Try to Catch ***
    => The try statement let we test a block of code for error
    => The catch statement let we handle the error

    Note That: If we use throw together with try and catch, we can control programe flow and generate custome error message
*/
// let basicErrorH = ()=>{
//   let message = document.getElementById("errorMessage");
//   message.innerHTML = "";
//   let inputValue = document.getElementById("demo").value;

//   try{
//     if (inputValue == ""){
//       throw new Error("Empty");
//     }else if (isNaN(inputValue)){
//       throw new Error("Not a Number");
//     }else if (inputValue < 5){
//       throw new Error("To Low");
//     }else if (inputValue > 10){
//       throw new Error("Too High");
//     }else{
//       message.innerHTML = inputValue;
//     }
//   }catch(error){
//     message.innerHTML = error;
//     console.log(error);
//   }
// }

/*
    *** The finally Statement ***
      The finally statement lets we execute code, after try and catch, regardless of the result

      *When we want to use
          => Whether the try block works or not, either catch block
          works or not, i have to do the specified work like clean up, axios call etc ...
*/

// let basicErrorH = () => {
//   let message = document.getElementById("errorMessage");
//   message.innerHTML = "";
//   let finallyValue = document.getElementById("finallyMessage");
//   finallyValue.innerHTML = "";
//   let inputValue = document.getElementById("demo").value;

//   try {
//     if (inputValue == "") {
//       throw new Error("Empty");
//     } else if (isNaN(inputValue)) {
//       throw new Error("Not a Number");
//     } else if (inputValue < 5) {
//       throw new Error("To Low");
//     } else if (inputValue > 10) {
//       throw new Error("Too High");
//     }else {
//       message.innerHTML = inputValue;
//     }
//   } catch (error) {
//     console.log(error);
//     message.innerHTML = error;
//   }finally{
//     finallyValue.innerHTML = "This is block can be executed either try and catch works or not. it have to execute "
//   }
// };

/*
  *** The Error Object ***
    JavaScript has a built in error object that provides error information when an error occurs.

    *** Error Object Properties ***
        => name (sets or returns an error name)
        => message (sets or return an error message (a string))
  *** Error Name Values ***
    => EvalError (An error has occurred in the eval() function)
    => RangeError (A number out of range has occurred)
    => ReferennceError ( An illegal reference has occurred)
    => SyntaxError (A syntax error has occurred)
    => TypeError (A type error has occurred)
    => URIError (An error in encodeURI() has occurred)
    Note that: New version JavaScript do not throw EvalError, use SyntaxError instead
    
*/
// RangeError: a number out of range has occurred
let num = 2;

try {
  num.toPrecision(500);
} catch (error) {
  console.log(error);
  document.getElementById("RangeErrorCheck").innerHTML = error;
}

// Reference Error: is throw when we use a variable that has not declared
let x = 5;

try {
  let result = x + y;
} catch (error) {
  console.log(error);
  document.getElementById("ReferenceErrorCheck").innerHTML = error;
}

// Syntax Error: is throw if we try to execute code with a syntax error
// try {
//    alert("ABC"));
// } catch (error) {
//   console.log(error);
//   document.getElementById('SyntaxErrorCheck').innerHTML = error;
// }

// Type Error: is throw if we use a value that is outside the rage of expected types

let a = 1;
try {
  a.toUpperCase();
} catch (error) {
  console.log(error);
  document.getElementById("TypeErrorCheck").innerHTML = error;
}

// URIError: is throw when we use illegal characters in a URI function
try {
  decodeURI("%%%");
} catch (error) {
  console.log(error);
  document.getElementById("URIErrorCheck").innerHTML = error;
}

/*
 *** Create Custome Error ***
 */

class CustomeError extends Error {
  constructor(message) {
    super(message);
    if (Error.captureStackTrace){
      Error.captureStackTrace(this, this.CustomeError);
    }
  }
}

function basicErrorH() {
  let message = document.getElementById("errorMessage");
  message.innerHTML = "";

  let inputValue = document.getElementById("demo").value;

  try {
    if (inputValue == "") {
     throw new CustomeError("Empty");
    } else if (isNaN(inputValue)) {
      throw new CustomeError("Not a Number");
    } else if (inputValue < 5) {
      throw new CustomeError("To Low");
    } else if (inputValue > 10) {
      throw  new CustomeError("Too High");
    } else {
      message.innerHTML = inputValue;
    }
  } catch (error) {
    console.log(error);
    message.innerHTML = error;
  }
}
