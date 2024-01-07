// Iterabel
// jispe hum for of loop laga sake
// string, array are iterable

const firstName = "Prince";

for(let char of firstName)
{
    console.log(char);
}

const item = ['item1', 'item2', 'item3'];
for(let i of item)
{
    console.log(i);
}

// Array like object
// jinke pass length property hoti hai
// or jinko ham indes se access kar sakate hai.
// example : string

const firstNames = "prince"; 
console.log(firstNames.length);
console.log(firstNames[2]);

console.log(item.length);