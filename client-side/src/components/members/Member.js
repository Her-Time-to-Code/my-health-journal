class Person {
    constructor(name, age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return "hello"
    }
    getDescription() {
        return (`${this.name} is ${this.age} year(s) old`)
    }
}

class Member extends Person {
    constructor(name, age, major){
        super(name, age) 
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
}

const me = new Person('Katrina Dierking', 32)
const you = new Person('Stranger')
const other = new Member('New Kid', 22, 'General Studies')
console.log(me.hasMajor())