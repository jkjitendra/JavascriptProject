//Functions

function greet(name, wish) {
    console.log(`Your name is ${name}. 
${wish}`);     
}

let name = 'SF';
greet(name, 'Thank You');

//---------------

function greet1(name1, wish='Thanks') {
    console.log(`Your name is ${name1}. 
${wish}`);     
}

let name1 = 'Sk';
greet1(name1);

//---------------

function greet2(name2, wish='Thanks') {
    console.log(`Your name is ${name2}. 
${wish}`);     
}

let name2 = 'Jk';
greet2(name2, 'Thank You');

//----------------

function greet3(name3, wish='Thanks') {
    console.log(`Your name is ${name3}. 
${wish}`);    
return 4; 
}

let name3 = 'Jk';
let num = greet3(name3, 'Thank You');
console.log(num);

//----------------
function greet4(name4, wish='Thanks') {
    let msg = `Your name is ${name4}. 
${wish}`;    
return msg; 
}

let name4 = 'Jk';
let num1 = greet4(name4, 'Thank You');
console.log(num1);

//----------------

const mygreet = function (name5, wish='Thanks') {
    let msg = `Your name is ${name5}. 
${wish}`;    
return msg; 
}

let name5 = 'Sk';
let num2 = mygreet(name5, 'Thank You');
console.log(num2);

//-----------------

const myobj = {
    name : 'SK',
    game : function() {
        return "PoP"
    }
}
console.log(myobj.game());

//-----------------

arr = ['fruit', 'vegetable', 'furniture'];

arr.forEach(function(element, index, array){
    console.log(element, index, array);

});

//Scope

var i = 234;
console.log(i);
function ui1(name7) {
    var i = 19;
    console.log(i);
    return `This is ${name7}'s UI`;
}
console.log(ui1('Jk'),i);

var j = 23;
console.log(j);
function ui2(name8) {
     j = 9;
    console.log(j);
    return `This is ${name8}'s UI`;
}
console.log(ui2('Sk'),j);