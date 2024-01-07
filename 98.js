// closures

// function returns function

// (.) => eg:1
// function outerFunction()
// {
//     function innerFunction()
//     {
//         console.log("hello world");
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// console.log(ans);
// ans();

// (.) =>eg:2
function fullName(firstName, lastName)
{
    function printName()
    {
        console.log(firstName, lastName);
    }
    return printName;
}

const ans = fullName("Prince", "Changani");
ans();