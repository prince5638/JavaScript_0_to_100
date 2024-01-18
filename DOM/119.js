// how to get the dimension of the element
// height width

const sectionTodo = document.querySelector(".section-todo");
const dimension = sectionTodo.getBoundingClientRect();

const dimensionheight = sectionTodo.getBoundingClientRect().height;
const dimensionWidth = sectionTodo.getBoundingClientRect().width;
const dimensionTop = sectionTodo.getBoundingClientRect().top;

console.log(dimension);