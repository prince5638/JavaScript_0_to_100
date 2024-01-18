const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button)=>{
    button.addEventListener("click", function(){
        console.log(this.textContent);
    })
})