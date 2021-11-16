var name =  '';

// var fullName = '';

// if (name.length == 0){
//     fullName = "Muhammad Shohag Islam"
// }else {
//     fullName = name
// }
// console.log(fullName)

// *** Above Condition Shortcut look like (if else condition)***
var fullName = name || "Muhammad Shohag Islam"

console.log(fullName)



var isOk = true

// if (isOk) {
//     console.log("It is ok for me")
// }

// *** Above Condition Shortcut look like only (if Condition)***
isOk && console.log('It is And Logical Shortcut Operator')