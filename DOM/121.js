// this keyword
const btn = document.querySelector(".btn-headline");
// console.log(btn);
// function myFunc()
// {
//     console.log("Value of this is: ");
//     console.log(this);
// }
// btn.addEventListener("click", myFunc);

// btn.addEventListener("click",function()
// {
//     console.log("Value of this is: ");
//     console.log(this);
// });

// arrow function
btn.addEventListener("click",()=>
{
    console.log("Value of this is: ");
    console.log(this);
});
