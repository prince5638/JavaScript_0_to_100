// new keyword

// learning new using an sample eg. 
// function createUser(firstName, age)
// {
//     // console.log(this); ==> It cretes an empty object.
//     this.firstName = firstName;
//     this.age = age;
// }

// const user1 = new createUser("Prince", 21);
// console.log(user1);

// new keyword 
// 1.) creates an empty object this = {}
// 2.) return this object 
// 3.) here new keyword automatically creates an prototypes without write an separate code for that.... as we have done in 82.js file (Object.create(createUser.prototype)).



function CreateUser(firstName, lastName, email, age, address)
{
    // const user = Object.create(createUser.prototype);
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    // return this;  this is optional (by default it returns this) 
};

CreateUser.prototype.about = function()
{
    return `${this.firstName} is ${this.age} years old`;
}

CreateUser.prototype.is18 = function()
{
    return this.age >= 18;
}

const user1 = new CreateUser("Prince", "Changani", "princechangani@gmail.com", 21, "my address");
const is18 = user1.is18(); 
const about = user1.about();
console.log(user1); // here every time user methods will be created .. so it will occupy more space every time 
console.log(about);
console.log(is18);