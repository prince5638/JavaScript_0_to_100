// What happens to function declaration

// Global Scope 
// 1.) firstName
// 2.) lastName
// 3.) fullName
// 4.) myFunction = function bodyn

console.log(window);
console.log(this);
console.log(myFunction);
console.log(fullName);

myFunction();

function myFunction()
{
    console.log("this is my function"); 

}

var firstName = "Prince";
var lastName = "Changani";
var fullName = firstName + " " +lastName;
console.log(fullName);