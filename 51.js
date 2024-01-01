// default parameters


// Normal case - 1)
// function addTwo(a, b)
// {
//     return a + b;
// }

// const ans = addTwo(2, 5);
// console.log(ans);

// case - 2) --> handeling undefined
// function addTwo(a, b)
// {
//     if(typeof b === "undefined")
//     {
//         b = 0;
//     }
//     return a + b;
// }

// const ans = addTwo(2);
// console.log(ans);

// case - 3) --> without handeling undefined by using the default parameters 
function addTwo(a, b = 0)
{
    return a + b;
}

const ans = addTwo(2);
console.log(ans);