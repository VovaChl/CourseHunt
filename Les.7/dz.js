// 1. Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры: 
// const rectangle = {width:..., height:..., getSquare:...}; 
let rectangle = {
    width: 10,
    heigth: 10,
    getSquare: function () {
        return this.width * this.heigth;
    }
};
// 2. Создать объект, у которого будет цена товара и его скидка, а также два метода: 
// для получения цены и для расчета цены с учетом скидки: const price = {    price: 10,    discount: '15%',   … }; price.getPrice(); 
// // 10 price.getPriceWithDiscount(); // 8.5
let price = {
    price: 10,
    discount: '15%',
    getPrice:  function () {
        return this.price;
    },
    getPriceWithDiscount: function () {
        return this.price * (100 - this.discount.replace('%','')) / 100;
    }
}
// 3. Дан объект и функция: const user = { name: 'Abraham' };  function  getUserName() {...}; 
// 	Внесите в этот код такие изменения, чтобы можно было вызвать
// 	user.getName() и получить 'Abraham'
const user = {
    name: 'Abraham',
    getName: getUserName
}; 
function getUserName() {
    return this.name;
}; 
// 4. Создать объект, у которого будет поле высота и метод “увеличить высоту на один”. Метод должен возвращать новую высоту: object.height = 10; object.inc(); 
// // придумать свое название для метода object.height; // 11;
let obj = {
    heigth: 10,
    increaseHeightByOne: function () {
        return ++this.heigth;
    }
};
// 5. Создать объект “вычислитель”, у которого есть числовое свойство “значение” и методы “удвоить”, “прибавить один”, 
// “отнять один”. Методы можно вызывать через точку, образуя цепочку методов:
// const numerator = {   value: 1,
//   double: function () {...},   plusOne: function () {...},   minusOne: function () {...}, }
// numerator.double().plusOne().plusOne().minusOne();
// numerator.value // 3
const numerator = {
    value: 1,
     double: function () {
         this.value = this.value * 2;
         return this;
     },
     plusOne: function () {
         this.value = this.value + 1;
         return this;
     },
     minusOne: function () {
         this.value = this.value - 1;
         return this;
     }
  };
numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value); 
// 6. const user = {name: 'Abraham'},
// otherUser = {
//   name: 'John', 
//   getName: function () {return this.name;}
// }
// user.getName; // undefined
// user.getName = otherUser.getName;
// user.getName(); // "Abraham"
// otherUser.getName(); // "John"
// Разобрать и объяснить, что тут происходит
'Создается объект user с name, а также другой юзер с name и методом getName, возвращающим имя этого пользователя,'
' При попытке вызвать user.getName; получаем undefined, потому что у данного объекта нет этого метода'
'Дальше юзер одалживает метод у другого юзера, затем при вызове уже все норм и возвращается имя юзера, а для другого юзера возвращается его имя, так как в функции this'
// 7. Что выведет код, почему?
// 	function getList() { return this.list; }
// 	const users = {
// 	  length: 4,
// 	  list: ['Abraham', 'James', 'John', 'Steven']
// }
// 	getList(); // ? 
'undefined, потому что в глобальном окружении нет переменной list' 
// 	users.getList = getList;
// 	users.getList(); // ?
['Abraham', 'James', 'John', 'Steven'],'потому что у юзера появилось свойство, равное функции гетлист'
// 	getList.call(users); // ?
['Abraham', 'James', 'John', 'Steven'], "потому что функция вызывается для окружения users и отдает его лист"
// 8. Создать объект с розничной ценой и количеством продуктов. 
// Этот объект должен содержать метод для получения общей  стоимости всех товаров (цена * количество продуктов) 
let products = {
    price: 100,
    count: 46,
    getTotalPrice: function () {
        return this.price * this.count;
    }
}
// 9. Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. 
// Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы. Для этого “позаимствуйте” метод из предыдущего объекта.
let details = {
    count: 100,
    price: 500
}
details.getTotalPrice = products.getTotalPrice;
// 10. Даны объект и функция:
const sizes = {width: 5, height: 10};
const getSquare = function () { return this.width * this.height };
// Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes
sizes.getSquare = getSquare; // ну тут какб объект меняется
getSquare.call(sizes); // а тут норм
// 11. Дан массив const numbers = [4,12, 0, 10, -2, 4]. Используя ссылку на массив numbers и Math.min, найти минимальный элемент массива
const numbers = [4,12, 0, 10, -2, 4];
const minimum = Math.min(...numbers);
// 12. const element = {
//     height: '15px',
//     marginTop: '5px',
//     marginBottom: '5px',
//     getFullHeight: function () {
// return this.height + this. marginTop + this.marginBottom; // эта часть с ошибкой
// }
// };
// Исправить метод getFullHeight таким образом, чтобы можно было вычислить сумму трех слагаемых (высота плюс отступы).
// Для другого объекта block {height: '5px', marginTop: '3px', marginBottom: '3px'} вычислить полную высоту getFullHeight, используя для этого объект element. 
// В объект ничего не дописывать.
const element = {
    height: '15px',
    marginTop: '5px',
    marginBottom: '5px',
    getFullHeight: function () {
    return this.height + this.marginTop + this.marginBottom;
    }
};
let block = {
    height: '5px',
    marginTop: '3px',
    marginBottom: '3px'
};
block.getFullHeight = element.getFullHeight;
// 13.  Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.
const element1 = {   height: 25,
    getHeight: function () { return this.height; } 	

};
let  getElementHeight = element1.getHeight;
getElementHeight(); // undefined
'Решение'
getElementHeight = element1.getHeight.bind(element1);
getElementHeight(); // 25
  