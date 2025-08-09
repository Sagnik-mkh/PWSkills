/**
 * Creating person1 and person2 objects
 */
const person1 = {
    name: "Sagnik",
    age: 24
};

const person2 = {
    name: "Rahul",
    age: 26
}

/**
 * Creating introduce function
 */
function introduce() {
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old`);
}

/**
 * Calling the function
 */
introduce.call(person2);