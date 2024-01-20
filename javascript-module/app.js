import { firstName} from "./utils/fname.js";
// import { firstName as fName } from "./utils/fname.js";
import { age } from "./utils/age.js";
// import { Person } from "./utils/Person.js";
import personInfo,{Person2} from "./utils/Person.js"; // This is default export ... here no need to use the {} and we can also gave the another name to the Person (like: p/personDetail etc.) because it is export default.

console.log("First name is: "+firstName); // using the same name as exported 
// console.log("First name is: "+fName); // using the updated name 
console.log(`${firstName} age is ${age}`);

const p1 = new personInfo("Prince", 'Changani', 21);
p1.info();

const p2 = new personInfo("Smit", "Borsadiya", 21);
p2.info2();