// function returning function.

// Higher order function --> when we are passing the function as an parameter or returning the function or doing both at the same time is called the Higher order fucniton.

function myFunc()
{
    function hello()
    {
        return "hello world!";
    }
    return hello;
}

const ans = myFunc();
console.log(ans());