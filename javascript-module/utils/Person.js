// 1) Frist way of named export 
// export class Person 
// {
//     constructor(firstName, lastName, age)
//     {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     info()
//     {
//         console.log(this.firstName, this.lastName, this.age);
//     }
// };

// 2) Second way of named export 
// export {Person};

// 3) default export
// We can only export one thing using export default
export default class Person 
{
    constructor(firstName, lastName, age)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    info()
    {
        console.log(this.firstName, this.lastName, this.age);
    }
};

class Person2 
{
    constructor(firstName, lastName, age)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    info2()
    {
        console.log(this.firstName, this.lastName, this.age);
    }
}; 

export {Person2};