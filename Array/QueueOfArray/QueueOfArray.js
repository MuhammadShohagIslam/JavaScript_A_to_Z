/*
 *** Implementation of Queue into Array ***
 */
const MAX_SIZE = 30;
class Queue {
    constructor() {
        this.list = new Array(MAX_SIZE);
        this.front = 0;
        this.rear = 0;
    }
    enqueue(item) {
        if (this.rear === MAX_SIZE) {
            console.log("Queue OverFlow");
            return;
        }
        this.list[this.rear++] = item;
        return this.rear;
    }
    dequeue() {
        if (this.rear === this.front) {
            console.log("Queue is Empty");
            return;
        }
        const item = this.list[this.front];
        delete this.list[this.front];
        for (let i = this.front; i < this.rear - 1; i++) {
            this.list[i] = this.list[i + 1];
        }
        delete this.list[--this.rear];
        return item;
    }
    showQueue() {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return;
        }
        for (let i = this.front; i < this.rear; i++) {
            console.log(`[Displaying] === Queue ${this.list[i]}`);
        }
    }
    next() {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return;
        }
        return this.list[this.front];
    }
    isEmpty() {
        return this.front === this.rear;
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.dequeue();
console.log(queue.list);
console.log(queue.showQueue());
console.log(queue.next());
console.log(queue.next());
console.log(queue.rear);

/*
 *** JavaScript Queue Method ***
 */
const array = [];
// queue's enqueue
array.push(10);
array.push(20);
array.push(30);

// queue's dequeue
console.log(array.shift());
console.log(array);
