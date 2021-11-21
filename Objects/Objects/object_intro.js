/*
    Objects: objects are a data structure which can hold any data or values as a property:value. 
    Or A JavaScript objects is a collection of named values.

        *In JavaScript, objects are king
        *In JavaScript, almost everything is an object.
            *Boolean can be objects (If defined with the new keyword)
            *Number can be objects (If defined with the new keyword)
            *String can be objects (If defined with the new keywords)
            *Dates are always objects
            *Regular expressions are always objects
            *Array are always objects
            *Objects are always objects
    **All JavaScript values, except primitives(value that has no properties or method), are objects

    ** A common practice to declare objects with the const keyword.
    ** Objects values are written as properties: values pair(properties or name and value seperated by colon)

*/
// a common practice to declare objects with the const keyword.
// objects values are written as properties: values pair
const obj = { firstName: "Muhammad Shohag", lastName: "Islam", age: 23 };
console.log(obj);

/*
    *** Creating a JavaScript Object ***
        Through JavaScript, we can define and create our own objects.
        We can create new objects different way:
            * Create a single object, using an object literal -- It is good
            * Create a single object, using the new keyword
                --It is not readability, simplicity and execution speed
            * Define an object constructor, and then create objects of the constructor type
            * Create an object using Object.create(). 
*/
// object literal is the easiest way to create a JavaScript obejct.
const obj1 = { firstName: "Muhammad Shohag", lastName: "Islam", age: 23 };
console.log(obj1);

// create a single object, using the new keyword
const obj3 = new Object();
obj3.firstName = "Muhammad Shohag";
obj3.lastName = "Islam";
obj3.age = 23;
console.log(obj3);

// create an object using Object.create().
const obj6 = Object.create(obj);
obj6.currentLocation = "Turkey";
console.log(obj6);

/*
 **** JavaScript objects are mutable ****
 * Obejcts are mutable: they are addressed by reference, not by value
 * Any change into objects automaticaly change
 */
const obj4 = { firstName: "Muhammad Shohag", lastName: "Islam", age: 23 };
const obj5 = obj4; // Will not create a copy of obj4, obj5 is not copy of obj4, it is obj4, both are the same object

obj5.university = "Abdullah Gul University";
console.log(obj5);
