// array destructuring
const myArray = ["Prince", "Smit" , "Param", "Jani"];

// This is the fist and easy way of accessing element of the array. 
// let myVal1 = myArray[0];
// let myVal2 = myArray[1];

// console.log("Value of myvar1 is ", myVal1);
// console.log("Value of myvar2 is ", myVal2);

// 1) Accessing the elements of the array using the array Destructurig.
// let [val1, val2, val3] = myArray; ---> here val1 , val2, val3 are acting as an variable.
// var1 = "Jenil"; // --> I can change the value of the var1 also(use the val1 as an variable)
// console.log("The value 1 is : "+val1);
// console.log("The value 2 is : "+val2);
// console.log("The value 3 is : "+val3);

// 2) Accessing the only the fist two elements using the array destructuring.
// let [val1, val2] = myArray;
// console.log("The value 1 is : "+val1);
// console.log("The value 2 is : "+val2);

// 3) Accessing first and third elements of the array by using the array destructuring.
// let [val1, , val2] =myArray;
// console.log("The value of the 1st element is: ", val1);
// console.log("The value of the 3rd element is: ", val2);

// 4) If i want 1st and 2nd element in some variables but rest elements inside the array.
const [val1, val2, ...newArray] = myArray;
console.log(val1); 
console.log(val2); 
console.log(newArray);