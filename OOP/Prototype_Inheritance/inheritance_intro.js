/*
    Inheritance of OOP: Inheritance is a one kind of pilar of OOP which means keep the characteristics of other within yourself. 
    Or
    Inheritance is such a machanism where it can bring the characteristics of others into itself.

    We see that there are two type of inheritance:
        1 => Classical inheritance ( it does class-based OOP inheritance like Java, C++)
        2 => Prototypical Inheritance ( All of the inheritance has been happend through prototype )*
            * Since JavaScript does not have Class, we can inherit through using this system

    => Without object class, all of the JavaScript class has a parent object, it's called 'Prorotype'
    And all of the object of JavaScript has a parent class, it is proto.

    => All of the constructors(Array, String, Function...) has prototype properties 
    Where we can use this build-in properties and method, can add new properties and method.

    Note that: We will no change the Prototype of  JavaScript building object, it is big effected on the JavaScript Functionality. But, we can use the prototype which we have made as we wish, for your work purpose.
*/

let obj = {}
console.log(obj) // we can see in our browser prototype of object, it is inheritance from object

// Capital Object does not has object based, but all of the object to get object based
let obj1 = new Object()
console.log(obj1)

console.log(obj._proto_ === obj1._proto_) // we never use this way to get prototype beacuse it has been deplicated from user
// Another option to get prototype from all of the object ***
console.log(Object.getPrototypeOf(obj))
console.log(Object.getPrototypeOf(obj1))

/*
    Multi Level inheritance: When a object(class) will inherit from main object(main class), it's called Multi Level Inheritance

    Below JavaScript Example:
        ([[Prototype]]: Array(0)) => Array Prototype based will inherit from ([[Prototype]]: Object) main Prototype Object based of JavaScript
*/
const arr = []
console.log(arr) // see browser go buttom and see Another proto like Object

// ([[Prototype]]: String) String prototype based will inherit from Object based Prototype ([[Prototype]]: Object)
const str = new String()
console.log(str)

/*
    *** Property Descriptor ***
        We can describe of our object property, we can say that this property is accessible, writable etc from the outside
        *property descriptor is a object.
            => configurable: true(remove from outside) / false (can not remove from outside)
            => writable: true(add from ouside) / false( we can not)
            => enumerable: true(iterator) / false (not iterator)
            => value: ""(It is default value)
    Benefits:
        * we can hide your property in object, and control whatever you want
*/
const person ={
    name: "ABC"
}
console.log(person)
for (i in person){
    console.log(i)
}
console.log(Object.keys(person))

// to see property descriptor of object Property
const descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(descriptor)

// to see toString() descriptor
const base = Object.getPrototypeOf(person) // return person object prototypes
const descriptor1 = Object.getOwnPropertyDescriptor(base, 'toString') // return descriptor of toString() from person object prototypes
console.log(descriptor1)

/*
    *** Constructor Prototype of any Object ***
        There are several kind of waies to get Prototypes from Object
            1. Object.getPrototypeOf(objectName)
            2. objectName.__proto__
            3. ConstructorName.prototype()
*/
function Person(name) {
    this.name = name
}
// add new property into Person Object Prototype
Person.prototype.PI = 3.1416
const p = new Person("ABC");
const p1 = new Person("BCD")
console.log(p1)
console.log(p)

// use of ConstructorName.prototype() to get prototype
console.log(Person)

/*
    *** Instance Vs Prototype Members ***
        There are two kind of Prototype of any kind of Object
            1. Instance property/menber
            2. Prototype member

            Note that: Instance member can access from Prototype member
            and Prototype members can access from Instance member.
*/
// create a instance member/property 
function Calculate(a, b) {
    this.a = a
    this.b = b

    this.add = function(){
        return a + b;
    }
    this.subtruction = function(){
        console.log(this.multiplication()) // we can access Prototype member/property
        return a - b;
    }
}
// create a Prototype member/property
Calculate.prototype = {
    b: 10,
    multiplication:  function() {
        return this.a * this.b; // we can access instance memeber/property
    },
    toString: function(){ // we can overridde prototype member
        return "My a number value is => "+ this.a
    }

}
const cal = new Calculate(10, 30);
console.log(cal.toString())

//  If we want to get instance member/property from a object constructor
console.log(Object.keys(cal));

// we can get instance member and custome prototype member
for (let i in cal){
    console.log(i)
}

// to find out whether any property belongs to this object
console.log(cal.hasOwnProperty("a"))// return true, because it is instance member or property
console.log(cal.hasOwnProperty("multiplication")) // return false, because it is parent property or prototype member












