// function returning promise

function ricePromises(){
    const bucket = ['coffee', 'chips', 'vegetables', 'rice', 'salt'];
    return new Promise((resolve, reject)=>{
        if(bucket.includes("rice") && bucket.includes("vegetables") && bucket.includes("salt"))
        {
            // I can return anything here.
            resolve({rice: "true"});
        }
        else{
            reject("could not do it!");
        }
    });
}

ricePromises().then(
    (friedRice)=>{
        console.log("let's eat",friedRice);
    }
).catch(
    (error)=>{
        console.log(error);
    }
);

ricePromises();
console.log("Hello");