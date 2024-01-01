// filter method
numbers = [1, 3, 2, 4, 6, 8];

function isEven(number)
{
    return number%2 === 0;
}

// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);

const evenNumbers = numbers.filter((number)=>{
    return number%2===0;
});
console.log(evenNumbers);