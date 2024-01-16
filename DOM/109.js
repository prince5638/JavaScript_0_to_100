// loop

// get multiple elements using getElements by class name
// get multiple elements item using querySelectorAll

// We can't use forEach method to iterate through HTMLCollection  
// Simple for loop 
// for of loop 
// forEach

let navItems = document.getElementsByTagName('a');
// console.log(navItems);

// Simple for Loop
for(let i = 0; i < navItems.length; i++)
{
    const navItem = navItems[i];
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
}

// for of loop
// for(let navItem of navItems)
// {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }


// Converting ArrayList to array
// navItems = Array.from(navItems); 
// console.log(Array.isArray(navItems));

// forEach
// Now we can use forEach loop 
// navItems.forEach((navItem)=>{
//         navItem.style.backgroundColor = "#fff";
//         navItem.style.color = "green";
//         navItem.style.fontWeight = "bold";
// });


// let navItems = document.querySelectorAll('a'); //It returns NodeList
// console.log(navItems);

// With NodeList we can use simple for loop, for of loop and forEach loop aswell. 

// We can also convert the NodeList into an array
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));