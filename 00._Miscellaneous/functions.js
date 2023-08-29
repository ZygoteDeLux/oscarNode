//hoisting
/*
console.log(getRandomInt());

function getRandomInt(min,max){
    return Math.floor(Math.random()*(max+1-min)+min)
}

const getRandomIntAnonymousFunction = function(min,max){
    return Math.floor(Math.random()*(max+1-min)+min)

}

const getRandomInArrowFunction = (min,max)=>{
    return Math.floor(Math.random()*(max+1-min)+min)

}
*/
/*

*/
function genericActionPerformer(genericAction, name){
    // Do things..
    return genericAction(name);
}

const jump = (name) => `${name} is jumping`;
console.log(genericActionPerformer(jump, "Lasse"));


const run = (name)=> `${name} is running`;
console.log(genericActionPerformer(run, "Lasse"));

const sleep = (name) => `${name} is sleeping`;
console.log(genericActionPerformer(sleep,"Daniel"));

console.log(genericActionPerformer(name => `${name} is sleeping`, "Daniel"));