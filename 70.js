// Optional Chaining

const user = {
    firstName: "Prince",
    address: {houseNumber: '1234'}
}

console.log(user?.firstName);
console.log(user?.address?.houseNumber);