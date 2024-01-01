let numbers = [1, 2, 3, 4];
// console.log(numbers.sort());

// let numbers = new Array(1,2,3);
// let numbers = [1, 2, 3, 4];
console.log(Array.prototype);
console.log(Object.getPrototypeOf(numbers)); //to know the all __proto__

// we can also change the prototype type like. from array to obeject and anything 
console.log(numbers.__proto__);
numbers.__proto__ = {};
console.log(numbers.__proto__);
