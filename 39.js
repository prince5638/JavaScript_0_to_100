// Computed properties

const key1 = "Objkey1";
const key2 = "Objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2"
// }

// If i want to create the above object using the above keys and values defines in the variables.
// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }

// console.log(obj);
const obj = {};
obj[key1] = value1;
obj[key2] = value2;
console.log(obj);