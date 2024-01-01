// find method 
const myArray = ["Hello", "Catt", "Dog", "Lion"];

const ans = myArray.find((string)=>{
    return string.length === 3;
});

console.log(ans);

const users = [
    {usreId: 1, userName: "Prince"},
    {usreId: 2, userName: "Smit"},
    {usreId: 3, userName: "Kuldeep"},
    {usreId: 4, userName: "Jeel"},
];

const targetAns = users.find((user)=>{
    return user.usreId === 1;
});

console.log(targetAns);