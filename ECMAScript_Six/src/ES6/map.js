/*
    Map: A Map holds key-value pairs where the keys can be any datatype.
    A Map remembers the orginal insertion order of the keys.

*/
// create a map
const map = new Map([
    ['olive', 200],
    ['apple', 150],
    ['banana', 140],
]);
console.log(map);

// through set() method, we can add new element to the Map
map.set({a: 10}, 200); // key can be any data type
console.log(map);

// the set() method can also be used to change existing Map values
map.set('banana', 135);
console.log(map);

// the get() method gets the value of a key in a Map
console.log(map.get('olive'));

// the size property returns the number of elements in a Map
console.log(map.size);

// the has() method returns true if a key exists in a Map
console.log(map.has('olive'));

/*
   *** The forEach() method ***
   The forEach() method calls a function for each key/value pair in a Map.

*/
map.forEach((v, k)=>{
    console.log(k +" = "+v);
});

// the entries() method returns an iterator object with the [key, value] in a Map
console.log(map.entries()) // return iterator object, so we can use loop, beacuse it is iterator

for (let [k, v] of map.entries()){
    console.log(k+ " ==== " +v)
}

/*
    *** WeakMap ***
     If anytime have a chance to work with object reference or has problem of memeory leak
        in this case, we can be work with WeakMap.
        It is not a interator obejct, and we can not store any primitive data.
            * When we do not need a WeakMap *
                => no need to work with object reference
                => no need to make week relationship with object reference
    Note that: if we want to do null any thing, it means this thing no need to use.

*/
let a = {a: 10}
const wm = new WeakMap()
wm.set({}, 20);
wm.set(a, 20);

a = null; // overwrite the reference

console.log(wm); // a is removed from memory



