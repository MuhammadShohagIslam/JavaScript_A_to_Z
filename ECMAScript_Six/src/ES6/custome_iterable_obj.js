/*
    Custome_Iterable_Object: Custome Iterable Object is a one kind of technique through which we can be made costome iterator which has not iterator before.

    *** How to Find Out if this object belongs to the iterator ***
            => if we see this sign (Symbol(Symbol.iterator))
            => if we use this, it is created iterable
*/
// create an custome iterator object, beacuse it is not iteratr
const obj = {
    start: 1,
    end: 5,
    [Symbol.iterator]: function (){ // custome
        let currentValue = this.start;
        let self = this;
        return {
            next(){
                return {
                    done: currentValue > self.end,
                    value: currentValue > self.end ? undefined : currentValue++
                }
            }
        }
    }
}

const iteratorObj = obj[Symbol.iterator]()
console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());

// we can use for loop beacuse it is iterable object now
for (let i of obj){
    console.log(i)
}

// custome iterator use of array
const arr = [ 1, 3, 4 ,5 ,5];
function arrFunction (collection){
    let currentValue = 0;
    return {
        next(){
            return{
                done: currentValue > collection.length,
                value: collection[currentValue ++]
            }
        }
    }
}
const arrIterate = arrFunction(arr);
console.log(arrIterate.next());
console.log(arrIterate.next());
console.log(arrIterate.next());
console.log(arrIterate.next());
console.log(arrIterate.next());
console.log(arrIterate.next());

/*
    *** Iterator With Symbol In JavaScript ***
*/
// array iterator with symbol
const arrSymbol = arr[Symbol.iterator]();
console.log(arrSymbol.next());
console.log(arrSymbol.next());
console.log(arrSymbol.next());
console.log(arrSymbol.next());
console.log(arrSymbol.next());
console.log(arrSymbol.next());

// string with symbol
let str = "Text";

let strSymbol = str[Symbol.iterator]();
console.log(strSymbol.next());
console.log(strSymbol.next());
console.log(strSymbol.next());
console.log(strSymbol.next());
console.log(strSymbol.next());

// another way string iterator with Symbol
function strFunction(collection){
    let str = 0;
    return{
        next(){
            return{
                done: str > collection.length,
                value: collection[str++]
            }
        }
    }
}
const strIterate = strFunction(str);
console.log(strIterate.next());
console.log(strIterate.next());
console.log(strIterate.next());
console.log(strIterate.next());
console.log(strIterate.next());




