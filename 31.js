// use const for creating array

// here we can change the fruits array by using the push, pop, shift and unshift function... because we are not changning the address of fruits array which is allocated in heap memory.

// suppose fruits have an address of the array that is "xo11" then it is not going to change the address of the array where is stored while adding the element at the end using the push function.

const fruits = ["apple", "banana", "graps"];
fruits.push("mangos");
// fruits = ["orange", "guava"]; --> it is not possible because it is constant.

console.log(fruits);

// Generally we will make the reference data type(like array) as an constant only.