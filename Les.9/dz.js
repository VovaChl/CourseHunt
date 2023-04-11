// 1. Создать конструктор для производства автомобилей.
//  Конструктор должен принимать марку автомобиля и возраст машины. 
//  Конструктор должен иметь метод, который возвращает марку, и второй метод, который возвращает год производства машины
//   (год текущий минус возраст машины, использовать Date для получения текущего года) 
//    ... const lexus = new Car(‘lexus’, 2); 
// lexus.получитьМарку(); // “Lexus” 
// lexus.получитьГодВыпуска(); // 2020 (2022 - 2);
//       Марка машины всегда должна возвращаться с большой буквы!
function Car (model, age) {
    this.model = model;
    this.age = age;

    this.getModel = function () {
        return `${this.model[0].toUpperCase()}${this.model.slice(1)}`
    }
    
    this.getManufactureYear = function () {
        var year = new Date().getFullYear();
        return year - this.age;
    }
}
// 2. Написать конструктор, который умеет элементарно шифровать строки 
// (например, сделать из строки строку-перевертыш, или заменить все символы их цифровым представлением, или любой другой метод).
//  Конструктор при инициализации получает строку и имеет следующие методы:
// a. показать оригинальную строку (пустая строка, если все удалили)
// b. показать зашифрованную строку
// c.  стереть все данные - метод должен удалить все строки
// Строки не должны быть доступны через this, только с помощью методов.
function EncodeStr (string) {
    var originalString = string;

    this.getOriginalString = function () {
        return originalString;
    }

    this.getDecodedString = function () {
        return originalString.split('').reverse().join('');
    }

    this.clearAll = function () {
        originalString = '';
    }
}
// 3. Создать класс, который создает экземпляры, работающие со строкой и имеет следующие свойства и методы:
// a. свойство “строка” будет содержать строку
// b. методы для получения и установки строки
// c. метод для получения длины строки
// d. при вызове toString() вернуть строку
// e. при приведении объекта к числу вернуть длину строки
// const str = new КлассСтрока(‘test’); str.получить(); // ‘test’ +str; // 4 str.toString(); // ‘test’
class StringClass {
    string = '';
    
    constructor(string) {
      this.string = string;
    }
    
    getString() {
      return this.string;
    }
  
    setString(newString) {
      this.string = newString;
    }
  
    getLength() {
      return this.string.length;
    }
  
    toString() {
      return String(this.string);
    }
   
    valueOf() {
      return this.string.length;
    }
  }
// 1. Есть класс Planet 
// function Planet(name) {
//        this.name = name;
//        this.getName = function () {
//         return 'Planet name is ' + this.name;
//     } }
//  Создать наследника от Planet, который будет называться PlanetWithSatellite и будет принимать, кроме name, название спутника (satelliteName).
// Переопределите метод getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку + дополнительный текст 'The satellite is' + satelliteName.  
// Например: var earth = new PlanetWithSatellite('earth', 'moon'); earth.getName(); // 'Planet name is earth. The satellite is moon’
function Planet(name) {
    this.name = name;

    this.getName = function () {
      return 'Planet name is ' + this.name;
    }
}

function PlanetWithSatellite (name, satelliteName) {
    Planet.call(this, name);

    this.satelliteName = satelliteName;

    var originalFunc = this.getName;

    this.getName = function () {
        var result = originalFunc.call(this);
        result += `. The satellite is ${satelliteName}`;
        return result;
    }
}

// 2. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию”
//  (метод должен вывести имя и дату регистрации в виде объекта). Метод должен быть объявлен с помощью прототипов (Func.prototype...)
// Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть true/false, должно быть скрытым).
// Свойства определяются в момент вызова конструктора. 
// У класса “Гость” должно быть свойство “срокДействия” (validDate, например - поле также должно быть скрытым), содержащее дату (например, одну неделю от момента регистрации). 
// У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”)
class User {
    name = '';
    date = '';
   
   constructor(name, date) {
     this.name = name;
     this.date = date;
   }
 }
 
 User.prototype.getInfo = function () {
   let obj = {}
   obj.name = this.name;
   obj.date = this.date;
   return obj; 
 };
 
 class Admin extends User { 
   #superAdmin;
   
   constructor(name,date,isAdmin) {
     super(name, date);
     this.#superAdmin = isAdmin;
   }
   getInfo() {
     let obj = {}
     obj.name = this.name;
     obj.date = this.date;
     obj.superAdmin = this.#superAdmin;
     return obj;
   }
 }
 
 class Guest extends User {
   #validDate;
   
   constructor(name,date,date2) {
     super(name,date);
     this.#validDate = Number(date) + Number(date2);
   }
   
    getInfo() {
     let obj = {}
     obj.name = this.name;
     obj.date = this.date;
     obj.validDate = this.#validDate;
     return obj;
    }
 }
 
