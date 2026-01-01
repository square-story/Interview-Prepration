//LSP means
//objects of a superclass (parent class) should be replaceable 
// by objects of its subclasses (child classes) 
// without breaking the program's correctness
/*
**bad example**

    class Bird {
    fly() {}
    }

    class Penguin extends Bird {
    fly() {
        throw new Error("I cannot fly")
    }
    }

Penguin breaks expectations.
Anywhere Bird is used, Penguin crashes.

Inheritance without LSP is dangerous.
*/

interface FlyingBird {
    fly(): void;
}

interface IBird {
    layEggs(): void;
}

interface WalkingBird {
    walk(): void;
}

abstract class Bird implements IBird {
    layEggs(): void {
        console.log('Lay eggs now')
    }
}

class Sparrow extends Bird implements FlyingBird {
    fly(): void {
        console.log('flying sparrow')
    }
}

class Pengin extends Bird implements WalkingBird {
    walk(): void {
        console.log('pengin is walking')
    }
}