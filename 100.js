// clouser example (2)

// function myFunction(power)
// {
//     return function(number)
//     {
//         return number ** power;
//     };
// };

// const square = myFunction(2);
// const ans = square(5);
// console.log(ans);

const myFunction = (power)=>( number=>(number ** power) );

const cube = myFunction(3);
const ans2 = cube(5);
console.log(ans2);