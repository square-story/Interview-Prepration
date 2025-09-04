class Animal {
    constructor(name) {
        this.name = name
    }
    speak() {
        console.log('animal speak', this.name)
    }
}

class Dog extends Animal {
    constructor() {
        super('Sadik')
        this.place = 'Thennala'
    }
    speak() {
        console.log('dog is speaking', this.name)
    }
}

const dog1 = new Dog()

dog1.speak('malay')
dog1.speak()