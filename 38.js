// How to iterate object.

const person = {
    name: "NoName",
    age: 21,
    "Person Hobbies": ["guiter", "sleeping", "listening music"]
}

// by two way we can iterate the object 
// 1) using the for in loop

// for(let key in person)
// {
    // console.log(person[key]);
    // console.log(`${key} : ${person[key]}`);
    // console.log(key, " : ",person[key]);
// }
    
// 2) Object.keys
console.log(Object.keys(person));
// console.log(typeof(Object.keys(person)));
const val = Array.isArray(Object.keys(person));
console.log(val);

// Iterating the key array of the array to access the value using the for of loop.
for(let key of Object.keys(person))
{
    console.log(person[key]);
}