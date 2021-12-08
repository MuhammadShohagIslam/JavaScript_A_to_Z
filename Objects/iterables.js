/*
    ***JavaScript Iterables: A JavaScript is an object that has a Symbol.iterator
        * Iterable is a where we can do iterate, where has an order.
            Array maintain order,
            string maintain order,
            but object can not maintain order
    *Technically, iterables must implement the Symbol.iterator method. 
*/
// Iterating over a string, using a for...of loop to iterate over the element of string
for (let x of 'W3School'){
    console.log(x);
}

/*
    JavaScript iterators: the iterator protocol defines how to produce a sequence of values from an object.
    *An object becomes an iterator when it implements a next() method.
*/
// through which  an iterable can be iterated, its meaning can be gone step by step.


// Ierating over an array, through using a for..of loop to iterate over the elements of an array
for(let x of [1,2,3,4,5]){
    console.log(x);
}
