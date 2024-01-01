// some method

const number = [1, 2, 5, 7, 9];

// kya aek bhi number aisa hai jo even hai 
// true

const ans = number.some((num)=>num%2==0);

console.log(ans);


const userCart = [
    {productId:1 , productName: "Mobile", price: 1200},
    {productId:2 , productName: "Laptop", price: 22000},
    {productId:3 , productName: "Tv", price: 25000},
];

const someAns = userCart.some((cart)=>cart.price>23000);
console.log(someAns);