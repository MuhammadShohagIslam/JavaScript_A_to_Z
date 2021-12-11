/*
    Class In JavaScript: Class is a new feature of Modern JavaScript OOP.
        * If we want to use any properties into JavaScript Class, we have to use constructor method.
        * Constructor call one time when new keyword is called 
        * If we want to pass argument from outside, we have to use class constructor.
        * Class is a function type.
          
*/
// create a class
class Rectangle{
    constructor(weight, height){
        this.weight = weight;
        this.height = height;
    }
    draw(){
        return this.weight + this.height;
    }
}
const rect = new Rectangle(10, 30);
console.log(rect.draw());

// use expression to declare class
let reactangle = class Reactangle1{
    constructor(weight, height){
        this.weight = weight;
        this.height = height;
    }
    draw(){
        return this.weight + this.height;
    }
}
const rect1 = new reactangle(10, 30);
console.log(rect1.draw());

// without constructor to use class but we can not provide argument
class Reactangle2{
    weight = 30;
    height = 40;
    
    draw(){ // this method is gone into pototype of object
        return this.height + this.weight
    }
}
const rect2 = new Reactangle2();
console.log(rect2);

// if we do not want to see class method into pototype
class Reactangle3{
    weight = 30;
    height = 40;

    draw = function(){ // it's outside of the pototype
        return this.height + this.weight
    }
}
const rect3 = new Reactangle3();
console.log(rect3);

// we can be declared method into class constructor method
class Reactangle4{
    constructor(weight, height){
        this.weight = weight;
        this.height = height;
        this.anotherFun = function(){
            return this.weight + height;
        }
    }
    draw(){
        return this.height + this.weight
    }
}
const rect4 = new Reactangle4(10, 30);
console.log(rect4.anotherFun());

/*
    *** Static Method ***
        Static Method: Static method is a one kind of class method where no need to create instance of any class to use these methods.
        OR 
        We can access the method of class without make in class instance

        *When to use class method*
            * When we do not need data into object OR
            * There is no side effect of this method.

*/
class Fruits{
    constructor(name, favourite){
        this.name = name;
        this.favourite = favourite;
    }

    expression(){
        return `My Favourite Fruits is ${this.name}, My Favoutite rate ${this.favourite}`
    }
    static print(str){
        let fruits = JSON.parse(str); // converted JSON to Object
        // let fruits = obj; // i have passed a object
        console.log(fruits);
        return new Fruits(fruits.name, fruits.favourite)
    }
}
// let obj = {
//     name: "Olive Oil",
//     favourite: 100
// }
let str = '{"name":"Olive","favourite":"100"}';
let fruits = Fruits.print(str);
console.log(fruits.expression()) // no need to create class instance to access this method from class
console.log(fruits instanceof Fruits);

/*
       *** This in JavaScript Class ***
        => When we use 'this' keyword into function, in this case, 'this' refers windows object
        One the other hand, into class, 'this' refers undefined beacuse by default class use 'use strict mode'
*/
// working with this keyword into class
class Rectangle5{
    constructor(weight, height){
        this.weight = weight;
        this.height = height;
    }

    draw(){
        return this.weight + this.height;
    }
    print(){
        return this.name
    }
}
let rect5 = new Rectangle5(10, 30);

let obj = {
    name: "Olive Oil",
    favourite: 100
}
// when we do not use parentheses of class method and store another variable, it becomes a function.
let fun = rect5.print; // 'fun' is a function, not method
console.log(fun.apply(obj)); // declare function

// we pass argument as a object another way
class MyClass{
    constructor({name, favourite=100} = {}){ // favourite=100, it is default way pass argument into constructor
        this.a = name;
        this.b = favourite;
    }
}
let obj1 = {
    name: "Olive Oil"
};
let instance = new MyClass(obj1);
console.log(instance);

/*
    *** Private Data with Symbol in JavaScript ***
        => We can hide our data from into class in JavaScript through Symbol

*/
let _weight = Symbol();
let _height = Symbol();
let _draw = Symbol();
let _anotherFun = Symbol();

class HidePm{
    constructor(weight, height){
        this[_weight] = weight; // we can hide our properties this way
        this[_height] = height;
        this[_anotherFun] = function(){
            return this[_weight] + this[_height];
        }
    }
    [_draw](){ // this way we can hide our class method
        console.log(this[_weight]);
    }
}
let hide = new HidePm(10, 40);
// console.log(hide.draw()); // return syntax error
// console.log(hide.anotherFun()); // return syntax error
console.log(hide.weight); // return undefined

// but we can find this hinding properties
let key = Object.getOwnPropertySymbols(hide)[0];
console.log(hide[key]); // return first symbol value

/*

    *** Private Properties with WeakMap ***
        => We can hide our data from into class in JavaScript through WeakMap

*/
const  _radius = new WeakMap();
const _method = new WeakMap();
const _draw1 = new WeakMap();

class HidePm1 {
    constructor(weight){
        this.size = 4;
        _radius.set(this, weight);
        _method.set(this, ()=>{
            return _radius.get(this) + this.size;
        })
    }

}
let hide1 = new HidePm1(10, 50);
console.log(hide1);

/*
    *** Getter and Setter ***
        => We can get hidding properties and set any kind value through using of Getter and Setter
*/
let _value = new WeakMap();
let _anotherFun1 = new WeakMap();

class HidePm2 {
    constructor(value){
        _value.set(this, value);
        _anotherFun1.set(this, ()=>{
            return _value.get(this);
        })
    }
    get value(){
        console.log(_anotherFun1.get(this)())
        return _value.get(this)
    }
    set value(v){
        return _value.set(this, v);
    }
}
let hide2 = new HidePm2(30);
// set value from outside
hide2.value = 50;
console.log(hide2.value);

/*
    *** Inheritance in ES6 JavaScript ***
*/
class Shape{
    constructor(color){
        this.color =color
    }
    draw(){
        console.log("Drawing ...");
    }
}

class Circular extends Shape{
    constructor(color,radius){
        super(color)
        this.radius = radius;
    }
    calculateArea(){
        return 2 * Math.PI * this.radius
    }
}
let c = new Circular("green",10);
console.log(c);
console.log(c.calculateArea());
// it is coming from parent class like Shape
console.log(c.draw());
// it is comming from parent class like Shape
console.log(c.color);

// using getter and setter
let _color = new WeakMap();
class Shape1 {
    constructor(color){
        _color.set(this, color);
    }
    get color(){
        return _color.get(this);
    }
    set color(c){
        return _color.set(this, c);
    }
    draw(){
        console.log("Drawing ...");
    }
}

class Circular1 extends Shape1{
    constructor(color, radius){
        super(color)
        this.radius = radius;
    }
}
let c1 = new Circular1("white", 5);
// set new value of color
c1.color = "White";
console.log(c1.color);

/*
    *** Method Overwriting ***
*/
class Shape2{
    constructor(color){
        this.color =color
    }
    draw(){
        console.log("Drawing ...");
    }
}

class Circular2 extends Shape2{
    constructor(color,radius){
        super(color)
        this.radius = radius;
    }
    calculateArea(){
        return 2 * Math.PI * this.radius
    }

    draw(){ // method overwrite ***
        console.log("This is OverRidden method which converted parent Class draw() method like Shape")
    }
}
let c2 = new Circular2("green",10);
console.log(c2);
// it is coming from parent class like Shape
console.log(c2.draw());










