// static list vs live list

// querySelectoreAll hame static list degi  
// getElementBySomething hame live list degi

const ul = document.querySelector(".todo-list");
// const listItems = ul.querySelectorAll("li");
const listItems = ul.getElementsByTagName("li");

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";

ul.append(sixthLi);
console.log(listItems);