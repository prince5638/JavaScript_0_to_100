// nested if else

// Guess the number game

let winningNumber = 38;
let check = true;
let userGuess;

while(check)
{
    userGuess = +prompt("Guess the number: "); // here we are getting the input in the string data type ... so we have to convert into an number
    if(userGuess === winningNumber)
    {
        console.log("You guess it right!");
        check = false; 
    }
    else{
        
        if(userGuess < winningNumber)
        {
            console.log(`${userGuess} too low!!!`);
        }
        else{
            console.log(`${userGuess} too high!!!`);
        }
    }
}

// if else if 