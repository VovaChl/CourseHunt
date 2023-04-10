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


// ES6 classes

class Persone1 {
    // конструктор запускается при созданнии экземпляра
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //методы
    greeteng() {
        return `Hello there ${this.firstName} ${this.lastName}}`
    }

    //статический метод, только для самого класса и внутренней работы
    static sumNumbers(x, y) {
        return x + y;
    }
}

const Vova1 = new Persone1('Vova', 'Ivanov');
Vova1.sumNumbers(1,2) // error
Persone1.sumNumbers(1,2) // 3

// наследование классов ES6
class Customer1 extends Persone1 {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName); // вместо call, свойства и методы родителя

        this.phone = phone;
        this.membership = membership;
    }

    getMembership() {
        return this.membership;
    }
}

const Customer1 = new Customer1('Vova', 'Ivanov', '8-982-888-88-88', 'Standart');
