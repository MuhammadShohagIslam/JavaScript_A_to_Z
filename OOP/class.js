/*
    Class: is Just a Factory to Create Multiple Object without Code Duplication
            * Class is a just template of an Object.
            * We can create multiple object from a class
            * JavaScript does not have a class but we can works as a class.
    *** We can use two terms for using class in JavaScript
            1. Factory Pattern
            2. Constructor Pattern

    *** A constructor is needed to create any 'object'
*/
// Factory Pattern
const factoryClass = function(width, length){
    return {
        width: width, // width is a class property
        length: length, // length is a class property

        calculateArea: function (){ // calculateArea is a class method
            console.log("I am a Rectangle")
            this.printProperties()
            return this.width * this.length;
        },
        printProperties: function (){
            console.log("My Width is "+ this.width);
            console.log("My Length is "+this.length);
        }
    }
}
const rectangular = factoryClass(20,50); // no need to put new keyword beacuse already factory class has empty object
console.log(rectangular.width);
console.log(rectangular.length);
console.log(rectangular.calculateArea());
console.log(rectangular.printProperties());


// Constructor Pattern
const ClassFactory = function (width, length){
    this.width= width; // this.width is a class property
    this.length = length; // this.length is a class property

    this.calculateArea = function (){ // this.calculateArea is a class method
        console.log("I am a Rectangle")
        this.printProperties()
        return "My Rectangle Area Is "+ this.width * this.length
    };
    this.printProperties = function (){ // this.calculateArea is a class method
        console.log("My Width is "+ this.width);
        console.log("My Length is "+this.length);
    };
}
const rectangular1 = new ClassFactory(10, 20); // need to put new keyword beacuse constructor pattern has no empty object.
console.log(rectangular1)
console.log(rectangular1.width)
console.log(rectangular1.length)
console.log(rectangular1.calculateArea())





