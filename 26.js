// Arrays -> oredered collection of items.
// array is an reference data type --> which means it is an object.

let fruits = ["apple", "banana", "mango", "graps"];
console.log(typeof fruits);  // array is an type of object
console.log(fruits[3]);
fruits[1] = "guava";
console.log(fruits);

// In javascript we can store many combination types of data types element's in array
let mixed = [1, 2, 3.4, "Prince", null, undefined];
console.log(mixed);
console.log(typeof mixed[3]);

let obj = {}; // This is called an object literals. 
console.log(typeof obj);
console.log("obj is an array: ",Array.isArray(obj));

// to check any array is an array or not
console.log("fruits is an array: ",Array.isArray(fruits));