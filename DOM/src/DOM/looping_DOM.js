/*
    *** We can do looping with on the DOM HtmlCollection ***
*/
// looping with list element
let list = document.getElementById('list');
console.log(list.children) // return HTMLCollection which is not array 

// converted HtmlCollection to Array

// let listArray = Array.prototype.slice.apply(list.children)
// let listArray = Array.from(list.children)
let listArray = [...list.children];

// forEach() method use 
listArray.forEach((text, index)=>{
    let tex = text.innerHTML;
    text.innerHTML = `${index + 1} ${tex}`
})



