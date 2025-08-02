//ascending
function ascending(num1, num2) {
    while (num1 <= num2) {
        console.log(num1);
        num1++;
    }
} 

//descending
function descending(num1, num2) {
    while (num2 >= num1) {
        console.log(num2);
        num2--;
    }
}

let num1 = 1, num2 = 25;

console.log(`Ascending`);
ascending(num1, num2);

console.log(`Descending`);
descending(num1, num2);