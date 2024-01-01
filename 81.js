function hello()
{
    console.log('hello world');
}

// javascript function => function + object

// console.log(hello.name);

// You can add your own properties
hello.myOwnProperty = "Very unique property";
console.log(hello.myOwnProperty);

// name property ==> tells function name

// function provides more usefull properties
// like ==> call, apply, bind

// console.log(hello.prototype);

// only function provides prototype prototype.

if(hello.prototype)
{
    console.log("prototype is present!");
}
else{
    console.log("prototype is not present!");
}

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";

console.log(hello.prototype);

hello.prototype.sing = function()
{
    return "hello l ala la al la";
}

console.log(hello.prototype.sing());