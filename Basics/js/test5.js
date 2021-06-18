
const name = "Jk";
const greeting = "Good Morning";
console.log(greeting +" " + name);

let html;
html = '<h1> This is Heading </h1>' +
        "<p> This is paragraph</p>";

console.log(html); //<h1> This is Heading </h1><p> This is paragraph</p>

html = html.concat('this');
console.log(html); //<h1> This is Heading </h1><p> This is paragraph</p>this

console.log(html.length); //55
console.log(html.toLowerCase()); //<h1> this is heading </h1><p> this is paragraph</p>this
console.log(html.toUpperCase());// <H1> THIS IS HEADING </H1><P> THIS IS PARAGRAPH</P>THIS

console.log(html[0], html[1], html[2]);// < h 1

console.log(html.indexOf('This'));//5
console.log(html.indexOf('lab')); // -1

console.log(html.charAt(5));//T
console.log(html.endsWith('/p>this'));// true
console.log(html.includes('is'));//true
console.log(html.includes("fgh"));// false
console.log(html.substring(0,3)); //<h1  {starting index included and end index excluded}
console.log(html.substring(-4)); //<h1> This is Heading </h1><p> This is paragraph</p>this
console.log(html.slice(0,4));//<h1> 
console.log(html.slice(-4));//this

console.log(html.split(' '));//Array(8) [ "<h1>", "This", "is", "Heading", "</h1><p>", "This", "is", "paragraph</p>this" ]
console.log(html.split('g'));//Array(3) [ "<h1> This is Headin", " </h1><p> This is para", "raph</p>this" ]

console.log(html.replace('This','it'));//<h1> it is Heading </h1><p> This is paragraph</p>this  {1st occurrence is replaced}


let fruit1 =  'Orange\'s';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
            <h> This is "Heading" </h1>
            <p> You like "${fruit1}" and ${fruit2}

`;
document.body.innerHTML = myHtml;  
//Displayed In browser => 
// Hello Jk This is "Heading"
// You like "Orange's" and Apple 

