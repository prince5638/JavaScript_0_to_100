// nested destructuring

const users = [
    {
        userId: 1,
        firstName: "Prince",
        gender: "male"
    },

    {
        userId: 2,
        firstName: "Smit",
        gender: "male"
    },

    {
        userId: 3,
        firstName: "Kuldeep",
        gender: "male"
    }
];

// const [user1, user2, user3] = users;

// console.log(user1);
// console.log(user2);
// console.log(user3);

// Object destructuring.
const [{gender: firstUserGender, firstName: firstUserName}, , {gender: thirdUserGender, firstName: thirdUserName}] = users;

console.log(firstUserGender);
console.log(firstUserName);
console.log(thirdUserGender);
console.log(thirdUserName);