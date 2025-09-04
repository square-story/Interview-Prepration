//Inheritance allows us to create a new class that is based on an existing class.
//The new class (child class) inherits properties and methods from the existing class (parent class).

class AnimalGroup {
    constructor(private name: string, private age: number) { }

    public getInfo(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Dog extends AnimalGroup {
    private breed: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }

    public getDogInfo(): string {
        return `${this.getInfo()}, Breed: ${this.breed}`;
    }
}

const Buddy = new Dog("Buddy", 3, "Golden Retriever");
console.log(Buddy.getDogInfo());
