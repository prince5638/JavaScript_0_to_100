// Objects
// arrays are good but not sufficient
// for real world data
// Objects stores key value pairs
// objects dont have index

// how to create object
const person = {
    name: "Prince",
    age: 22,
    // "age": 22, --> it is same as above line.
    hobbies: ["guitar", "sleeping", "listening music"]
}

console.log(person);

// accessing data from object
console.log(person.hobbies[2].toUpperCase());
console.log(person.age);

// Accessing the key value pair using the square brackets
console.log(person["name"]);  // --> in javascript object key is by default string 

// Adding key value pair in the object.
person.gender = "male";
console.log(person);

// Adding key value pair in the object using the square brackets.
person["cast"] = "hindu";
console.log(person);