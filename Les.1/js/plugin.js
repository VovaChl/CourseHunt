console.log('Hello world');
// Типы данных
// Примитивные:
// String 'Hello', "Hello"
// Number 2018, 8.5
// Boolean true, false
// Null - null
// Undefined - undefined
// Symbol

// Сложные:
// Object { name: 'Vova' }
// Array [ 1, 2, 3 ]
// Function
// Date

// Переменные var , let , const
//console.log(userName); undefined т.к var
//console.log(a); ошибка т.к let
var userName = "Vova";
userName = "Vladimir";

console.log(userName);
// var b = 1;
// var b = 2; норм
// let a = 1;
// let a = 2; ошибка

let a,
    b = 2,
    c = 'hello';

const PI = 3.14; // без значения нельзя объявить

const OBJ = { 
    name: 'Vova' 
};
OBJ.age = 28;
console.log(OBJ);

// Строки
let str = 'Hello world';
let userName1 = 'Vova';
let userAge = 23;
let value;
value = str.length;
value = str[1];
value = str[str.length - 1];
value = str.toUpperCase();
value = str.indexOf('world', 1); //если нет вхождения, то будет -1
value = str.slice(1,5); // c 1 включительно до 5 невключительно
value = str.substring(1,5);
value = str.slice(-1); // можно отрицательные и вычитать с конца
value = str.substr(1,2) // с  1 индекса вырезать только 2 симовола
value = 'Hello' + ' ' +'world';
value = 'My name is ' + userName1; 
value = `My name is ${userName1}`;
value = userName1[0].toUpperCase() + userName1.slice(1);
value = `${userName1[0].toUpperCase()}${userName1.slice(1)}`
console.log(value);
// Методы приведения к строке
String(2023);
(201).toString();
201 + '';
//
// Числа
let number = 20;
let num;
num = 1 - '122w';
// isNaN(); для проверки число или не число;
num = parseFloat("20px"); //Строковая часть убирается после цифры
num = Math.round(5.6);
num = Math.floor(Math.random() * 10);
num = (Math.random() * 10).toFixed(2);

console.log(num);

// Boolean
let bool = true;
bool = !true;
bool = !'asd'; // любая строка не пустая true, а !str = false
bool = Boolean(undefined); //приведение к типу boolean

console.log(bool);

// Object
let user = {
    name: 'Vova',
    age: 23,
    work: "NapoleonIT",
    more: {
        value: 100,
        city: 'Chelyabinsk'
    }
};

let prop = 'work';
let obj;
obj = user.name;
obj = user[prop];

user.name = 'Vladimir';
user.info = 'Developer';

obj = user.more.value;
obj = user["more"].value;

user.wallet = {};
user.wallet.balance = 20;

console.log(obj);
console.log(user);


// Массивы
let arr = [1, 2, 3];
let el;

el = arr[0];

arr[1] = "two";

el = arr.length;

console.log(el);
console.log(arr);

//typeOf() - определние типа //null - object