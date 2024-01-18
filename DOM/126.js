const mainButton = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector(".current-color");

function randomColorGenerator()
{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    const random = `rgb(${red},${green},${blue})`;
    currentColor.textContent = random;
    body.style.backgroundColor = random;
}

mainButton.addEventListener("click", randomColorGenerator);