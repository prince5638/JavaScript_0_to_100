const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);

// step - 1
// console.log(xhr.readyState); // state - 0   UNSENT ==> (Client has been created. open() not called yet.)
xhr.open("GET", URL);
// console.log(xhr.readyState); // state - 1   OPEN ==> (open() has been called.)

// This method will run for eary state change
// xhr.onreadystatechange = function ()
// {
//     if(xhr.readyState === 4)
//     {
//         // console.log(typeof xhr.response);
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);
//         console.log(typeof data);
//     } 
// }


// this method will run only when ready state is 4 
xhr.onload = function (){
    if(xhr.status >= 200 && xhr.status <= 300){   
        const data = JSON.parse(xhr.response);
        console.log(data);
        
        // start for accessing sub path like URL/id
        // now suppose i want to access only 4th post whose id = 4 (do the same work as done above)
        const id = data[3].id;
        console.log(id);
        const xhr2 = new XMLHttpRequest();
        const URL2 = `${URL}/${id}`
        console.log(URL2);
        xhr2.open("GET", URL2);
        xhr2.onload = ()=>{
            const data_4 = JSON.parse(xhr2.response);
            console.log(data_4);
        }
        xhr2.send();
        // end for accessing sub path like URL/id
    }
    else{
        console.log("Something went wrong!");
    }
}

// This function is called only when there is an network issues
xhr.onerror = function(){
    console.log("network error");
}

xhr.send();  
// state - 2	HEADERS_RECEIVED ==> (send() has been called, and headers and status are available.)

// state - 3	LOADING	Downloading ==>  (responseText holds partial data.)
// state - 4    DONE =>  (The operation is complete.)