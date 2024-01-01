// primitive vs reference data type

// Primitive data types
let num1 = 6;
let num2 = num1;

console.log("The num1 value is: ", num1);
console.log("The num2 value is: ", num2);

num1++;

// value after incrementing the num1.
console.log("The num1 value is: ", num1);
console.log("The num2 value is: ", num2);


// reference data types
// Till now we know the reference type is array.

// --> Explaination:
//      Here once we create the array1 we stores it in an heap memory and the pointer with the address of array1 is also stored at the stack.
//      Once we create the another array named as array2 and we assign the array2 = array1 then it will also stores the pointer with the address array1 and stores that pointer in the stack.
//      it means two diffrent pointer pointing to the same array address from the heap memory.

let array1 = ["item1", "item2"];
let array2 = array1;

console.log("array1: ",array1);
console.log("array2: ",array2);

array1.push("item3");
array2.push("item4");
console.log("added one element at the last i.e 'item3'!");
console.log("array1: ",array1);
console.log("array2: ",array2);