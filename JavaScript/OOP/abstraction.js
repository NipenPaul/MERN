/* Abstraction in JavaScript involves hiding the implementation 
details of an object and exposing only the necessary information 
or functionality. This is typically achieved through the use of
classes, interfaces, and methods. Here are some examples of 
abstraction in JavaScript: */

// Example 1: Abstracting a Car

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        console.log(`Starting ${this.make} ${this.model}`);
    }

    drive() {
        console.log(`Driving ${this.make} ${this.model}`);
    }

    stop() {
        console.log(`Stopping ${this.make} ${this.model}`);
    }
}

let myCar = new Car('Toyota', 'Camry');
myCar.start();
myCar.drive();
myCar.stop();


// Example 2: Abstracting a Shape

class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error('Shape is an abstract class and cannot be instantiated directly.');
        }
    }

    getArea() {
        throw new Error('Method getArea() must be implemented in subclasses.');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

let myCircle = new Circle(5);
console.log(myCircle.getArea()); // Output: 78.54