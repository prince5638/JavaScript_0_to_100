// reduce method
numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
})
console.log(sum);

// accumulator currentValue  return 
//      1           2           3
//      3           3           6
//      6           4           10
//      10          5           15

const userCart = [
    {
        productId: 1,
        productName: "mobile",
        price: 15000
    },
    {
        productId: 2,
        productName: "laptop",
        price: 45000
    },
    {
        productId: 3,
        productName: "TV",
        price: 25000
    }
];

const total = userCart.reduce((totalPrice, productPrice)=>{
    return totalPrice + productPrice.price;
}, 0);

console.log(total);