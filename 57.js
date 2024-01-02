// map method
const numbers = [3, 4, 5, 6, 7];

// const square = function(number){
//     return number * number;
// }

// const squareNumber = numbers.map(square);
// console.log(squareNumber);

const squareNumber = numbers.map((number, index)=>{
    return `At ${index} index : ${number * number}`;
})
console.log(squareNumber);

const users = [
    {firstName: "Prince" ,age: 21},
    {firstName: "Smit" ,age: 21},
    {firstName: "Kuldeep" ,age: 20},
];

const userName = users.map((user)=>{
    return user.firstName;
})

console.log(userName);