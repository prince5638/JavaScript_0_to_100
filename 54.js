// callback function

function myFunc2(name)
{
    console.log("Inside my funciton 2");
    console.log(`your name is: ${name}`);
}

function myFunc(callback)
{
    console.log("Hello, there i am a func an I can...!");
    callback("Prince");
}

myFunc(myFunc2);