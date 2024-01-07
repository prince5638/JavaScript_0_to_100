// clouser example (4)

// 1.) First way 
// function func()
// {
//     console.log("hi, You called me!");
//     return function()
//     {
//         console.log("Mai aek bar called ho chuka hu!");
//     }
// }

// const myfunc = func();
// myfunc();
// myfunc();


// 2.) Second way
function func()
{
    let counter = 0;
    return function()
    {
        if(counter < 1)
        {
            console.log("Hi, You called me");
            counter++;
        }
        else
        {
            console.log("Mai already aek bar called ho chuka hu!");
        }
    }   
}

const myfunc = func();
myfunc();
myfunc();
myfunc();