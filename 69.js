// clone using Object.assign

// "use strict"

const obj = {
    key1: "value1",
    key2: "value2"
};

// const obj2 = obj;
// const obj2 = {...obj}; 
const obj2 = Object.assign({}, obj); //earlier way to clone the object (This is an object oriented concept)
obj.key3 = "value3";
console.log(obj2);