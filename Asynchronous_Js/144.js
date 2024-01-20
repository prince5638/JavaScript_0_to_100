// async await

console.log("Code starts");
const URL = "https://jsonplaceholder.typicode.com/posts";

// Just practicing using .then and .catch
// fetch(URL)
//     .then(response=>{
//         return response.json();
//     })
//     .then(data=>{
//         console.log(data);
//     })

// fetching data using async and await

// created on async function for fetching data (function type => simple function).
// async function getPosts(){
//     const response = await fetch(URL);
//     if(!response.ok)
//     {
//         throw new Error("Something went wrong!");
//     }
//     const data = await response.json();
//     return data;
// }

// When function type is arrow function then
const getPosts = async ()=>{
    const response = await fetch(URL);
    if(!response.ok)
    {
        throw new Error("Something went wrong!");
    }
    const data = await response.json();
    return data;
}

getPosts()
    .then(mydata=>console.log(mydata))
    .catch(error=>console.log(error));

console.log("Code ends");