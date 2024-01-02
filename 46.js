// arrow function

// 1) Normal --> function declaration
// function greet()
// {
//     console.log("Hello Prince");
// }

// 2) function expression
// const greet = function()
// {
//     console.log("Hello Prince");
// }

// 3) arrow function
// const greet = ()=>{
//     console.log("Hello, Prince");
// }

// greet();

// For arrow function --> When we are having only one paramenter then we can also remove the parenthesis which is present alongside the parameters.
// const isEven = num => {
//     return num % 2 === 0;
// }

// here we have an function as isEven and it is taking num as an parameter and returning true or false from the expression (num % 2 === 0).
// const isEven = num => num % 2 === 0;

// console.log(isEven(5));

// const firstChar = (name) => {
//     return name[0];
// }

const firstChar = name => name[0];

console.log(firstChar("Prince"));