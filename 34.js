// for in loop 
// --> for in loop will give the index of the array elements.

const fruits = ["apple", "mango", "banana"];
const fruits2 = [];

for(let index in fruits)
{
    fruits2.push(fruits[index].toUpperCase());
}

console.log(fruits2);