/**
 * Using try catch to convert a string to number and returing its square
 */

/**
 * Function to convert a string to number and reutrn it's square
 */
function square(num) {
    try {
        const myNumber = Number(num);
        if (isNaN(myNumber)) {
            throw new Error("Invalid Input");
        }
        return myNumber ** 2;
    } catch (error) {
        return error.message;
    }
}

let validInput = square("20");
let invalidInput = square("John");

console.log(`This is a valid input: ${validInput}`);
console.log(`This is an invalid input with message: ${invalidInput}`);