//Use const whenever possible
const scheduledBreakTime = "09:27";
let consoleLogCounter = 0;

//Use comma in console log
console.log("lets take a break at: ", scheduledBreakTime);
consoleLogCounter++;

//Datatyper i javascript: String, Number, Boolean, Symbol, Biginteger,
// undefined, null, Object: Object, Array, date. 

//Type Coercion

//the 3 ways

console.log("this is the first '''''' way");
console.log('this is the secend """" way');
console.log(`this is the third """ ''''' way ${scheduledBreakTime}.`);
consoleLogCounter += 3;

console.log(consoleLogCounter);