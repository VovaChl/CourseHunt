// Присваивание
// 1. Записать в коротком виде:
// a = a + 10, b = b * 18, c = c - 10
let a = 0,
    b = 1,
    c = 0,
    x = 0,
    y = 0,
    i = 0;
a += 10;
b *= 18;
c -= 10;
// x = a + x, y = y * z, i = i * 5 * y
x += a;
y *= z;
i *= 5 * y;
// 2. Как возвести переменную в квадрат? Использовать короткую запись.
a *= a;


// Условные операторы
// Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let modal = 'hidden';
if (modal === 'hidden') {
    modal = 'visible';
} else {
    modal = 'hidden';
}
// Записать то же самое условие тернарным оператором.
modal === 'hidden' ? modal = 'visible' : modal = 'hidden';
// Используя if, записать условие
// 1. если переменная равна нулю, присвоить ей 1
// 2. если меньше нуля - строку “less then zero”
// 3. если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать короткую запись)
let j = 0;
if (j === 0) {
    j = 1;
} else if (j < 0) {
    j = 'less then zero'
} else {
    j *= 10;
}
// Решить эту же задачу тернарным оператором.
j === 0 ? j = 1 : j < 0 ? j = 'less then zero': j *=10;

// switch
// if (a == ‘block’) {console.log(‘block’)} else
// if (a == ‘none’) {console.log(‘none’)} else
// if (a == ‘inline’) {console.log(‘inline’)} else {console.log(‘other’)}

// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.
switch (a) {
    case 'block': console.log('block'); break;
    case 'none': console.log('none'); break;
    case 'inline': console.log('inline'); break;
    default: console.log('other');
}


// Преобразование типов
// Чему равно а, почему?
// let a = 0 || 'string';
// string, потому что 0 false, а непустая строка true

// let a = 1 && 'string';
// string, 1 true и  непустая строка true

// let a = null || 25;
// 25, потому что null false, первый true

// let a = null && 25;
// null, потому что первый false

// let a = null || 0 || 35;
// 35

// let a = null && 0 && 35;
//null

// Что отобразится в консоли. Почему?
// 12 + 14 + '12'
// 2612

// 3 + 2 - '1'
//4

// '3' + 2 - 1
// 31

// true + 2
// 3

// +'10' + 1
// 11

// undefined + 2
// NaN

// null + 5
// 5

// true + undefined
// NaN


// Циклы
// 1. Дана строка “I am in the easycode”. Сделать первые буквы каждого слова в верхнем регистре. Использовать for или while
let str = 'I am in the easycode';
let result = str[0].toUpperCase();
for (let i = 1; i < str.length; i++) {
    if (str[i] === ' ') {
        result += ' ' + str[i+1].toUpperCase();
    }
    else if (str[i-1] === ' ') {
        continue;
    } else {
        result += str[i];
    }
}
// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд)
let str1 = 'tseb eht ma i';
let str2 = '';
for (let i = str1.length - 1; i >= 0; i--) {
    str2 += str1[i];
}
// 3. Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10.
let num = 10;
 let result1 = 1;
for (let i = 1; i <= num; i++) {
    result1 *= i;
}
// 4. Используя циклы, создать строку “Считаем до 10: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10”
let str3 = 'Считаем до 10:';
for (let i = 1; i <= 10; i++) {
    if (i === 10) {
        str3 += ' ' + i;
    } else {
    str3 += ' ' + i + ',';
    }
}
// 5. На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены
let str4 = 'JavaScript is a pretty good language';
let result4 = str4[0].toUpperCase();
for (let i = 1; i < str4.length; i++) {
    if (str4[i] === ' ') {
        result4 += str4[i+1].toUpperCase();
    }
    else if (str4[i-1] === ' ') {
        continue;
    } else {
        result4 += str4[i];
    }
}
console.log(result4);
// 6. Найти все нечетные числа от 1 до 15 включительно и вывести их в консоль.
let number = 15;
for (let i = 1; i <= number; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

