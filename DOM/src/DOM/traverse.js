/*
    Traverse: Traverse is a one kind of technique through which we can be extracted the data from DOM.

    *** Where we can find element, that case we can work only element, in this case, we can get specific element.

*/
let list = document.getElementById('list');
console.log(list);

/*
    *** parentElement Property ***
        => The parentElement returns the parent element of the specified element.

        *** The difference between parentElement and parentNode, is that parentElement returns null if the parent node is not an element node.
        *** parentNode is probably the most popular
*/
// parentElement
let parentElement = list.parentElement;
console.log(parentElement);

// parentNode
let parentNode = list.parentNode
console.log(parentNode);

/*
    *** children Property ***
        => The children property returns a collection of an element's children element, as an HTMLCollection
        obejct and we can access by index numbers

*/
// to get children
let children = list.children;
console.log(children); // return li element which is list's element children
console.log(children[0]); // return first li element 

/*
    *** The previousElementSibling ***
        => The previousElementSibling property returns the previous element of the specified element, in the same tree level

        *** Different between previousSibling vs previousElementSibling ***
            => previousSibling returns the previous sibling node as an element node, a text node or comment node but 
            previousElementSibling returns the previous sibling node as an element node(ignores text and comment)
*/
// to get  previous element sibling
let preS = list.previousSibling
console.log(preS);

let preES = list.previousElementSibling;
console.log(preES) // return p element beacuse it's previous element of 'ul' element

/*
    *** nextElementSibling ***
    => The nextElementSibling property returns the element immediately following the specified element, in the same tree level

    => nextSibling returns the next sibling node as an element node, a text node or comment node but 
    => nextElementSibling returns the next sibling node as an element node(ignores text and comment)
*/

//to get next element sibling
let nextES = list.nextElementSibling;
console.log(nextES); // return input element beacuse it's next element of 'ul' element

/*
    *** firstElementChild ***
    => The firstElementChild property returns the first child element of the specified element.

    => firstChild returns the the first child node as an element node, a text node or comment node but 
    => firstElementChild returns the first child node as an element node(ignores text and comment)
*/
// to get first element child of  'ul' element
let firstEC = list.firstElementChild;
console.log(firstEC);

/*
    *** lastElementChild ***
    => The firstElementChild property returns the first child element of the specified element.

    => lastChild returns the the last child node as an element node, a text node or comment node but 
    => lastElementChild returns the last child node as an element node(ignores text and comment)
*/
// to get last element child of 'ul' element
let lastEC = list.lastElementChild;
console.log(lastEC);

/*
    *** The insertAdjacentElement() ***
        => The insertAdjacentElement() method inserts a the specified element into a specified position.

        Syntax: 
            node.insertAdjacentElement(position, element)
    * Legal position values are
            => afterbegin -- After the beginnig of the element(as the first child)
            => afterend -- After the element
            => beforebegin -- Before the element
            => beforeend -- Before the end of the element (as the last child)
    * element => the element we want to insert
*/
let para = document.getElementsByTagName('p')[0];
console.log(para);

// let listInsert = list.insertAdjacentElement('beforeend' ,para);
// let listInsert = list.insertAdjacentElement('afterbegin' ,para);
// let listInsert = list.insertAdjacentElement('beforebegin' ,para);
let listInsert = list.insertAdjacentElement('beforeend' ,para);
console.log(listInsert);













