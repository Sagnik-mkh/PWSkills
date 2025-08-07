class Person {

    constructor(personName, personAge) {
        this.name = personName;
        this.age = personAge;
    }

    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const person1 = new Person("Arthur", 35);
const person2 = new Person("Bill", 44);

person1.display();
person2.display();