// new
function Persone (firstName, lastName, age) {
    this.firstName = firstName;
    this.secondName = lastName;
    this.age = age;
    // let userAge = age;

    // this.getUserAge = function () {
    //     return userAge;
    // }

    // this.getFullName = function () {
    //     return `${this.firstName} ${this.lastName}`;
    // }
};

let vova = new Persone('Vova', 'Ivanov', 23);
let maksim = new Persone('Maksim', 'Eltsin', 30);
// vova instanceof Person = true  //проверка на принадлежность

// Прототипы
// prototype != __proto__
// __proto__ - наследование от чего либо
// prototype - это методы самой функции
Persone.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

Persone.prototype.greeteng = function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
};

// Наследование
function Customer (firstName, lastName, phone, membership) {
    //Наследование от Person свойств и методов, но не наследуется прототип
    Persone.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}
// как наследовтаь прототип Person
Customer.prototype = Object.create(Person.prototype);

Customer.prototype.constructor = Customer;

Customer.prototype.greeteng = function () {
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

Customer.prototype.getMembership = function () {
    return this.membership;
}

let customer1 = new Customer('Ivan', 'Petrov', '8-982-888-88-88', 'Standart');

let A = {};
let B = {
    sayHello() {
        return 'Hello from B';
    }
};

A.__proto__ = Object.create(B);


// так не супер используется, но можно
let objPrototype = {
    greeteng() {
        return `Hello there ${this.firstName}`;
    }
}

let oleg = Object.create(objPrototype);
oleg.firstName = 'Oleg';
//или
let oleg1 = Object.create(objPrototype, {
    firstName: {value: 'Oleg'},
    lastName: {value: 'Highlex'},
});