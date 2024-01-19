// Promises ==> It is an asynchronous task. 

console.log("Script starts!");
const bucket = ['coffee', 'chips', 'vegetables', 'rice', 'salt'];

// produce promises
const friedRicePromise = new Promise((resolve, reject)=>{
   if(bucket.includes("rice") && bucket.includes("vegetables") && bucket.includes("salt"))
   {
    resolve("fried rice");
   } 
   else{
    reject("could not do it!");
   }
})

// consume promises / how to consume ==> promise is consumed by browser only
// Promises are stored in microtask queue not in callback queue.
// Rememeber that microtask queue is always executed first and then callback queue is executed
friedRicePromise.then(
    (friedRice)=>{
        console.log("Let's eat",friedRice);
    }
).catch(
    (error)=>{
        console.log(error);
    }
)   

setTimeout(()=>{
    console.log("I am setTimeout!");
}, 1000)

for(let i = 0; i < 100; i++)
{
    console.log(Math.floor(Math.random()*10), i);
}

console.log("Script end!");