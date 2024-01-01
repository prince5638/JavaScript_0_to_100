// array is mutable ---> whereas string is immutable
// push and pop are fast as compared to shift and unshift

// 1) array push pop
// ---> pop and push ara used to perform the operation in array from the last.

let fruits = ["apple", "banana", "guava", "graps"];

// push --> To add element at the last.
// array is an mutable this push method will push the element at the last of the array
console.log(fruits);
fruits.push("mangos");
console.log(fruits);

// pop --> remove the last element from the array. The pop method is returning the last element also.
let lastEle = fruits.pop();
console.log(lastEle);
// console.log(fruits.pop());
console.log(fruits);


// 2) array shift unshift
// ---> shift and unshift are used to perform the operations on the array from the front. 

// unshift
fruits.unshift("myFruits","mangos");
console.log(fruits);

// shift --> It also return the first element which is removed.
let removedFruit = fruits.shift();
console.log(removedFruit);
console.log(fruits);

