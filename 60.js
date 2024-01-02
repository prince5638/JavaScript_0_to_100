// Sort method in javascript
// --> It changes the actual array and returns that.

const numbers = [1, 5, 9, 3, 200, 156, 400];

// It sorts according to the ASCII values .... it consider numbers as an string and then sort.
// const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

// Actual sorting.
const sortedNumbers = numbers.sort((a, b)=>{
    return a - b;
});
console.log(sortedNumbers);

// RealLife use of the sort method in javascript
const products =  [
    {productId: 1, productNam: "p1", price: 1002},
    {productId: 2, productNam: "p2", price: 1102},
    {productId: 3, productNam: "p3", price: 2003},
    {productId: 4, productNam: "p4", price: 50},
    {productId: 5, productNam: "p5", price: 562},
    {productId: 6, productNam: "p6", price: 800},
];

// to prevent the chnages in the actual array here we have used an slice method to create an clone of the array and then perform the sort method on that array.
const highToLow = products.slice(0).sort((a,b)=>{
    return a.price - b.price;
})
console.log(highToLow);

const lowToHigh = products.slice(0).sort((a,b)=>{
    return b.price - a.price;
})

console.log(lowToHigh);

// console.log(products);