// every method
const numbers = [2, 4, 6, 8, 10];

function isEven(number)
{
    return number % 2 === 0;
}

const ans = numbers.every(isEven);
console.log(ans); 

// callback function --> true / false (boolean)

// every method --> true / false (boolean)

const userCart = [
    {productId:1 , productName: "Mobile", price: 1200},
    {productId:2 , productName: "Laptop", price: 22000},
    {productId:3 , productName: "Tv", price: 25000},
];

const allPrice = userCart.every((product)=>product.allPrice < 30000);
console.log(allPrice);