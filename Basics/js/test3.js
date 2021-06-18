/*Primitive Data Types*/

//String
let name = "Jk";
console.log("My Name is :" +name);
console.log("Data Type is :" + (typeof name));

//Numbers
let age = 23;
console.log("Data Type is :" +(typeof age));

//Boolean
let isValidVoter = true;
console.log("Data Type is :" + (typeof isValidVoter));

//null
let nullVar = null;
console.log("Data Type is :" + (typeof nullVar));

//Undefined
let undef = undefined;
console.log("Data Type is :" + (typeof undef));

/*Reference Data Types*/

//Arrays
var myarr = [1,2,3,4];
console.log("Data Type is :" + (typeof myarr));

var myarr = [1,2,3,4, false, "heloo",[1,2,3]];
console.log("Data Type is :" + (typeof myarr));

//Object Literals
let studMarks = {
    Jk : 90,
    John : 85,
    kary : 82
}
console.log("Data Type is :" + (typeof studMarks));

//functions
function findName() {
    
}
console.log("Data Type is :" + (typeof findName));

//Date
let date = new Date();
console.log("Data Type is :" + (typeof date));

//Memory of Refernce Data Types is stored in Heap