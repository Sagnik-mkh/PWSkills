/**
 * Converting normal function to arrow function
 */
//original function
// function multiply(a, b) {
//     return a * b;
// }

//changed into arrow function
const multiply = (a, b) => a * b;

const obj = {
    value: 10,
    add: function (num) {
        return this.value + num;
    }
};

console.log(multiply(5, 3));
console.log(obj.add(5));