function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.display = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person1 = new Person("Rahul", 22);
const person2 = new Person("Rohan", 21);

person1.display();
person2.display();