class Animal { 
    constructor (name, species, age, gender) {
        this.name = name
        this.species = species
        this.age = age
        this.gender = gender
     }    
        describe() {
            console.log(this)
        }

        feed() {
            console.log(`${this.name} is eating`)
        }

        makeSound() {
            console.log(`${this.name} is making a sound`)
        }

        move () {
            console.log(`${this.name} is moving`)
        }
}

// const myAnimal = new Animal('simba', 'lion', '3', 'male')
// console.log(myAnimal)

class Mammal extends Animal {
    constructor (name, species, age, gender, furColor) {
        super(name, species, age, gender)
        this.furColor = furColor
    }
    feed () {
        console.log(`${this.name} drinks milk when feeding`)
    }
    move () {
        console.log(`${this.name} walks when moving`)
    }
    makeSound() {
        console.log(`${this.name} growls when making a sound`)
    }
}

const lion = new Mammal("Simba", "Lion", 5, "male", "golden");
lion.describe();
lion.feed();
lion.move();
lion.makeSound();


class Bird extends Animal {
    constructor (name, species, age, gender, wingspan) {
        super(name, species, age, gender)
        this.wingspan = wingspan
    }
    feed () {
        console.log(`${this.name} drinks nectar when feeding`)
    }
    move () {
        console.log(`${this.name} flies when moving`)
    }
    makeSound() {
        console.log(`${this.name} chirps when making a sound`)
    }
}
class Reptile extends Animal {
    constructor (name, species, age, gender, scaleColor) {
        super(name, species, age, gender)
        this.scaleColor = scaleColor
    }
    feed () {
        console.log(`${this.name} eats insects when feeding`)
    }
    move () {
        console.log(`${this.name} slithers when moving`)
    }
    makeSound() {
        console.log(`${this.name} hisses when making a sound`)
    }
}

// const myBird = new Bird ('sam', 'bird', '2', 'female', '2 feet')
// console.log(myBird)



class Zoo {
    constructor(animals) {
        this.animals = [];
        this.fed = false
        this.listen = false;
        this.watch = false;
        //console.log(this);
    }
    addAnimal(animal) {
        this.animals.push(animal)
        //console.log(this.animals)
    }
    displayAnimals () {
        console.log(this.animals)
    }
    feedAnimals() {
        this.fed = true;
        console.log(`${this.animals} is fed`)
    }
    listenToAnimals() {
        this.listen= true
        console.log(`${this.animals} is being listened to`)
    }
    watchAnimals() {
        this.watch = true;
        console.log(`${this.animals} is being watched`)
    }
}



const myZoo = new Zoo ()
myZoo.addAnimal('tiger')
myZoo.displayAnimals()
myZoo.feedAnimals()
myZoo.listenToAnimals()
myZoo.watchAnimals()
