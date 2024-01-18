// understand callback

// function myFunc(callback)
// {
//     console.log("function is doing task 1");
//     callback();
// }

// function myFunc2()
// {
//     console.log("function is doning task 2");
// }

// myFunc(myFunc2);


function getTwoNumbersAndAdd(number1, number2, onsuccess, onFailer)
{
    if(typeof number1 === "number" && typeof number2 === "number")
    {
        onsuccess(number1, number2);
    }
    else{
        onFailer();
    }
}

getTwoNumbersAndAdd(5, 6, (num1, num2)=>{
    console.log("The sum is : ",num1+num2);
}, ()=>{
    console.log("Wrong data type");
    console.log("please pass number only");
})