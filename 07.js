// Strings Method's

// 1) trim()
// 2) toUpperCase()
// 3) toLowerCase()
// 4) slice()

// 1) trim() --> remove the white spaces from the front and back of the string.
let firstName = "   Prince   ";
console.log(firstName);

firstName = firstName.trim(); // Strigs are "immutable", this line will create an new string and pass it to an firstName again
console.log(firstName);

// 2) toUpperCase() --> convert the string into an uppercase.
firstName = firstName.toUpperCase();

console.log(firstName);

// 3) toLowerCase() --> convert the string into an uppercase.
firstName = firstName.toLowerCase();

console.log(firstName);

// 4) slice() --> It return the part of the string.
firstName = firstName.slice(1,5);  //rinc --> here 1st parameter is included and the second parameter is excluded.

console.log(firstName); 

firstName = firstName.slice(2); //nc
console.log(firstName);