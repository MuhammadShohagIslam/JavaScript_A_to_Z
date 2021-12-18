/*
    *** Working DOM Element ***
*/
// call function 
let li = newList('li','class', 'list-group-item',  'A four item');

// holding ul element
let list = document.getElementById('list');
list.appendChild(li);

// creating new list element
function newList (elementName, qualifiedName,value, text) {
    let newElement = document.createElement(elementName);
    //newElement.className = value;
    newElement.setAttribute(qualifiedName, value);
    newElement.innerHTML =text || '';
    return newElement;
}


// pust list element to ul element

console.log(list);
// console.log(newElement);

let newDiv = document.createElement('div');
newDiv.setAttribute('class', 'main-list');

let newa = document.createElement('a');
// newDiv.appendChild(list);
append(newDiv, [list, newa]);
console.log(newDiv);

function append(parent, children){
    return children.forEach(element => {
        parent.appendChild(element)
    });
}

/*
    *** DOM remove() Method ***
        => The remove() method removes the specified element from the DOM
*/
let anchorChild = document.getElementsByTagName('p')[0];
// we can remove our p html node element
anchorChild.remove();
console.log(document.body);

/*
    *** DOM classList Property ***
    => The classList property returns the class name of an element as a DOMTokenList
    => This property is useful to add, remove, and toggle CSS on an element.

*/
let classL = document.getElementById('title');
console.log(classL.offsetTop)
// add class name
classL.classList.add('p-1')

// conatain(class) return boolean value true and false
console.log(classL.classList.contains('p-1')) // return true if it has

// to get className as a index number
console.log(classL.classList.item(0));

// toggling classList

function toggleFun(){
   return classL.classList.toggle('bg-success');
}
toggleFun();
// to remove any classList
classL.classList.remove('p-1');

console.log(classL.classList);
