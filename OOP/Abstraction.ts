//Abstraction allows us to define a clear separation between the interface and implementation of a class.
//It enables us to focus on what an object does instead of how it does it.

abstract class Shape {
    abstract getArea(): number;
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    public getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    public getArea(): number {
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 20)];
shapes.forEach(shape => {
    console.log(shape.getArea());
});