/**
 * Create a constructor function called Car that takes brand and year.
 *  Add a method getInfo() using the prototype that returns a string
 */

function Car(brand, year) {
    this.brand = brand,
        this.year = year
}

Car.prototype.getInfo = function () {
    return `This is a ${this.brand} from ${this.year}`
}

const car1 = new Car('Tesla', 2022)

console.log(car1.getInfo())