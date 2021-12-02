/*
    Abstraction: Abstraction is a one pilar of OOP, hidding unnecessary details from user.

    All the logic of a class, where we will implement, but what the user does not need to know, the complexity
     of the user will hide. it's called Abstraction

*/
const ConstructorFunction = function(width, height) {
    this.width = width
    this.height = height

    const position = { // this way to hide object properties, just use of var or let or const variable
        x: 120,
        y: -130
    }

    this.draw = function () {
        console.log(this);
        console.log("The Width is "+ this.width);
        console.log("The Height is " + this.height);
        printFunction()
    }
    let printFunction = function(){ // we can hide our function using of let, var, const variable
        console.log("This is a rectangular")
        console.log("The Width is "+ this.width);
        console.log("The Height is " + this.height);
        console.log(position)
    }.bind(this) // this refers to the constructor object

    this.printFunction = function(){ // it is one way to access hide function outside the function body.
        return printFunction()
    } 
}
const rectangular = new ConstructorFunction(20, 30);
console.log(rectangular.printFunction());

/*
    *** JavaScript Object Accessors ***
        Through use of Getter and Setter system, we can access or set any private property and method.
        *** defineProperty / defineProperties:  Whether an object's properties will be iterator or not, read only or not, we can fix a lot more.

*/
const Reactangle = function (width, length, height) {
    this.width = width
    this.length = length
    this.height = height

    let position = {
        x: 120,
        y: -130
    }

    let calculateArea = function(){
        console.log("Position X = "+ position.x + "Position Y = "+ position.y);
        console.log( "The Rectangle Area is " + this.width * this.length);
    }.bind(this)

    this.calculateVolume = function(){
        console.log("The Rectangle Volume is " + this.width * this.length * this.height)
        // calculateArea()
    }
    // Object.defineProperty(this, "position", {
    //     get : function(){
    //         return position
    //     },
    //     set: function (value){
    //         position = value
    //     }
    // })
    Object.defineProperties(this, {
        "position": {
            get: function (){
                return position
            },
            set: function (value) {
                position = value
            }
        },
        "calculateArea":{
            get: function(){
                return calculateArea()
            }
        }
    })
}

const obj = {
    x: 1,
    y: 20
}
const rect = new Reactangle(10, 20, 15);
rect.position = obj
// we can able access position Property and calculateArea Method even if it is unable to access outside the function, beacuse of getter
console.log(rect.position); 
console.log(rect.calculateArea);
