/*
    *** Stack Data Structure of Array ***
        In computer science, a stack is an abstarct data type that serves as a collection of elements, with two principal operations:
            => push, which adds element to the collection, and
            => pop, which removes the most recently added element that was not yet removed. 
        => stack work with LIFO way, LIFO means --> Last In First Out.
*/
/*
 *** Implimentation of Stack Data Structure through Array ***
 */
class Stack {
    constructor() {
        this.list = new Array(30);
        this.top = -1;
    }

    push(item) {
        if (this.top >= 30) {
            console.log("Stack Overflow");
            return false;
        }
        this.list[++this.top] = item;
        return this.top + 1;
    }
    pop() {
        if (this.isEmpty()) {
            console.log("Stack Underflow");
            return false;
        }
        const item = this.list[this.top];
        delete this.list[this.top];
        this.top--;
        return item;
    }
    peek() {
        if (this.isEmpty()) {
            console.log("Stack Underflow");
            return false;
        }
        return this.list;
    }
    isEmpty() {
        return this.top < 0;
    }
}

const stack = new Stack();
// const a = stack.push(10);
// const b = stack.push(20);
// console.log(a, b);
// stack.push(10);
// stack.push(10);
// const g = stack.pop();
// console.log(g);
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.isEmpty());

const text = "Shohag";
for (let i = 0; i < text.length; i++) {
    stack.push(text.charAt(i));
}
console.log(stack.peek());
console.log(stack.isEmpty());
/*
 *** JavaScript Array Stack Methods ***
 */
const array = [];
const c = array.push(10);
const d = array.push(20);
// console.log(a, b);
// const e = array.pop();
// console.log(array.pop());
