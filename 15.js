// ternary operator

// problem: if the age of the child is below 5 then strore milk in drink varible else store coffee.

// 1) it can be done using the if else also

let age = 85;
let drink; // initially it is kept unidefined.

// if(age <= 5)
// {
//     console.log("milk");
// }
// else{
//     console.log("coffee");
// }

// 2) using ternary operator condition

drink = age <= 5 ? "milk" : "coffee";

console.log(drink);
 


// swapping of two number without using third variable
// let a = 5;
// let b = 6;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log("the value of a is: " + a);
// console.log("The value of b is: " + b);