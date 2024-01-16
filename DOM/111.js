// const rootNode = document.getRootNode();
// console.log(rootNode);
// console.log(rootNode.childNodes);

// const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode.childNodes); // It gives NodeList

// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode);
// console.log(textNode1);
// console.log(bodyElementNode);

// sibling relation
// console.log(headElementNode.parentNode);
// console.log(headElementNode.nextSibling);
// console.log(headElementNode.nextElementSibling); // It ommits the text parts and directly gives an next element sibling

// console.log(headElementNode.childNodes);

// task - 1.)
const headingH1 = document.querySelector('h1');
// console.log(headingH1); 
// const body = headingH1.parentNode.parentNode;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333";

// We can directly select the body
const body = document.body;
body.style.color = "#efefef";
body.style.backgroundColor = "#333";
// console.log(body);

const head = document.querySelector('head');
// console.log(head);
const title = head.querySelector("title");
console.log(title.childNodes);

const container = document.querySelector(".container");
console.log(container.children);