/*
    this keyword: The JavaScript this keyword refers to the  object it blongs to.
        In a Method => this refers to the owner object.
        Alone => this refers to the global object
        In a Function => this refers to the global object
        in a Function, in strict mode => this is undefiend
        In a Event => this refers to the element  that received the event.
        Methods like call(), and apply() can refer this to any object.

*/
// in an object method, this refers to the owner of the method
const person = {
    firstName: "A",
    lastName: "B",
    fullName: function (){ // the person object is the owner of the fullName method.
        return this.firstName + " "+ this.lastName;
        // 'this' refers to the person object
    }
}

console.log(person.fullName())

/*
    *** this Alone ***
        => When we use this keyword with alone, it refers to the global object 
        => In a browser window the Global object is [object window]
    *** In strict mode, when used alone, this also refers to the Global Object[object Window]
*/
let x = this;
console.log(x); // return window object which is global object

// using strict mode
"use strict";
let y = this;
console.log(y); // return window object

/*
    *** this in a Function ***
        => In a JavaScript function, the owner of the function is the default binding for this,
        so, in a function, this, refers to the global object [object window]

        * strict mode * does not allow default binding, in that time this is undefined

*/
// this in a function default binding
function thisFunction () {
    console.log(this)
}
thisFunction()

// strict mode 
// "use strict";
// function thisFunctionStrict(){
//     return this
// }
// console.log(thisFunctionStrict())

/*
    *** this in Event Handlers ***
    => In Html event handlers, this refers to the HTML element that received the event.
    Example:
        <button onclick="this.style.display ='none'">Click to Remove Me!</button>
        *** 'this' refers to the button that received the event.
*/

/*
    *** Object Method Binding ***     
*/
const obj1 = {
    firstName: "A",
    lastName: "B",
    fullName: function(){
        return this.firstName + " "+ this.lastName
    },
    getFullName: function(){
        return this.fullName() // 'this' refers to the obj1
    }
}
console.log(obj1.getFullName())

/*
    *** Explict Function Binding ***
        => if we are intension this keyword does not refers main object, it refers another object which one we are pass a object inside the main object, it is explict function binding.
*/
const obj2 = {
    firstName: "A",
    lastName: "B",
    fullName: function(){
        return this.firstName + " "+ this.lastName 
    },
    getFullName: function(){
        return this.fullName() // 'this' refers to the "obj3"
    }
}
const obj3 = {
    firstName: 'C',
    lastName: "D",
    fullName: function(){
        return this.firstName + " "+ this.lastName
    }
}
console.log(obj2.getFullName.apply(obj3)) // in this case, 'this' refers to the obj3
console.log(obj2.fullName.call(obj3)) // in this case, 'this' refers to the obj3
console.log(obj2.getFullName.call(obj3)) // in this case, 'this' refers to the obj3


/*

    *** In the context of the execution in which the 'this' will be used, the 'value' will be found just before
    the moment.

*/
const object1 = {
    firstName: "A",
    lastName: "B",
    fullName: function(){
        return this.firstName + " "+ this.lastName 
    }
}
const object2 = {
    firstName:"G",
    lastName: "H",
    fullName: object1.fullName // in this case, this.firstName and this.lastName are properties of object2 not object1's properties
}
console.log(object2.fullName()) 





