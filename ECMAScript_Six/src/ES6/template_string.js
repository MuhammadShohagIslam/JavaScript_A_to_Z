/*
    Template String: Template String is a new features of ES6. It uses back-ticks(``) rather than the quotes("")
    to define string.
    * Inside the template string, we can declare  variable dynamicaly, and also use single statement

*/

/*
 *** Quotes Inside String ***
 *With template literals, you can use both single and double quotes inside a string.
 */
let text = `Template String is a "New features" of 'ES6'`;
console.log(text);

/*
    *** Multiline String ***
    Template string allows multiline strings

*/
let tstr = `      The quick
brown cat jumps 
over the lazy dog`;
console.log(tstr);

// use trim() method for fix space problem whether begining or ending
let trimS = tstr.trim();
console.log(trimS);

/*
    Interpolation: Automatic replacing of variables with real values is called string interpolation.
*/
// Template string allow variable in string.
let firstName = "Muhammad Shohag";
let lastName = "Islam";

let fullName = `My name is ${firstName} ${lastName}`;
console.log(fullName);

// Template string allows expression in string
// must be single statement, not multiline statement
let age = 23;

// let profile = `I am ${for (let i = 0; i< age; i++){
//     console.log(i)
// }}Adult Boy`; // not possible

// let profile = `I am ${() => age +1}Adult Boy`; // not possible

let profile = `I am ${age < 18 ? "Not " : ""}Adult Boy`;
console.log(profile);

// use template string in html template
let header = "Template Literals";
let tags = ["Template Literals", "JavaScript", "ES6"];

let html = `<h1>${header}</h1><ul>`;
for (let i of tags) {
  html += `<li>${i}</li>`;
}
html += "</ul>";
// document.getElementById("demo").innerHTML= html
console.log(html);

// we can add space beginnig
let padd = "a".padStart(5, "-");
document.getElementById("demo").innerHTML = padd;

// let text1 = "5";
// document.getElementById("demo").innerHTML = text1.padEnd(4,"*");
// console.log(text1)
