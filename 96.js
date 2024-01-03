// let and const are also support hoisting 
// let and const are there in global execution context but they are uninitialised, due to which they are not accessible before initialization.

console.log(myVar); // Cannot access 'myVar' before initialization
let myVar = "Variable";
console.log(myVar);

// Temporial Dead Zone (TDZ)
// the duration till when any variable is uninitialised is called as an Temporial Dead Zone