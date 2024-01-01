// arrow function

const user1 = {
    firstName: "Prince",
    age: 8,
    about: () => {
        console.log(this); // It gives an neighbour/one_Level_up this value. 
        console.log(this.firstName, this.age);
    }
}

user1.about(user1);