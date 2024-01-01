// this keyword

// console.log(this);
// console.log(window);

// "use strict";
function myFunc()
{
    console.log(this);
}

console.log(this);
myFunc(); // It gives undefined as an Output when i am using an strict mode