/**
 * Function to generate random number
 */
const genNum = () => {
    return parseFloat((Math.random() * 100).toFixed(0));
}

/**
 * Creating Array
 */
let myArray = new Array();
for (let i = 0; i < 4; i++) myArray.push(genNum());

/**
 * Function to merge array
 */
(function (...args) {
    myArray = [...myArray, ...args];
})(10, 20, 30, 40, 50, 60, 70);
console.log(myArray);