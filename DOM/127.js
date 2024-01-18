// keypress event 
// mouseover event

const body = document.body;
body.addEventListener("keypress", (e)=>{
    console.log(`You presses ${e.key}`);
})

const todoFirst = document.querySelector(".text");
todoFirst.addEventListener("mouseover", ()=>{
    console.log("mouse over TODO!!!");
})