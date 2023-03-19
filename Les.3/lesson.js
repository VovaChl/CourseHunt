// function declaration 
// при таком способе полное всплытие, даже до фактического объявления
sum() // работает
function sum(x, y) {
    let a = x;
    let b = y;
    console.log(x, y)
    console.log(a + b);
    return (a + b);
}

sum; //вызов тела функции
sum(); //вызов функции

// function expression
// такая функция не всплывает
let num = function () {
    console.log('Function expression');
}

    // Анонимная самовыызывающаяся функция
    //вызовется и выполнится сразу как код дойдет до нее
    (function () {
        console.log('Self invoked function');
    })(); // () для вызова могут быть снаружи или внутри

// arrow function 
let arrow = () => {
    console.log('Arrow function');
}

let sumArrow = (x, y) => x + y;
let sunArrow1 = x => x + 5;


// return  функция всегда что-то возвращает, если нечего, то undefined
let res = sum(5, 10); // x=5, y=10
console.log(res);

// arguments - псевдомассив, в которм каждый аргумент проиндексирован +  у него есть длина, нельзя использовать методы

// function sum(x,y, ...rest) ...rest - нужные данные в переменные, остальные в массив, можно использовать методы
// если function sum(...rest), то массив всех аргументов

let arr = [1, 2, 4, 3, 6, 7];

let first = arr[0];
let second = arr[1];

let [one, two] = arr; // деструктурирующее присваивание
console.log(one, two) // 1, 2;

let [one1, two2, ...last] = arr;  // для получения только нужного, а остальное в один отдельный массив
console.log(last) // [4,3,6,7];

let user = {
    name: 'Vova',
    age: 23
}
// let name = user.name; // название переменой любое
// let age = user.age;  // название переменой любое

let { name, age } = user; // должны быть как название ключа
console.log(name, age); // получаем Vova 23

// Users
let users = [
    {
        id: 1,
        name: 'Vova',
        age: 23
    },
    {
        id: 2,
        name: 'Denis',
        age: 28
    },
    {
        id: 3,
        name: 'Lena',
        age: 18
    }
];

// add user
// delete user

function addUser(name, age) {
    if (!name) return new Error('Не передано поле name');
    if (!age) return new Error('Не передано поле age');

    // push
    users.push({ name: name, age: age, id: Math.round(Math.random() * 10) }); // name, age можно опустить, если они называются также в объекте
    return users;

};

addUser('Maksim', 35);

function deleteUser(id) {

    if (!users.length) {
        return console.info('Пользователей больше нет');
    }

    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            // splice (index, кол-во удаляемых)
            users.splice(i, 1);
            break;
        }
    }

    return users;
}

deleteUser(1);

// Глобальные и локальные переменные
let x = 'Global var';
function env() {
    let x = "Local var";
    console.log(x);
    ;
}

env();

// Функции высшего порядка/хендлеры/обработчики/колбэки
// Функция ВП это когда функция принимает в качестве аргумента другие функции или возвращает другую функцию в return

function highFunction(func) {
    func();
}

highFunction(function () {
    console.log('I`m a handler! Hi)');
});

highFunction(function () {
    console.log('I`m a handler2! Hi)))');
});

function anotherHishFunc() {
    return function () {
        return 'I`m a func';
    }
}

anotherHishFunc(); //тело 
anotherHishFunc()(); // вызов внутренней f


let str = 'Hello';
let newStr = ''
for (let i = 0; i < str.length; i++) {
    newStr += str[i] + "$";
}
console.log(newStr);

function rewriteString( string, handler ) {

    let newString = '';

    for (let i = 0; i < string.length; i++) {
        newString += handler(string[i]) 
            //передаем в хендлер каждый элемент строки и записываем 
            //результат работы в новую строку
    }

    return newString;

}

rewriteString('Easycode', function (symbol) {
    return symbol + '$';
});


// some every перебирающие методы массивов
// some вернет true или false, если хотябы 1 элемент соотвествует/не соответствует условию
// every вернет true или false, если все элементы соотвествуют/не соответствуют условию

let arr1 = [1, 2, 'some string'];

let methodRes = arr1.some(function(value) { // value - это 1 элемент массива
    return typeof value === 'string';
});

let methodRes1 = arr1.every(function(value) { // value - это 1 элемент массива
    return typeof value === 'string';
});

console.log(methodRes); //true
console.log(methodRes1); //false

function some(arr,handler) {

    for (let i = 0; i < arr.lenght; i++) {
        if ( handler(arr[i]))  return true
    }
        
    return false;

};

let customSome = some([1,2,3], function(el) {
    return typeof el === 'number';
});
//можно короче написать
let customSome1 = some([1,2,3], el => typeof el === 'number');

console.log(customSome);

