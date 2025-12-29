//LSP means a subclass must be usable wherever its parent is expected.

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