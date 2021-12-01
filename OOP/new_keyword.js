/*
    new Keyword: New keyword is a JavaScript keyword through which we can create an intance of an object
    that has a constructor function.

    *** New Keyword can Works Four ***
    1. Firstly, it creates an empty object.
    2. Secondly,  Associates the empty object with whatever is inside the function(The 'this' is binded with constructor)
    3. it connects prototypes of object. The prototypes of constructor are inherited with empty object.
    4. at the end this object is returned 

*/
const ClassFactory = function(width, height){
    this.width = width;
    this.height = height;

    this.calculateArea = function(){
        return this.height * this.width;
    }
}
// const rectangle = new ClassFactory(10, 20);
// console.log(rectangle);

// Create a custome 'new' Keyword;
function myNew (constructor){
    const obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    const arrgArray = Array.prototype.slice.apply(arguments);
    // console.log(arrgArray)
    constructor.apply(obj, arrgArray.slice(1));
    return obj;
}
const customeNew = myNew(ClassFactory, 10, 30)
console.log(customeNew);
console.log(customeNew.width);
console.log(customeNew.height);
console.log(customeNew.calculateArea());



