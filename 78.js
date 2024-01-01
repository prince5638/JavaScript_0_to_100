// store method in different object

// creting object for storing all the methods.
const userMethods = {
    about : function()
    {
        return `${this.firstName} is ${this.age} years old`;
    },
    is18 : function()
    {
        return this.age >= 18;
    }
}
function createUser(firstName, lastName, email, age, address)
{
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address; 
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
};

const user1 = createUser("Prince", "Changani", "princechangani@gmail.com", 21, "my address");
const is18 = user1.is18(); 
const about = user1.about();
console.log(user1); // here every time user methods will be created .. so it will occupy more space every time 
console.log(is18);
console.log(about);
