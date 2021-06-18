// Loops

//for
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let a = 34;
a += 1;
b = a++;
console.log(a, b);
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//while
let j = 0;
while (j < 4) {
    console.log(j);
    j++;
}
//while
let k = 20;
while (k<10) {
    console.log(k);
    k++;
}
//do while
let l = 20;
do{
    console.log(k);
    k++; 
}while (k<10);

//Break
 
let m = 0;
do{
    console.log(m+1);
    if(m ===5){
        m+=1;
        break;
    }
 
    m+=1;
}while (m<10);
console.log('done');

//Continue

let n = 0;
do{
    if(n === 5){
        n+=1;
        continue;
    }
    console.log(n+1);
    n+=1;
}while (n<10);
console.log('done');

//forEach

let arr = [2,3,4,5,6,7];

arr.forEach(function (element) {
    console.log(element);
});


let obj = {
    name:'Jk',
    age: 23,
    type:'DW',
    OS:'Ubuntu'
}

for(let key in obj){
console.log(`The ${key} of object is ${obj[key]}`);
}

