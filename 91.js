// static methods and properties

// getter and setter
class Person
{
    constructor(firstName, lsatName, age)
    {
        this.firstName = firstName;
        this.lsatName = lsatName;
        this.age = age;
    }

    static desc = "this is static properties!";

    static classInfo()
    {
        return "This is person class!";
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

const info = Person.classInfo();
console.log(info);
console.log(Person.desc);