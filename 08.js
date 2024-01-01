// typeof Operator
        
// data types (primitive data types)
// 1) string -- "Prince"
// 2) number -- 3, 5.4
// 3) booleans
// 4) undefined
// 5) null
// 6) BigInt
// 7) Symbol

let age = 22;
let firstName = "Prince";

console.log(typeof age); // console.log(typeof(age));
console.log(typeof(firstName)); // console.log(typeof firstName);

// Convert number to string.
age = age + "";
console.log(typeof(age));

age = String(age); // --> Convertion using inbuilt String function.
console.log(typeof age);

// Convert string to number.
let str = "23";
str = +str;

console.log(typeof str);
str = Number(str); // --> Convertion using inbuilt Number function. 
console.log(typeof str);