// Date

// 1. Написать функцию, которая принимает год, а возвращает день 1го января этого года. День должен быть в русском формате (например, для 2016 это будет “пятница”)
function getFisrtDayOfYear (year) {
    var day = new Date(year,0).getDay();
    var dayNames = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']
    return dayNames[day];
}
// 2. Написать функцию, которая принимает дату в виде строки “29.03.1985”, а возвращает день в русском формате (например, для указанной даты это будет “пятница”).
// Известно, что формат даты в строке всегда “дд.мм.гггг”.
function getDay (date) {
    var dateArr = date.split('.').reverse();
    var day = new Date(dateArr[0],dateArr[1] - 1,[dateArr[2]]).getDay();
    var dayNames = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']
    return dayNames[day];
}
// 3. Узнать, сколько прошло полных недель с начала года (1го января) до сегодняшней даты
var today = new Date();
var firstDay = new Date(today.getFullYear(), 0);
var numberOfWeeks = Math.floor((today - firstDay) / (1000 * 60 * 60 * 24 * 7));
console.log(numberOfWeeks);

// setTimiout, setInterval

// 1. Напишите код, который будет выводить в консоль строку, начиная с одной буквы и добавляя по одному символу каждые 200 мс: ‘test’ ---> ‘t’ -- ‘te’ -- ‘tes’ -- ‘test’
let str = 'test';
str.split('');
var result = '';
var i = 0;
var timer = setInterval(function () {
    if (i < str.length) {
    var letter = str[i];
    result += letter;
    console.log(result);
    i++;
    }
    else {
        clearInterval(timer);
    }
}, 200)
// 2. Создайте функцию, которая принимает строку и время в секундах. При вызове функции она должна показать (console.log) переданный текст через заданное количество секунд.
//  Функция должна вернуть идентификатор таймера. Пример: myFunc(‘test’, 200) ---> в консоли появится ‘test’ через 200 мс
function setTimer (string, time) {
    var timer = setTimeout(function() {
        console.log(string);
    },time * 1000);
    return timer;
}