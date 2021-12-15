/*
    Selector: through this selector system, we can select HTML Element: 
        *** In some ways we can select the DOM Element ***
            => Id
            => ClassName
            => TagName
            => Name
*/
// use of Id for selecting HTML element, it is unique, so we can select only one.
let title = document.getElementById('title');
console.log(title);

// use ClassName for selecting HTML element
let paragraph = document.getElementsByClassName('lead');
console.log(paragraph); // return HTML Collection
console.log(paragraph[0]); // we can access with indexing

// use TagName
let listGroup = document.getElementsByTagName('li');
console.log(listGroup);

// use Name
let nam = document.getElementsByName('ul-name');
console.log(nam);

/*
    *** CSS Selector ***
    CSS Selector: Through CSS selector, we can be got HTML Element the form of  CSS name.
        => Id ('#idname');
        => ClassName ('.className')
        => TagName ('tagname')
        => Name ("elementName[name = 'value']")

    document.querySelector() => is selected only one.
    document.querySelectorAll() => is selected More.

*** Different With getElementBy .. and querySelector.. ***
    => Through getElementBy, we get HtmlCollection(It is updatable whatever we wish) and querySelector, we get NodeList (Which is not live updatable)
    => getElementBy .. it is return specfic node which Element Node, but querySelector .. it is only return node List

    => through querySelector .., we get any element like enter press, but querySelector .. we get only html element

*/
// id selector
let title1 = document.querySelector('#title');
console.log(title1);

// ClassName selector
let paragraph1 = document.querySelectorAll(".lead");
console.log(paragraph1);

// TagName selector
let tagName = document.querySelectorAll('li');
console.log(tagName);

let nam1 = document.querySelectorAll("ul[name='name-ul']");
console.log(nam1);

let input = document.querySelector("input[name = 'first-name']");
console.log(input)

// multiple class select at a time
let mulClass = document.querySelectorAll("ul.list-group.mt-4");
console.log(mulClass);

// *** show different between two selector ***
let li = document.getElementsByTagName('li');
console.log(li.constructor.name); // return HTMLCollection

let li1 = document.querySelectorAll('li');
console.log(li1.constructor.name); // return NodeList

// another different
let ul = document.querySelector('ul');
console.log(ul.children); // return only element like HTMLCollection = 3
console.log(ul.childNodes);  // return everythig like text,nodeList = 7






