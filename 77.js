// const user = {
//     firstName: "Prince",
//     lastName: "Changani",
//     email: "princechangani@123.com",
//     age: 21,
//     address: "Dhutarpar, jaypur plote, jamnagar, gujrat",
//     about: function()
//     {
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18: function()
//     {
//         return this.age >= 18;
//     }
// }

// funciton (that function create object)
// 2.) add key value pair
// 3.) object ko return krega

function createUser(firstName, lastName, email, age, address)
{
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address; 
    user.about = function()
    {
        return `${this.firstName} is ${this.age} years old`;
    }
    user.is18 = function()
    {
        return this.age >= 18;
    }
    return user;
};

const user1 = createUser("Prince", "Changani", "princechangani@gmail.com", 21, "my address");
const is18 = user1.is18(); 
const about = user1.about();

console.log(user1);
console.log(is18);
console.log(about);