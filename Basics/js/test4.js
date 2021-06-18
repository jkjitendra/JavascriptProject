
//Type Conversion and Type Coercion

let myVar;
myVar = String(34);
console.log(myVar, (typeof myVar)); //34 string

let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));// true string

let date = String(new Date());
console.log(date, (typeof date));
//Fri May 21 2021 20:55:59 GMT+0530 (India Standard Time) string

let arr = [1,2,3,4];
console.log(arr, arr.length, (typeof arr));
//Array(4) [ 1, 2, 3, 4 ]4 object

let arr1 = String([1,2,3,4]);
console.log(arr1, arr1.length, (typeof arr1)); //1,2,3,4 7 string

let i = 75;
console.log(i.toString(), (typeof i)); //75

let stri = Number("3434");
console.log(stri, (typeof stri)); //3434 number

let stri1 = Number("343d4");
console.log(stri1, (typeof stri1));  //NaN number

let stri2 = Number(true);
console.log(stri2, (typeof stri2));// 1 number


let stri3 = Number([1,2,3,4]);
console.log(stri3, (typeof stri3));//NaN number

let number = parseInt('34.098');
console.log(number, (typeof number));// 34 number

let number2 = Number('34.098');
console.log(number2, (typeof number2));//34.098 number

let number3 = parseFloat('34.098');
console.log(number3, (typeof number3)); //34.098 number

console.log(number3.toFixed(20), (typeof number3));//34.09799999999999897682 number


/*         Type Coercion           */

let mystr = "698";
let mynum = 34;
console.log((mystr + mynum)); //69834

let mystr1 = Number("698");
let mynum1 = 34;
console.log((mystr1 + mynum1)); //732