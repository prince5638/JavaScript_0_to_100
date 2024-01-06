// function execution context

// let foo = "foo";
// console.log(foo);

// function getFullName(firstName, lasatName)
// {
//     console.log(arguments);
//     console.log(arguments.length);
//     let myvar = "var inside function";
//     console.log(myvar);
//     const fullName = firstName + " " + lasatName;
//     return fullName;
// }

// const personName = getFullName("Prince", "changani");
// console.log(personName);

// challenge 
const printForcast = function(arr)
{
    // const celsius = [];
    let str = ''; 
    for(let i = 0; i< arr.length; i++)
    {
        // celsius.push(arr[i]+270);
        str = str + `${arr[i]}°C in ${i+1} day... `;
    }
    console.log("..."+str);
}

const array = [17, 21, 23];
printForcast(array);