/*
    Module System: Module system is a one kind of system which means we will put a specific task inside a specific 
    file.

    There are different waies to work with modeule system
        => AMD ( Asynchronous Module Definition ) for browser
        => COMMONJS for Node Js
        => UMD (Universal Module Definition ) for ES5
        Etc ...

*/
// importing file
import Rectangle from "./Rectangle";
import Circle from "./Circle";
// * means we can get every function
import * as math from './math';
// if we want specific one
import { add , division } from './math';

// create instance of Rectangle Class 
let rect = new Rectangle("Green", 10, 30);
console.log(rect.color);

// create instance of Circle Class 
let circle = new Circle(10);
console.log(circle.color);

// use math module
console.log(math.substraction(10, 50));
console.log(math.multiplication(10, 50));

// another way 
console.log(add(10, 40));
console.log(division(15, 20));





