const user1 = {
    firstName: "Prince",
    age: 21,
    about: function()
    {
        console.log(this);
        console.log(this.firstName, this.age);
    }
}

// don't do this mistake

// user1.about(); // It works!
// const myfunc = user1.about();
const myFunc = user1.about.bind(user1);
myFunc();
