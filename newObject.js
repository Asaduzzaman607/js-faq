class Person{
    constructor(firstName, lastName, salary){
        this.firstName= firstName;
        this.lastName= lastName;
        this.salary= salary;

    }
}

const heroPerson = new Person('Hero', 'Balam', 2500);
console.log(heroPerson)
const friendlyPerson = new Person("Hero", 'Golam',3000)