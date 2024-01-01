// call, apply, bind methods 

// call method.
function hello()
{
    console.log("hello world");
}

hello.call();


function about(methodType, hobby, favMusician){
    console.log(methodType, this.firstName, this.age, hobby, favMusician);
}

const user1 = {
    firstName: "Prince",
    age: 21,
};

const user2 = {
    firstName: "Smit",
    age: 21
}

about.call(user2, "call method", "guitar", "moazrt");

// apply method
about.apply(user2, ["apply method", "guitar", "bach"]);

// bind method --> bind returns an method  
const func = about.bind(user1,"bind method", "guitar", "bach");
func();