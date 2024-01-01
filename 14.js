// if else Condition

let age = 19;

if(age >= 18)
{
    console.log("User can paly BGMI!");
}
else{
    console.log("User cannot play BGMI");
}

// odd even check
let num = 30;

if(num%2 === 0)
{
    console.log("even");
}
else{
    console.log("odd");
}

// falsy values
// 1) false
// 2) 0
// 3) ""
// 4) null
// 5) undefined

// let firstName; //This is undefined
let firstName = "";
firstName = false;
firstName = 0;
firstName = null;

if(firstName)
{
    console.log("The first name is: " + firstName);
}
else{
    console.log("The firstName is kind a empty!");
}

// truthy values
// "rsjbfr"
// 1, -1
firstName = "Prince";
firstName = 1;
firstName = -1;

if(firstName)
{
    console.log("The first name is: " + firstName);
}
else{
    console.log("The firstName is kind a empty!");
}