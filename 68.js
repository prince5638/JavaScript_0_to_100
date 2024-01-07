// map
// map is an iterable 

// stores data in ordered fashion

// stores key value pair(like object)
// duplicate keys are not allowed like object

// different between maps and objects 
// Object can only have string or symbol as key
// In map you can use anything as key Like (array, number, string)

// -----------------------------------------------------------------
// Object literals
// key -> string
// key -> symbols

// const person = {
//     firstName: "Prince",
//     age: 21,
//     1: "one"
// }

// console.log(person.firstName);
// console.log(person.age);
// console.log(person["age"]);

// console.log(person[1]);
// console.log(person["1"]);

// -----------------------------------------------------------------
// map stores key value pair
// const person = new Map();
// person.set('firstName', 'Prince');
// person.set('age', '21');
// person.set(1, "One");

// person.set([1,2,3], 'OneTwoThree');
// person.set({1: 'One'}, 'OneTwoThree');

// console.log(person);
// console.log(person.get(1));

// for(let key of person.keys())
// {
//     console.log(key, typeof key);
// }

// for(let [key, value] of person)
// {
    // console.log(Array.isArray(key));
//     console.log(key, value);
// }

const person1 = {
    id: 1,
    firstName: "Smit"
}

const person2 = {
    id: 1,
    firstName: "Princess"
}

// const person = new Map([['firstName', 'Prince'], ['age', 21]]);
// console.log(person);

const extraInfo = new Map();
extraInfo.set(person1, {age: 8, gender: "male"});
extraInfo.set(person2, {age: 8, gender: "female"});
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);

console.log(extraInfo);