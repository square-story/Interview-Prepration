class Animal {
    speak() {
        console.log('animal speak')
    }
}

class Dog extends Animal {
    speak() {
        super.speak()
        console.log('dog is speaking')
    }
}

const dog1 = new Dog()

dog1.speak()