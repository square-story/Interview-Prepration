//Encapsulation hides an object’s internal state and requires all interaction to be performed through methods.
//Class properties can use private or protected modifiers to restrict access.

class Animal {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }
}

const dog = new Animal("Buddy", 3);
console.log(dog.getName());
dog.setName("Max");
console.log(dog.getName());
// console.log(dog.name); // Error: Property 'name' is private and only accessible within class 'Animal'.


class Person {
    private firstName: string;
    protected lastName: string;
    public age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person = new Person("John", "Doe", 30);
console.log(person.getFullName());
console.log(person.age); // Accessible
// console.log(person.firstName); // Error: Property 'firstName' is private and only accessible within class 'Person'.
// console.log(person.lastName); // Error: Property 'lastName' is protected and only accessible within class 'Person' and its subclasses.

class Employee extends Person {
    private employeeId: number;

    constructor(firstName: string, lastName: string, age: number, employeeId: number) {
        super(firstName, lastName, age);
        this.employeeId = employeeId;
    }

    public getEmployeeInfo(): string {
        return `ID: ${this.employeeId}, Name: ${this.getFullName()}`;
    }
}

const employee = new Employee("Jane", "Smith", 28, 101);
console.log(employee.getEmployeeInfo());
// console.log(employee.lastName); // Error: Property 'lastName' is protected and only accessible within class 'Person' and its subclasses.
// console.log(employee.firstName); // Error: Property 'firstName' is private and only accessible within class 'Person'.