// get an set attribute
const link = document.querySelector('li:nth-child(1) a');
// console.log(link);
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://codeprogs.com");
console.log(link.getAttribute("href"));

const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute('type'));