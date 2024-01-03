// hoiting in function expression.
console.log(myFunction);  // It gives an undefined, because initiallly in global Memory myFunction is an undefined earlier and when compiler reads the var myfunction = function(){...} at that time it myFunction == function code.

var myFunction = function()
{
    console.log("this is function!");
}

console.log(myFunction); // It calls the function.