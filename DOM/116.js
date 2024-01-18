// clone nodes 
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";

// using true as an argument it deep clones the element 
const li2 = li.cloneNode(true);
ul.append(li);
ul.prepend(li2);