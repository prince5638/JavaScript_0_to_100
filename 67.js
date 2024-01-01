// Set (it is iterable)
// store data
// sets also have its own method.
// no index based access
// oreder is not guaranteed
// unique items only (no duplicates allowed)

// const item = ["item1", "item2", "item3"];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(item);

// console.log(numbers);

// if(numbers.has(1))
// {
//     console.log("1 is present");
// }
// else{
//     console.log("1 is not present");
// }

// for(let number of numbers)
// {
//     console.log(number);
// }

const myArray = [1, 2, 3, 4, 5, 6];
const uniqueElements = new Set(myArray);
let length = 0;
for(let element of uniqueElements)
{
    length++;
}
console.log(length);