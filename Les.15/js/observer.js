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