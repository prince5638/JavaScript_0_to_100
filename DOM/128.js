const body = document.querySelector("body");
const grnadparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");


// 1) Event bubbling/propagation ==> if you invoke the event of the child then it automatically call the events of all the parent's element (if it present).
// body.addEventListener("click", ()=>{
//     console.log("you clicked on document.body");
// })
// grnadparent.addEventListener("click", ()=>{
//     console.log("you clicked on grandparent");
// })
// parent.addEventListener("click", ()=>{
//     console.log("you clicked on parent");
// })
// child.addEventListener("click", ()=>{
//     console.log("you clicked on child");
// })

// 2) Event capturing
// body.addEventListener("click", ()=>{
//     console.log("Captured document.body");
// },true)
// grnadparent.addEventListener("click", ()=>{
//     console.log("Captured grandparent");
// },true)
// parent.addEventListener("click", ()=>{
//     console.log("Captured parent");
// },true)
// child.addEventListener("click", ()=>{
//     console.log("Captured child");
// },true)


// body.addEventListener("click", ()=>{
//     console.log("bubbling document.body");
// })
// grnadparent.addEventListener("click", ()=>{
//     console.log("bubbling grandparent");
// })
// parent.addEventListener("click", ()=>{
//     console.log("bubbling parent");
// })
// child.addEventListener("click", ()=>{
//     console.log("bubbling child");
// })


// 3.) Event Delegation ==> if you are clicking on child and if child doesnt have and event then it will search for the event in parent and then it calls that.
// grnadparent.addEventListener("click", ()=>{
//     console.log("you clicked on something!!!");
// })

// This is generally used when we want the same event to invoke .... whenever we are clicking on an child elements.

// IMP ==> here whenever i see the event object (i.e "e") then in target section i got "child element because i clicked on it" ==> here no matters whosever event is called, but it target field it will give only the one due to which event is called;