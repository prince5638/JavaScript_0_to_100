// intro to events

// event add karneke 3 tarike hai

// 1.) 
// by adding the onclick property inside the tag
// eg 
/* <button utton class="btn btn-headline" onclick="console.log('First way');">Learn More</button> */

// 2.)
// const btn = document.querySelector('.btn-headline');
// console.log(btn);
// btn.onclick = function()
// {
    //     console.log("second way!");
// }

// 3.)
const btn = document.querySelector('.btn-headline');
btn.addEventListener("click", ()=>{
    console.log("third way!");
})