// for loop in array
let fruits = ["apple", "graps", "mangos", "banana"];
let fruits2 = [];

console.log("The length of the fruits array is: ",fruits.length);

for(let i = 0; i < fruits.length; i++)
{
    fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2);