// Polymorphism allows us to use a unified interface for different data types.
// It enables objects of different classes to be treated as objects of a common superclass.

class AnimalPolymorphism {
    public makeSound(): void {
        console.log("Animal sound");
    }
}

class DogExample extends AnimalPolymorphism {
    public makeSound(): void {
        console.log("Bark");
    }
}

class CatExample extends AnimalPolymorphism {
    public makeSound(): void {
        console.log("Meow");
    }
}

function playSound(animal: AnimalPolymorphism): void {
    animal.makeSound();
}

const myDog = new DogExample();
const myCat = new CatExample();

playSound(myDog); // Output: Bark
playSound(myCat); // Output: Meow

//run time polymorphism //method overriding

abstract class Payment {
    protected method: string

    constructor(method: string) {
        this.method = method
    }
    abstract pay(): void
}


class PaymentCard extends Payment {
    constructor() {
        super('Card')
    }
    pay(): void {
        console.log('payment done using', this.method)
    }
}

class PaymentUPI extends Payment {
    constructor() {
        super('UPI')
    }
    pay(): void {
        console.log("payment done using", this.method)
    }
}

const payments = [new PaymentUPI(), new PaymentCard()]
payments.forEach(a => a.pay())


//compaile time polymorphism //method overloading
class Calculator {
    add(a: string, b: string): string
    add(a: number, b: number): number
    add(a: any, b: any): any {
        return a + b
    }
}

//Interface-based polymorphism
interface IBird {
    Fly(): void;
}

class Sparrow implements IBird {
    Fly(): void {
        console.log('sparrow is flying')
    }
}

class Crow implements IBird {
    Fly(): void {
        console.log("Crow is flying")
    }
}

(function (b: IBird) {
    b.Fly()
})(new Crow());

(function (b: IBird) {
    b.Fly()
})(new Sparrow());

//Parametric polymorphism. Generics
function consoleIt<T>(value1: T, value2: string) { console.log(value1 + value2) }
consoleIt(2, "domr")
consoleIt("355", "domr")
consoleIt(["dom", 'som'], "domr")



