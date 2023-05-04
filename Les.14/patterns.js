// Module pattern
const Module = (function () {
    // Function body

    return {
        // methods
    }
})();

// в ES6 появились modules; export and import;

// Sigleton pattern // объект всегда один, результат один вне зависимости откуда вызван будет меняться этот объект

const conterModule = (function () {
    let instance,
        counter = 0;

    const getCounter = function() {
        return counter;
    }

    const increaseCounter = function() {
       counter++;
    }

    const createInstance = function () {
        return {
            getCounter,
            increaseCounter
        }
    }

    return {
        getInstane: function() {
            return instance || (instance = createInstance());
        }
    }
}());

const counter1 = conterModule.getInstane();
counter1.increaseCounter();
counter1.getCounter(); // 1
const counter2 = conterModule.getInstane();
counter2.getCounter(); // 1
counter2.increaseCounter();
counter1.getCounter(); // 2

// Factory pattern // первичная инициализация объектов, куча объектов с одинаковым наполнением, но с отличием значений

class SimpleMembership {
    constructor(name) {
        this.name = name;
        this.cost = '$5';
    }
}

class StandartMembership {
    constructor(name) {
        this.name = name;
        this.cost = '$15';
    }
}

class SuperMembership {
    constructor(name) {
        this.name = name;
        this.cost = '$25';
    }
}

function MemberFactory() {
    this.createMember = function(name, type) {
        let member;

        if(type === 'simple') {
            member = new SimpleMembership(name);
        } else if(type === 'standart') {
            member = new StandartMembership(name);
        } else if(type === 'super') {
            member = new SuperMembership(name);
        }

        member.type = type;
        member.define = function () {
            return `${this.name} (${this.type}): ${this.cost}`;
        }

        return member;
    }
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('Denis', 'standart'));
members.push(factory.createMember('Maksim', 'simple'));
// const denis = new SimpleMembership('Denis');
// denis.type = 'simple';
// denis.define = function () {
//     return `${this.name} (${this.type}): ${this.cost}`;
// }



// Observer pattern
class EventObserver {
    constructor() {
        // массив подписчиков
        this.observers =[];
    }

    // subscribe on event
    subscribe(fn) {
        this.observers.push(fn);
    }

    unsubcribe(fn) {
        this.observers = this.observers.filter(item => {
            if (item !== fn) {
                return item;
            }
        })
    }

    fire(args) {
        this.observers.forEach(fn => {
            fn.call(null, args);
        })
    }
}

// const ev = new EventObserver();
// function fn1() {
//     console.log('Hello world')
// }
// function fn2() {
//     console.log('Hello world2')
// }
// ev.subscribe(fn1);
// ev.subscribe(fn2);

const addNewTask = new EventObserver();

function alertMessage(msg) {
    alert(msg);
}

function consoleMessage(msg) {
    console.log(msg);
}

addNewTask.subscribe(alertMessage);
addNewTask.subscribe(consoleMessage);

// addNewTask.fire('New message');


// Mediator pattern
class User {
    constructor(name) {
        this.name = name;
        this.chatroom = null;
    }

    send(message, to) {
        // call methed send at chatroom
        this.chatroom.send(message, this, to);
    }

    recieve(message, from) {
        console.log(`From ${from.name} to ${this.name}: ${message}`);
    }

}

class ChatRoom {
    constructor() {
        this.users = {};
    }

    register(user) {
        user.chatroom = this;
        this.users[user.name] = user;
    }

    send(message, from, to) {
        // broadscast 
        if (to) {
            // single user message 
            to.recieve(message, from);
        } else {
            // mass message
            for (let user in this.users) {
                if (this.users[user] !== from) {
                    this.users[user].recieve(message, from);
                }
            }
        }
    }
}

// Create users
const denis = new User('Denis');
const maksim = new User('Maksim');
const olga = new User('Olga');

// Create chat room
const chatroom = new ChatRoom();

// Register users
chatroom.register(denis);
chatroom.register(maksim);
chatroom.register(olga);