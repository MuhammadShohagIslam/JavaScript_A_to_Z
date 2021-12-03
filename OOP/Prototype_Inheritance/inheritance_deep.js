/*
    ***To inherit one constructor into another constructor, we can be used => 
    ConstructorName.prototype = Object.create(WhichconstructorName.prototype)

    *** If we want to use property from Parent class constructor into child Class, we can use =>
    ParentConstructor.call(this, argument ..) 

    *** Method OverWrite: It is a changing process through which we can change parent based class(Constructor) method.
        => this method change their characteristic different place
        => this method change their behave when it works with different object.

    Constructor: Constructor is such a function reference,  this object has been created using this function.

    Note that : We should avoid to inherit more than three, it causes code complexity.

*/
function extend (parent, childClass){
    childClass.prototype = Object.create(parent)
    childClass.prototype.constructor = childClass
}

// Parent Class
function Shape(color){
    this.color = color
}
Shape.prototype.common = function(){
    return "A"
}

const shape = new Shape(30,50)
console.log(shape)

// Child Class
function Square(){
    this.draw = function(){
        return this.length * this.length
    }
}
// method overwrite
Square.prototype.common = function(){
    return "ABC"
}
// sqr -> Square -> Shape -> Object => inheritance
extend(Shape.prototype, Square)

const sqr = new Square()
console.log(sqr)


// Child Class
function Rectangular(width, color){
    Shape.call(this, color) // we can get parent properties 
    this.width = width
}
// rect -> Rectangular -> Shape -> Object => inheritance
extend(Shape.prototype, Rectangular)

// method overwrite
Rectangular.prototype.common = function(){
    console.log(Shape.prototype.common(this)) // parent class based
    console.log("I am calling from Rectangular and i have Overridden")
}
const rect = new Rectangular(10, "green")
console.log(rect)
console.log(rect.common())