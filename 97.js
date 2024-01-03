// function execution context

let foo = "foo";
console.log(foo);

function getFullName(firstName, lasatName)
{
    console.log(arguments);
    console.log(arguments.length);
    let myvar = "var inside function";
    console.log(myvar);
    const fullName = firstName + " " + lasatName;
    return fullName;
}

const personName = getFullName("Prince", "changani");
console.log(personName);