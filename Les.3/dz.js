// 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: 
// multiply(1, 2, 3) = 6 (1*2*3)
// 	Если нет ни одного аргумента, вернуть ноль: multiply() = 0
function multiply () {
    if (!arguments.length) {
      return 0;
    }
    let result = 1;
      for (let i=0; i<arguments.length;i++) {
          result *= arguments[i];
      }
  return result;
  }
// 2. Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью рекурсии вычислить факториал числа 10: factorial(10) = 3628800
function calcFactorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * calcFactorial(n - 1);
}
// 3. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) = “tset”.
function reverseString (string) {
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}
// 4. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
// 	getCodeStringFromText(‘hello’) = “104 101 108 108 111”
// подсказка: для получения кода используйте специальный метод
function getCodeStringFromText (string) {
    let decodedString = '';
    for (let i = 0; i < string.length; i++) {
        decodedString += string[i].charCodeAt();
      if (i !== string.length - 1) {
        decodedString += ' ';
      }
    }
    return decodedString;
}
// 5. Написать функцию-рекурсию, которая выведет каждый символ строки в консоль: printChars(‘test’) 
function printChars(string) {

    for (let i = 0; i < string.length; i++) {
        console.log(string[i]);
        break;
    }
    printChars(string.slice(1));
}
// 6.	Создать две функции и дать им осмысленные названия:
// первая функция принимает массив и колбэк
// вторая функция (колбэк) обрабатывает каждый элемент массива
// Первая функция возвращает строку “New value: ” и обработанный массив:
function getNewValue (array, callback) {
    let result = 'New value:';

    for (let i = 0; i < array.length; i++) {
        result += callback(array[i]); 
    }

    return result;
};
// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], secondFunc) → “New value: MyNameIsTrinity”
function deleteSpaces(el) {
    let result = ' ';
    for (i = 0; i < el.length; i++) {
      if (i === 0) {
        result += el[i].toUpperCase();
      } else {
        result += el[i];
      }
    }
  return result;
}
// firstFunc([10, 20, 30], secondFunc) → “New value: 100, 200, 300,”
let multiplyByTen = (el) => ' ' + el * 10 + ',';

// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], secondFunc) →  “New value: Jhon is 45, Aaron is 20,”
let getInfo = (el) => ' ' + el.name + ' is ' + el.age + ',';

// firstFunc([‘abc’, ‘123’], secondFunc) → “New value: cba, 321,” // строки инвертируются
function invertElements (el) {
    let result = ' '
    for (let i = el.length - 1; i >= 0; i--) {
        result += el[i];
    }
    result += ",";
    return result;
}
// firstFunc([1,2,3], function(number) { return number + 5 + ‘, ’;}); // 'New value: 6, 7, 8,'
let plusFive = (el) => ' ' + Number(el + 5) + ',';
// Подсказка: secondFunc должна быть представлена функцией, которая принимает один аргумент (каждый элемент массива) и возвращает результат его обработки

