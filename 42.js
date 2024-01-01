// Object inside array
// very useful in real world application

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

console.log(users);

for(let user of users)
{
    console.log(user.firstName);
}