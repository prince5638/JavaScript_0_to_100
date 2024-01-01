// 1) how to clone array 
let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];

// 1.1) first way to clone array (fastest among all the three ways).
// let array2 = array1.slice(0);

// 1.2) second way to clone the array
// let array2 = [].concat(array1);
 
// 1.3) third way to clone the array using the (spread operator --> ...)
let array2 = [...array1];

array1.push("item3"); 

console.log(array1 === array2);
console.log("Array1: ",array1);
console.log("Array2: ",array2);

// 2) how to conactenate two array

let array3 = ["item1", "item2"];
let onemoreArray = ["item3", "item4"];
// let array4 = [].concat(array3).concat(["item3", "item4"]);
// let array4 = array3.slice(0).concat(["item3", "item4"]);
// let array4 = array3.slice(0).concat(onemoreArray);
// let array4 = [...array3].concat(["item3", "item4"]);
// let array4 = [...array3, "item3", "item4"];
let array4 = [...array3, ...onemoreArray];

console.log(array3 === array4);
console.log("Array3: ",array3);
console.log("Array4: ",array4);