// lexical scope

// --> case - 1 
// function myApp(){
    
//     const myvar = "value1";

//     function myFunc(){
//         const myvar = 58;
//         console.log("Inside myFunc: ",myvar);
//     }

//     console.log(myvar);
//     myFunc();   
// }

// myApp();


// --> case - 2 
// const myvar = "value1";

// function myApp(){
    

//     function myFunc(){
//         // const myvar = 58;
//         console.log("Inside myFunc: ",myvar);
//     }

//     console.log(myvar);
//     myFunc();   
// }

// myApp();

// --> case - 3 
const myvar = "value1";

function myApp(){
    
    function myFunc(){
        // const myvar = 58;
        const myFunc2 = ()=>
        {
            console.log("Inside myFunc: ",myvar);
        }
        myFunc2();
    }

    console.log(myvar);
    myFunc();   
}

myApp();