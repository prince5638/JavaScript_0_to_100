// rest parameters

// function myFunc(a, b, ...c)
// {
//     console.log(`a is: ${a}`);
//     console.log(`b is: ${b}`);
//     console.log(`c is: ${c}`);
//     console.log('c is:', c);
// }

// myFunc(1, 2, 3, 4, 5, 6, 7, 8);

function addAll(...nums)
{
    let sum = 0;
    for(let i in nums)
    {
        sum = sum + nums[i];
    }
    return sum;
}

console.log(addAll(1,2,3,4,5,6,7));