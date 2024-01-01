// class keyword
// class are fake

class CreateUser
{
    constructor(firstName, lastName, email, age, address)
    {
        console.log("constructor called!");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;    
    }

    about()
    {
        return `${this.firstName} is ${this.age} years old`;
    }

    is18()
    {
        return this.age >= 18;
    }
}

const user = new CreateUser("Prince", "Changani", "princechangani@gmail.com", 21, "My address");

console.log(user.about());
console.log(user.is18());

console.log(Object.getPrototypeOf(user));

// ---------------------------------------------------------------

// function CreateUser(firstName, lastName, email, age, address)
// {
//     // const user = Object.create(createUser.prototype);
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//     // return this;  this is optional (by default it returns this) 
// };

// CreateUser.prototype.about = function()
// {
//     return `${this.firstName} is ${this.age} years old`;
// }

// CreateUser.prototype.is18 = function()
// {
//     return this.age >= 18;
// }

// const user1 = new CreateUser("Prince", "Changani", "princechangani@gmail.com", 21, "my address");
// const is18 = user1.is18(); 
// const about = user1.about();
// console.log(user1); // here every time user methods will be created .. so it will occupy more space every time 
// console.log(about);
// console.log(is18);