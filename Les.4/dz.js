// 1. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива: 
// doubleArray([1,2,3]) = [1,2,3,1,2,3]
function doubleArray (arr) {
    let newArr = [].concat(arr).concat(arr);
  
    return newArr;
}
//  2.	Получить последний элемент массива (массив не менять). Использовать функцию
function getLastArrElement (arr) {
    return arr[arr.length-1];
}
// 3. Создать функцию, которая принимает число N и возвращает массив, заполненный числами от 1 до N: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
function getArray (N) {
    let arr = [];
    for (let i = 1; i<=N; i++) {
        arr.push(i);
    }
    return arr;
}
// 4. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент,
// а возвращает массив из оставшихся значений: changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.
function changeCollection () {
    let newArr = [];
    for (let i = 0; i < arguments.length; i++) {
      arguments[i].splice(0, 1);
      newArr.push(arguments[i]);
    }
    return newArr;
}

// 1. Дана произвольная строка “bcdaeflmjgkhi” - упорядочить буквы по алфавиту и вернуть строку с буквами в обратном порядке ("mlkjihgfedcba"). Оформить в виде функции.
function getReversedSortedString (string) {
    return string.split("").sort().reverse().join('');
}
// 2. Отсортировать массив [2, 4, 7, 1, -2, 10, -9] в обратном порядке: [10, 7, 4, 2, 1, -2, -9]. Используйте функцию.
function reverseArray (array) {
    return array.sort((a,b) => b - a );
}
// 3. Написать функцию, которая принимает три аргумента: произвольный массив и два числа, первое из которых означает начальный номер элемента в массиве, второе - конечный номер.
// Функция должна вернуть новый массив, состоящий из элементов первой коллекции согласно аргументам (с - по): 
// getNewArray(['a', 'b', 'c', 'd', 'e', 'f'], 2, 4) = ["c", "d", "e"]
// Исходный массив не менять. Циклы не использовать.
function getNewArray (array, startNumber, lastNumber) {
    let newArr = [].concat(array);
    newArr.splice(lastNumber+1);
    newArr.splice(0,startNumber);
    return newArr;
}

function getNewArray1 (array, startNumber, lastNumber) {
    let newArr = array.slice(startNumber,lastNumber+1);
    return newArr;
}
// 4. Удвоить все элементы массива, не используя циклы
// [‘one’, 2, ‘three’, 4] → [‘one’, 2, ‘three’, 4, ‘one’, 2, ‘three’, 4]
function doubleArray1 (arr) {
    let newArr = [].concat(arr).concat(arr);
  
    return newArr;
}
// 5. Удалить из [1,2,3,4,5] второй и третий элементы (3,4)
let arr = [1,2,3,4,5];
arr.splice(2, 2)
// 6. Удалить из [1,2,3,4,5] второй и третий элементы (3,4) и на их место вставить ‘three’, ‘four’
let arr1 = [1,2,3,4,5];
arr1.splice(2, 2, 'three', 'four');
// 7. Вставить в произвольный массив после третьего элемента любое значение, например:  ['I', 'am', 'an', 'array'] → ["I", "am", "an", "awesome", "array"]
let arr2 = ['I', 'am', 'an', 'array'];
arr2.splice(3, 0, "awesome");
// 8. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной):  
//[ [14, 45], [18], ['a', 'c', 'd'] ] → [ [18], [14, 45], ['a', 'c', 'd'] ]
let arr3 = [ 
    [14, 45], [18],
     ['a', 'c', 'd'] 
]
arr3.sort((a,b) => a.length-b.length)
// 9.	Создать копию произвольного массива (slice, concat)
let arr4 = [1,2,3,4,44,4,4];
let arr5 = [].concat(arr4);
let arr6 = arr4.slice();
// 10.	Есть массив объектов:
// [
//   {cpu: 'intel', info: {cores:2, сache: 3}},
//   {cpu: 'intel', info: {cores:4, сache: 4}},
//   {cpu: 'amd', info: {cores:1, сache: 1}},
//   {cpu: 'intel', info: {cores:3, сache: 2}},
//   {cpu: 'amd', info: {cores:4, сache: 2}}
// ]
// Отсортировать их по возрастающему количеству ядер (cores).
let arr7 =  [
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
    ]
arr7.sort((a,b) => a.info.cores - b.info.cores);
// 11.	Создать функцию, которая будет принимать массив продуктов и две цены. 
// Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и отсортировать от дешевых к дорогим:   const products = [
//   {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
//   {title: 'prod3', price: 15}, {title: 'prod4', price: 25}, 
//   {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
//   {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
// ];
// filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]
function filterCollection (array, price1, price2) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].price >= price1 && array[i].price <= price2 ) {
            newArr[i] = array[i]
        }
    }
    newArr.sort((a,b) => a.price - b.price)
    return newArr;
}
