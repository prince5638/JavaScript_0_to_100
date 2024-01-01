// block scope vs fucntion scope

// let and const are block scope

// if(true)
// {
//     if(true)
//     {
//         let firstName = "Prince";
//         const lastName = "Changani";
//         console.log(firstName+" "+lastName);
//     }
// }

// console.log(firstName+" "+lastName);  // ->> error 


// var is function scope.

function myApp()
{
    if(true)
    {
        var firstName = "Prince";
        console.log(firstName);
    }

    if(true)
    {
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();