class Calculator {

    constructor(firstNumber, secondNumber) {
        this.num1 = firstNumber;
        this.num2 = secondNumber;
    }

    add() {
        return this.num1 + this.num2;
    }

    subtract() {
        return this.num1 - this.num2;
    }

    multiply() {
        return this.num1 * this.num2;
    }

    divide() {
        return this.num1 / this.num2;
    }
}

const calc = new Calculator(6, 2);
console.log(`Addition: ${calc.add()}`);
console.log(`subtract: ${calc.subtract()}`);
console.log(`Multiply: ${calc.multiply()}`);
console.log(`Divide: ${calc.divide()}`);