// creting object for storing all the methods.
// const userMethods = {
//     about : function()
//     {
//         return `${this.firstName    } is ${this.age} years old`;
//     },
//     is18 : function()
//     {
//         return this.age >= 18;
//     }
//     // you can add 1000 more method's
// }

function createUser(firstName, lastName, email, age, address)
{
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    // for every method in usermethod object we have to write one line in this function which is difficult.
    // so, next file is the solution to this.
    return user;
};

createUser.prototype.about = function()
{
    return `${this.firstName    } is ${this.age} years old`;
}

createUser.prototype.is18 = function()
{
    return this.age >= 18;
}

const user1 = createUser("Prince", "Changani", "princechangani@gmail.com", 21, "my address");
const is18 = user1.is18(); 
const about = user1.about();
console.log(user1); // here every time user methods will be created .. so it will occupy more space every time 
console.log(is18);
console.log(about);