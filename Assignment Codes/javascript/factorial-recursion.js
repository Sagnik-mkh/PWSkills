//factorial using recursion
function factorial(num) {
    if (num == 1) return 1;
    return num * factorial(num - 1);
}

let factoNum = 5;

console.log(factorial(factoNum));