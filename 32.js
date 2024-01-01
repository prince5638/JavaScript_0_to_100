// while loop in array

const fruits = ["apple", "banana", "graps", "mangos"];
const fruits2 = [];
let i = 0;
while(i < fruits.length)
{
    // console.log(fruits[i]);
    fruits2.push(fruits[i].toUpperCase());
    i++;
}

console.log(fruits2);