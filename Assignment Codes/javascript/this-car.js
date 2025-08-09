/**
 * Creating object car
 */
const car = {
    brand: "Kia",
    model: "Seltos",
    displayDetails: function () {
        console.log(`Brand: ${this.brand}, Model: ${this.model}`);
    }
};

car.displayDetails();