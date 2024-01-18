// setInterval ==> this function runs continously after the given interval of time.

// console.log("start code");

// setInterval(()=>{
//     console.log(Math.floor(Math.random()*11));
// }, 1000)

// console.log("end code");

const bodyFull = document.body;
const button = document.querySelector("button");
console.log(button);

const intervalId = setInterval(() => {
    const red = Math.floor(Math.random()*126);
    const green = Math.floor(Math.random()*126);
    const blue = Math.floor(Math.random()*126);

    const rgb = `rgb(${red},${green},${blue})`;
    // console.log(rgb);
    bodyFull.style.background = rgb;
}, 1000);

button.addEventListener('click', ()=>{
    clearInterval(intervalId);
    button.textContent = bodyFull.style.background;
})