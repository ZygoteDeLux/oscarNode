"use strict";


//totLGlobalVariable = "Never Ever!!! Do this!!!";
var GlobalVariable = "also never do thus!!";

//cant do this
//const isThisAConstant

//cant do this
//const isThisAConstant = 123;
//isThisAConstant = 456;

//can't
// let test2;
// let test2;
// can
// var test;
// var test;

const isThisConstant = [];
isThisConstant.push(1,2,3);
console.log(isThisConstant);

const anotherConstant = {};
anotherConstant.valueChange = true;
console.log(anotherConstant);

//global scope

console.log(GlobalVariable);

function anotherScope(){
    //function scope
}

{
    //block scope
}

{
    console.log("hello i am in a block scope")
}



{
    var someVariable = true;
    {
        var someVariable = false;
    }
    console.log(someVariable);
}


{
    let someVariable1 = true;
    {
        let someVariable1 = false;
    }
    console.log(someVariable1);
}
/*

for(var i = 0; i <= 5; i++){
    setTimeout(()=> {
        console.log(i);
    
    }, 1000);
}
*/

for(let i = 0; i <= 5; i++){
    setTimeout(()=> {
        console.log(i);
    
    }, 1000);
}