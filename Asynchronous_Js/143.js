// fetch

const URL = "https://jsonplaceholder.typicode.com/posts";

// console.log(fetch(URL));

// This is for GET request
// fetch(URL)
//     .then(response=>{
//         if(response.ok)
//         {
//             // console.log(response);
//             // here response itself return an promises
//             return response.json();
//         }
//         else{
//             throw new Error("Something went wrong");
//         }
//     })
//     .then(data =>{
//         console.log(data);
//     })
//     .catch(error=>{
//         console.log("inside catch");
//         console.log(error);
//     })

fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(response=>{
        if(response.ok)
        {
            // console.log(response);
            // here response itself return an promises
            return response.json();
        }
        else{
            throw new Error("Something went wrong");
        }
    })
    .then(data =>{
        console.log(data);
    })
    .catch(error=>{
        console.log("inside catch");
        console.log(error);
    })