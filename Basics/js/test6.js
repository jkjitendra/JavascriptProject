
let marks = [34, 23, 24, 94, 83, 36];
const fruits = ['Orange', ' Apple', 'Pineapple'];
const mixed = ['str', 89, [3,5]];

const arr = new Array(23, 34, 45, 'Orange');

console.log(arr); //Array(4) [ 23, 34, 45, "Orange" ]
console.log(mixed); //Array(3) [ "str", 89, (2) […] ]
console.log(fruits); //Array(3) [ "Orange", " Apple", "Pineapple" ]

console.log(fruits[1]);// pple
console.log(arr.length);//4
console.log(Array.isArray(arr));//true
console.log(Array.isArray('gdsgg'));//false

console.log(arr);//Array(4) [ 23, 34, 45, "Orange" ]
arr[0] = 'Jk';
console.log(arr);//Array(4) [ "Jk", 34, 45, "Orange" ]

let arrElement = arr[0];
console.log('element : ', arrElement);//element :  Jk

let value = marks.indexOf(36);
console.log(value); //5

marks.push(345);
console.log(marks); //Array(7) [ 34, 23, 24, 94, 83, 36, 345 ] {push adds element at the end}

marks.unshift(0);
console.log(marks);//Array(8) [ 0, 34, 23, 24, 94, 83, 36, 345 ] {unshift adds element at the front}

marks.pop();
console.log(marks);//Array(7) [ 0, 34, 23, 24, 94, 83, 36 ] {pop removes element from the end}

marks.shift();
console.log(marks);//Array(6) [ 34, 23, 24, 94, 83, 36 ] {shift removes the element from the front}

marks.splice(1,2);
console.log(marks);//Array(4) [ 34, 94, 83, 36 ] {splice removes from starting index given and removes total number of elements given as second parameter}

marks.reverse();
console.log(marks); //Array(4) [ 36, 83, 94, 34 ] {reverses the array}

let marks3 = [34, 23, 24, 94, 83, 36];
let marks2 = [1,2,3,7];
marks3 = marks3.concat(marks2);
console.log(marks3);//Array(10) [ 34, 23, 24, 94, 83, 36, 1, 2, 3, 7 ]


let myobj = {
    name : 'Jk',
    city : 'Madhya Pradesh',
    age : 23,
    isActive : true,
    marks : [1,2,3,4] 

}
console.log(myobj);//Object { name: "Jk", city: "Madhya Pradesh", age: 23, isActive: true, marks: (4) […] }
console.log(myobj.isActive); //true
console.log(myobj.city);//Madhya Pradesh
console.log(myobj['city']);//Madhya Pradesh