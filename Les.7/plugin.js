 //'use strict'; // строгий режим


function getPrice(){
    return `Этот товар стоит ${this.price}`
}

let intel = {
    name: 'Intel i7 3.5Ghz',
    price: 100,
    discount: 10,
    count: 50,
    getPrice: getPrice,
    calcTotalPrice: function () {
        this.totalPrice = this.count * this.price;
        return this;
    },
    getTotalPrice: function () {
        return this.totalPrice;
    }
};

let amd = {
    name: 'AMD A8 3.5Ghz',
    price: 75,
    discount: 10,
    count: 50,
    getPrice: getPrice
}

// amd.getPrice = getPrice;
// amd.getPrice = intel.getPrice;

// getPrice.call(amd); 
// конкретное указание контекста func.call(contex, ...args) args попадут внутрь функции вызываемой и их можно использовать

// getPrice.apply(amd, ['$', 'price']) 
//тож самое, ток аргументы в массиве

// Math.max(2,3,4,5,6,1); // вернет 6, но ток из строки
// Math.max.apply(null, [2,3,4,5,6,1]); // вернет 6, но уже из целого массива

// call аргументы в массив, но ща есть rest
// [].slice.call(arguments);

// Потеря контекста вызова
//intel.getPrice = getPrice.bind(intel) // так норм, функцию привязываем к определнному контексту, но привязали навсегда, this будет всегда для intel

//setTimeout(intel.getPrice, 1000); //контекст потерян, this = xz

// setTimeout ( () => {
//    intel.getPrice();
// }, 1000);                так норм с замыканием не теряется this

// Замыкание - это когда функция ссылается на переменные 
//или другими словами это когда функция, определенаня в замыкании запоминает то окружение, в котором она была создана, 
//за счет этого она имееет доступ к этмоу окружению и 
//она может изменять значения переменных в этом окружении и запоминать эти измененные значения, 
//то есть условно говоря, когда функция вызывается, она запоминает все окружение, все переменные которые естьв  ней и в выше стоящих функциях
// или глобальном окружении, на основании этого формируется лексическое окружение функции
// и функция имеет доступ к этому лексическому окружению и может забирать оттуда нужные данные, изменять их, переопределять и тд

// LexicalEnvironment0
// {
//  name: 'Vova',
//  getName: getName,
//  scope: null        //ссылка на объект выше на уровень
// }

let name = 'Vova';
function getName(name) {
    // LexicalEnvironment1
    // {
    //  name: 'Vova',
    //  text: 'My name is ',
    //  args: arguments,
    //  getFullName: getFullName,
    //  scope: LexicalEnvironment0
    // }

    let text = 'My name is ';

    function getFullName(secondName) {
    // LexicalEnvironment2
    // {
    //  secondName: 'Ivanov',
    //  args: arguments,
    //  scope: LexicalEnvironment1
    // }

        return name + ' ' + secondName;
    }

    return text + getFullName('Ivanov');
}

//getName(name);




// Пример со счетчиками
function makeCounter() {
    let counter = 0;

    return function () {
        return ++counter;
    }
}

let counterState = makeCounter(); // вернется внутренняя функция(тело)
let counterState2 = makeCounter();

counterState(); // вызовем эту внутреннюю функцию, counter += 1;
counterState(); // 2
counterState2() // 1
counterState() // 3
counterState2() // 2
// У каждой свое лексическое окружение



// Пример модуля
let module = (function () {

    let counter = 0;

    function setCounter(value) {
        counter = value;
    }

    function plusCounter () {
        counter++;
    }

    function getCounter () {
        return counter;
    }

    function reset () {
        counter = 0;
    }
    
    return {
        setCounter: setCounter,
        getCounter: getCounter,
        plusCounter: plusCounter,
        reset: reset
    }

})();

