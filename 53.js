// param destructuring

// more used with
// 1) Object
// 2) react

const person = {
    firstName: "Prince",
    gender: "male",
    age: 21
}

// printing using the normal ways by using the dot operators.
// function printDetails(obj)
// {
//     console.log("First name is: ", obj.firstName);
//     console.log("Gender is: ", obj.gender);
//     console.log("Age is: ", obj.age);
// }

// printing detail of the person using param destructuring. 
function printDetails({firstName, gender, age})
{
    console.log("First name is: ", firstName);
    console.log("Gender is: ", gender);
    console.log("Age is: ", age);
}

printDetails(person);