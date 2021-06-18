const age = 19;

if(age == 19){
    console.log('Age is 19');
}
else{
    console.log('Age is not 19');
}

const age2 = '65';
if(age2 === 19){
    console.log('Age is 19');
}
else if(age2 === 65){
    console.log('Age is 65');
}
else{
    console.log('Age is not 65 and 19');
}

if(typeof var1 !== 'undefined'){
    console.log('Var1 is defined');
}
else{
    console.log('Var1 is not defined');
}

const doesDrive = true;
if(doesDrive){
    console.log('You can drive');
}
else{
    console.log('You cannot drive');
}


if(doesDrive && age >= 18){
    console.log('You can drive');
}
else{
    console.log('You cannot drive');
}

console.log(age == 45?'Age is 45': 'Age is not 45'); 

//Switch statement
const age4 = 38;
switch(age4){
    case 18: console.log("you are 18");
    break;
    case 28: console.log('You are 28');
    break;
    
    case 38: console.log('You are 38');
    default: console.log('Your age is unknown');
}

const age5 = 38;
switch(age5){
    case 18: console.log("you are 18");
    break;
    case 28: console.log('You are 28');
    break;
    case 38: console.log('You are 38');
    break;
    default: console.log('Your age is unknown');
}

const age6 = 37;
switch(age6){
    case 18: console.log("you are 18");
    break;
    case 28: console.log('You are 28');
    break;
    default: console.log('Your age is unknown');
    case 38: console.log('You are 38');
    break;
}