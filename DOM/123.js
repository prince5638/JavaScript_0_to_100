// event object
const allButtons = document.querySelectorAll(".my-buttons button");
allButtons.forEach(button=>{
    button.addEventListener("click", (e)=>{
        console.log(e.currentTarget);
    });
})