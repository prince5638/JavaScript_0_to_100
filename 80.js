const obj1 = {
    key1: "value1",
    key2: "value2"
}

// const obj2 = {
//     key3: "value3"
// }

// console.log(obj2.key1);  // it is giving undefined. but if we want that it should fetch the key1 from the object1 then we have to create an object by another trick.

// creating an object by another method
const obj2 = Object.create(obj1);
obj2.key3 = 'value3';

console.log(obj2);

// Official Ecmascript documentation
// __proto__ , [[prototype]]
console.log(obj2.__proto__);

// prototype is a new concept