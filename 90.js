// getter and setter
class Person
{
    constructor(firstName, lsatName, age)
    {
        this.firstName = firstName;
        this.lsatName = lsatName;
        this.age = age;
    }

    get fullName()
    {
        return `${this.firstName} ${this.lsatName}`;
    }

    set fullName(fullName)
    {
        const [firstName, lsatName] = fullName.split(" ");
        this.firstName = firstName;
        this.lsatName = lsatName;
    }
}

const person1 = new Person("Prince", "Changani", 21);
console.log(person1);
console.log(person1.fullName); //here no need to use the round brackets
person1.fullName = "Harshit Vashisth";
console.log(person1.fullName);