// synchronous programming vs asynchronous programming

// synchronous programming
// Javscript is an snychronous programming and single threaded

// console.log("script start");

// for (let i = 0; i < 1000; i++) {
//     console.log("inside for loop");
// }

// console.log("script end");

// ------- setTimeout function -------
// ==> It delays the call of the function for the given amount of time.
// ==> the second parameter in setTimeout is the minimum time that a funciton has to wait...... it is not fixed, it can take more then the minimum time also, if the code after setTimeout is so big.
// ==> setTimeout returns one id

console.log("start code");

const id = setTimeout(()=>{
    console.log("Inside setTimeout");
}, 1000)

for (let i = 0; i < 100; i++) {
    console.log("....");
}

console.log("setTimeout id is : ", id);
clearTimeout(id);
console.log("end code");

// clearTimeout ==> it means the function should not run. ==> clearTimeout takes one argumnet(i.e id of setTimeout function).