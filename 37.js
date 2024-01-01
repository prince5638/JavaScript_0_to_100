// Difference between bracket and dot notaion

// We cannot use the spaces in key name of the object.
const person = {
    name: "NoName",
    age: 21,
    "Person Hobbies": ["guiter", "sleeping", "listening music"]
}

// console.log(person.Person Hobbies) ---> here we cannot use the dot operator.

console.log(person["Person Hobbies"]);

const key = "email";

// person.key = "princechangani@gmail.com";
person[key] = "princechangani@gmail.com";
console.log(person);