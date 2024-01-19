// Promise.resolve
// Promise Chaining

// ------- Basic promise example -------
// 1.) Creating Promise
// const newPromise = new Promise((resolve, reject)=>{
//     const state = false;
//     if(state)
//     {
//         resolve("Hello");
//     }else{
//         reject("Bye");
//     }
// })

// console.log(newPromise);

// 2.) Handeling Promise
// newPromise.then(
//     (arg)=>{
//         console.log(arg);
//     }
// ).catch(
//     (arg)=>{
//         console.log(arg);
//     }
// );


// // Chaining promises from chatgpt

// First promise created ==> and it gets resolved by default
// const firstPromise = new Promise((resolve) => {
//     setTimeout(()=>{
//         resolve("First operation succeeded!");
//     },1000)
// });
  
// // chaining first promise with the second task
// const secondPromise = firstPromise.then((result) => {
//     console.log(result);  // Output: "First operation succeeded!"
//     return "Second operation succeeded!";
// });
  
// secondPromise.then((result) => {
//     console.log(result);  // Output: "Second operation succeeded!"
// });  

// setTimeout(()=>{
//     console.log(firstPromise);
//     console.log(secondPromise);
// }, 3000)

// console.log(firstPromise);
// console.log(secondPromise);

// // Promise.all and Promise.race: from chatgpt
// `Promise.all is used to wait for all promises to be resolved, while Promise.race is used to wait for the first promise to be resolved or rejected.

// const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1"), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2"), 2000));

// Promise.all([promise1, promise2])
//   .then((results) => {
//     console.log(results);  // Output: ["Promise 1", "Promise 2"]
//   });

// Promise.race([promise1, promise2])
//   .then((result) => {
//     console.log(result);  // Output: "Promise 1"
//   });

// // Promise.resolve
// const tryResolve = Promise.resolve(5638);
// tryResolve.then((value)=>{
//     console.log(value);
// })


// Promise chaining
function myPromise()
{
    return new Promise((resolve, reject)=>{
        resolve("foo");
    })
}

myPromise().then(value=>{
    console.log(value);
    value += "bar";
    return value;
}).then(value=>{
    console.log(value);
    value += "bazz";
    return value;
}).then(value=>{
    console.log(value);
});

