// Create own methods

// method
// function inside object is called method.

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
    console.log(this);
};

const person = {
    firstName: "Prince",
    age: 21,
    about: personInfo 
};
person.about();

const person1 = {
    firstName: "Smit",
    age: 21,
    about: personInfo
};
person1.about();

const person2 = {
    firstName: "Kuldeep",
    age: 21,
    about: personInfo
};
person2.about();