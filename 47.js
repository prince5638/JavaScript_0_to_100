// hoisting

// the fucntion calling before declarationis is working in the case of the normal fucntion declaration only and neither in the funciton expression nor in the arrow function.

// hello();

// function hello()
// {
//     console.log("Hello!");
// }

// --> uncaught reference hello is not defined
// let hello = ()=>{
//     console.log("Hello!");
// }

// --------------

// case - 1
// console.log(hello);
// var hello = "Hello World";
// console.log(hello);

// case - 2
// console.log(hello);
// let hello = "Hello World";
// console.log(hello);

// case - 3
// console.log(hello);
// const hello = "Hello World";
// console.log(hello);