class Shapes {
    constructor(name) {
        this.shape = name;
    }

    area() {
        console.log("call the dedicated sub-class");
    }

    perimeter() {
        console.log("call the dedicated sub-class");
    }
}

class Circle extends Shapes {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    area() {
        return (Math.PI * (this.radius ** 2)).toFixed(2);
    }

    perimeter() {
        return (2 * Math.PI * this.radius).toFixed(2);
    }
}

class Rectangle extends Shapes {
    constructor(length, width) {
        super("Rectangle");
        this.length = length;
        this.width = width;
    }

    area() {
        return (this.length * this.width).toFixed(2);
    }

    perimeter() {
        return (2 * (this.length + this.width)).toFixed(2);
    }
}

class RightTriangle extends Shapes {
    constructor(base, height) {
        super("Right Triangle");
        this.base = base;
        this.height = height;
    }

    area() {
        return ((this.height * this.base) / 2).toFixed(2);
    }

    perimeter() {
        return ((this.base + this.height + Math.sqrt((this.height ** 2) + (this.base ** 2)))).toFixed(2);
    }
}

const circle = new Circle(5);
console.log(`${circle.shape} - Area: ${circle.area()}, Perimeter: ${circle.perimeter()}`);

const rect = new Rectangle(4, 7);
console.log(`${rect.shape} - Area: ${rect.area()}, Perimeter: ${rect.perimeter()}`);

const triangle = new RightTriangle(3, 4);
console.log(`${triangle.shape} - Area: ${triangle.area()}, Perimeter: ${triangle.perimeter()}`);