/*
    OOP: Object Oriented Programming is  a programming paradigm( the standard way of style define ) based on the concept of object, which can
    contain data, in the form of fields(ofthen known as attributes)
    and code, in the form of procedures (often known as methods)
    *JavaScript is not actully a Object Oriented Programming Language.But we can work as a OOP.

    * Primitive Datas(Singular Data like Boolean, Number, String) are used to work with the OOP.
    *
    
    *** How to Think Everything as an Object ***
        => Everythink which takes multiple properties to describe is an Object.
        => Anythink to describe if we need multiple data
        => Even A Number can be an Object (Number: int, float, positive, negative)

    *** The method and properties of OPP ***
        Properties => is a term, which is described the characteristic of an Object and those which are stored into variable. like (Noun/Adjective of Grammer)

        Method: is a term, which can work of an object those which executable code and function ( like Verb of Grammer)

    *** The Class of OOP ***
        Class : is Just a Factory to Create Multiple Object without Code Duplication
            * Class is a just template of an Object.
            * We can create multiple object from a class
            * JavaScript does not have a class but we can works as a class.

    *** Four Pilars of OOP ***
        OOP stands on four main pilar:
            => Abstraction
            => Encapsulation
            => Inheritance
            => Polymorphism
    *** A constructor is needed to create any object. Every object has a Constructor

    *** Function is a special type of object, which is a executable(we are able to execute code from outside).
    It has many properties.It has many method. We can use every features of 'Object'


*/
// object literal way to create object
// const rect = {
//     width : 10,
//     height: 20,
//     calutatedAree: function(){
//        return () => {
//            return this.width * this.height
//        }
//     }
// }
// const x = rect.calutatedAree();
// console.dir(x());


const obj = {} // like below one
const obj1 = new Object() // new Object() is a constructor.

/*
    *** Function is Object ***
*/
function test() {
    console.log("Function is a object")
}
/*
test.constructor
ƒ Function() { [native code] } 

=> it is proved that function is a object beacuse only object has constructor
*/
// another way to prove, function is a object
    const objFun = new Function( 'width', 'length', ` this.width= width; // this.width is a class property
    this.length = length; // this.length is a class property

    this.calculateArea = function (){ // this.calculateArea is a class method
        console.log("I am a Rectangle")
        this.printProperties()
        return "My Rectangle Area Is "+ this.width * this.length
    };
    this.printProperties = function (){ // this.calculateArea is a class method
        console.log("My Width is "+ this.width);
        console.log("My Length is "+this.length);
    };`
)

const rectangular = new objFun(20,50); 
console.log(rectangular);







