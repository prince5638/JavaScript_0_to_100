// function 

// function myName()
// {
//     console.log("Hello Prince");
// }

// function 
// input: num1, num2
// output: sum of two num
// function sum(num1, num2) 
// {
    // console.log(4+5);
//     return num1+num2;
// }
// myName();
// const sumOfTwoNum = sum(2, 4);
// console.log(sumOfTwoNum);

// funciton 
// input: 1 number
// output: true, false
// function to check the even/odd number
// function isEven(num)
// {
//     return num % 2 === 0;
// }
// console.log(isEven(6));

// function 
// input : string
// output: first character 
// function firstChar(name)
// {
//     return name[0];
// }
// console.log(firstChar("Prince"));

// function 
// input: array, target value
// output: index of the target if target present in array
// array = [1, 5, 9, 23, 0] , target = 9
// function findTarget(arr, trg)
// {
//     for(let i in arr)
//     {
//         if(arr[i] === trg)
//         {
//             return i; 
//         }
//     }
//     return -1;
// }

function findTarget(arr, trg)
{
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] === trg)
        {
            return i;
        }
    }
    return -1;
}

const nums = [1, 5, 9, 23, 0];
const target = 9;
console.log(findTarget(nums, target));