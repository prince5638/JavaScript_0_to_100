// splice method 
// start, delete, insert

const myArray = ['item1', 'item2', 'item3'];

// delete
const deleted_item = myArray.splice(1, 1);
console.log(deleted_item);
console.log(myArray);

// insert
myArray.splice(1, 0, "inserted_item"); 
console.log(myArray);

// delete insert together
const deltedtogether = myArray.splice(2, 1, "inserted_item3", "inserted_item4");
console.log(myArray);
console.log(deltedtogether);

// just trying for the array destructuring!
// let str = "Prince";
// let [a, b] = str;
// console.log(a);