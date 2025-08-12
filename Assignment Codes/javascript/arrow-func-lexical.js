/**
 * Object to show the lexical resolution of arrow functions
 */
const person = {
    name: "Sagnik",
    greet: function () {
        console.log(this.name);
        setTimeout(() => {
            /**
             * `this` is resolved here lexically. Here in the object method `greet` this refers to the object `person`
             */
            console.log("Hello, my name is", this.name);
        }, 1000);
    }
}

person.greet();