// promise and setTimeout

// i want to resolve or reject promise after 2 seconds

function myFunc(){
    return new Promise((resolve, reject)=>{
        const check = false;
        setTimeout(()=>{
            if(check)
            {
                resolve();
            }
            else{
                reject();
            }
        }, 2000)
    })
}

myFunc().then(
    ()=>{
        console.log("Promise resolved");
    }
).catch(
    ()=>{
        console.log("Promise rejected");
    }
);