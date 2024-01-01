// short syntax of funciton in object.

const user1 = {
    firstName : "Prince",
    age: 4,
    about(){
        console.log(this);
        console.log("Name: "+ this.firstName, ",age: " + this.age);
    }
};

user1.about();