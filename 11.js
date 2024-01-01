// undefined
// null
// BigInt

// 1) undefined
let firstName;
console.log(typeof firstName);

firstName = "Prince";
console.log(typeof firstName, firstName);

const lastName = "Changani"; // --> constant keyword must have an value, it cannot be undefined. 
console.log(lastName);

// 2) null
let myVariable = null;
console.log(myVariable);

myVariable = "Name";
console.log(myVariable, typeof myVariable);

console.log(typeof null); //-> error, bug (here type is object);


// 3) BigInt
console.log(Number.MAX_SAFE_INTEGER);
// --> If we want the more value then the MAX number value then we use the BigInt primitive data type.

let num = BigInt(12);
let num1 = 123n; // --> another way to define the BigInt data.
let num2 = 23;

console.log(num);
console.log(num + num1);
// console.log(num1 + num2); // --> This will give error (cannot mix BigInt and other data type, use explicite convertion).