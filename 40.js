// Spread Operator

// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// const newArray = [...array1, ...array2, 46];
// const newArray1 = [...array1, array2];
// const newArray2 = [...array1, array2, 78];
// const newArray3 = [..."abc"];
// const newArray4 = [..."123456789"];

// console.log(newArray);
// console.log(newArray1);
// console.log(newArray2);
// console.log(newArray3); // --> [a, b, c] 
// console.log(newArray4); // --> [1, 2, 3, 4, 5, 6, 7, 8, 9] 

// Spread Operator in Object.
const obj1 = {
    key1: "value1", //This key value will be override by value "value56".
    key2: "value2",
    key1: "value56" //This key value will be override by value= "LastObjKey1".
}

const obj2 = {
    key1: "LastObjKey1",
    key3: "value3",
    key4: "value4"
}

// const newObject = {
//     ...obj1, 
//     ...obj2,
//     key5: "value5"
// }

// console.log(newObject);

// const newObject1 = {
//     ..."abc"
// }
// console.log(newObject1);

// const newObject2 = {
//     ..."abcdefghijklmnopqrstuvwxyz"
// }
// console.log(newObject2);
// console.log(newObject2[6]);

const newObject3 = {
    ...["Prince", "Smit", "Kuldeep", "Jenil"]
}
console.log(newObject3);    