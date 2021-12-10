/*  
    Sets: Set is a collection of unique values.This value can be any Data Type
    Each value can only occur once in a set.

*/
// create a set
const set = new Set(['a', 'b', 'c','d']);
console.log(set);

// add() method which create new element to the Set
set.add(10) // add a number
set.add({'a':10}) // add a object
set.add(true); // add a boolean value
console.log(set);

// if we add equal elements, only the first will be saved.
set.add(10); // only add previous one not this one
console.log(set);

// has() returns true if a vlue exists in a Set
console.log(set.has(10)); // return true beacuse 10 exist
console.log(set.has(2)); // return false beacuse 2 is not exists in this Set

// 'size' property returns the number of elements in a Set
console.log(set.size);

/*
    *** The forEach() Method ***
        The forEach method invokes (call) a function for each Set element.

*/
let text = '';
set.forEach((value)=>{
    text += value+ " ";
});
console.log(text);

/*
    *** The values() Method ***
    The values() method returns a new iterator object conatining all the values in a Set.

*/
console.log(set.values()); // return setIterator, so we can use loop beacuse it is iterator

for (let i of set.values()){
    console.log(i); // return all values
}

/*
        *** Weak Set of the JavaScript ***
        If anytime have  a chance to work with object reference or has problem of memeory leak
        in this case, we can be work with WeakSet.
        It is not a interator obejct, and we can not store any primitive data.
            * When we do not need a weakSet *
                => no need to work with object reference
                => no need to make week relationship with object reference
    Note that: if we want to do null any thing, it means this thing no need to use.

*/
let a ={a: 10};
let b = {b: 20};
const ws = new Set([a, b]);
a = null;
console.log(ws); // return all value , it can not able to delete a value.
const set1 = [...set];
console.log(set1[0]);

// create a WeakSet()
let c ={c: 20}
const weakSet = new WeakSet([b, c]); // only object can be stored  
c = null; // delete c value from memory
console.log(weakSet); // return only b values
console.log(weakSet.has(b)) // return true







