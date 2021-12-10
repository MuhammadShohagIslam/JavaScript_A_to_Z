/*
    Iterators: Iterator is an object that defines a step by step executaion and return a value upon its termination.  

    Genarator: Genarator is such a function which returns iterator. We can use condition into genarator.
*/
const obj = {
    start: 0,
    end: 4,
    [Symbol.iterator]: function* (){
        // let currentValue = this.start;
        while(this.start <= this.end){
            yield this.start ++
        }
    }
}
const interate=  obj[Symbol.iterator]();
console.log(interate.next());
console.log(interate.next());
console.log(interate.next());
console.log(interate.next());
console.log(interate.next());
console.log(interate.next());

// create simple genarator function
function* generatorFun(){
    yield 1;
    yield 2;
    yield 3;
}
const gen = generatorFun();
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log("=====================")

// another example 
function* generatorFun1(){
    let start = 0;
    while(start < 3){
        yield start++
    }
}
const gen1 = generatorFun1();
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log("=====================")

/*
    *** How to conditionaly Stop a JavaScript Generator ***
*/
function checker(i){
    return i !== 2;
}

function* idMakerReturn(){
    let index = 0;
    while(index < 3){
        if(checker(index)){
            yield index++;
        }else{
            return;
        }
    }
}
const gen2 = idMakerReturn();
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log("=====================")

function* idMakerBreak(){
    let index = 0;
    while(index < 3){
        if(index !== 2){
            yield index++;
        }else{
           break;
        }
    }
}

const gen3 = idMakerBreak();
console.log(gen3.next());
console.log(gen3.next());
console.log(gen3.next());
console.log(gen3.next());