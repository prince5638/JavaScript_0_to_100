// important array method

// 1) foreach 
// 2) map
// 3) filter
// 4) reduce

const numbers = [1, 3, 5, 7, 4, 2];

// Performing operation on every index of the array manually.
function myFunc(number, index)
{
    console.log(`Index is ${index} and  number is ${number}`);
    console.log(`${number}*2 = ${number*2}`);
}

// function works as an foreach.
// for(let i = 0; i < numbers.length; i++)
// {
//     myFunc(numbers[i], i);
// }

// numbers.forEach(myFunc);

// we can defined the funciton in foreach also (which is called as an anonymous--> function without name is called as an anonymous funciton)
// numbers.forEach(function(number, index){
//     console.log(`index is ${index} number is ${number}`);
// })

// multiply the each elements of the array with the 2.
// numbers.forEach(function(number, index){
//     console.log(`The ${index} index becomes ${number} * 2 = ${number*2}`);
// })

// using the arrow function
// numbers.forEach((number, index)=>{
//     console.log(`The ${index} index becomes ${number} * 2 = ${number*2}`);
// })

const users = [
    {firstName: "Prince", age: 21},
    {firstName: "Smit", age: 21},
    {firstName: "Kuldeep", age: 21},
    {firstName: "Jenil", age: 28},
    {firstName: "Yug", age: 16},
];

// for(let user of users)
// {
//     console.log(user.firstName);
// }

users.forEach(function(user)
{
    console.log(user.firstName);
});

users.forEach(user=>{
    console.log(user.firstName);
});