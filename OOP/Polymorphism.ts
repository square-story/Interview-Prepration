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