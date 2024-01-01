// function inside function

function app()
{
    const myFunc = () => {
        console.log("Hello from myFunc");
    }

    const addTwo = (num1, num2) => {
        return num1 + num2;
    }

    const mul = (mul1, mul2) => mul1 * mul2;

    console.log("Inside app");
    myFunc();
    console.log(addTwo(4,5));
    console.log(mul(4, 4));
}

app();