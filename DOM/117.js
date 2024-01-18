// some old method to support poor internate Explorer

// appendChild
// insertBefore
// replaceChild
// removeChild

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";

const reference = document.querySelector(".first-todo")
// appendChild
// ul.appendChild(li);

// insertBefore
ul.insertBefore(li, reference);

// replaceChild
// ul.replaceChild(li, reference);

// removeChild
ul.removeChild(reference);