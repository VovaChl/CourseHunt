// DOM - объектная модель документа
// BOM - браузерная модель документа
// window - работа с DOM и BOM
// Взаимодействие с DOM через document
// document.body, document.head

// DOM
// Живая коллекция при изменении сразу меняется как и DOM
// Неживая(снимок) querySelector при изменении DOM коллеции остается такой же
// Элементы с id выносятся в отдельное свойство
// let divs = document.getElementsByTagName('div');
// let divsByClass = document.getElementsByClassName(box);
// let divsbyId = document.getElementById(element);

// let divsQuety = document.querySelectorAll('body div'); // вернет все дивы из боди
// let divQuery = documen.querySelector('div'); // вернет первый div

// console.dir(); //отображает элемент в консоли в виде объекта

// каждый элемент хранит информацию о: себе, о соседних элементах, о родительских элементах и о вложенных элементах


// let link = document.querySelector('ul a');

// let parent = link.closest('li'); // closest возвращает ближайщего предка, который выше по уровню вложенности


//Данные
let tasks = [
    "Выучить JavaScript",
    "Выучить Andgular 4",
    "Сходить на конференцию"
];

//<li class="list-group-item">An item</li>;

let ul = document.querySelector('.list-group');

function listTemplate(task) {
    let li = document.createElement('li');
    li.textContent = task;
    li.className = 'list-group-item'; 

    return li;
}

function clearList() {
    ul.innerHTML = '';
}

function generateList(tasksArray) {
    
    clearList();

    for (let i = 0; i < tasksArray.length; i++) {
        ul.appendChild(listTemplate(tasksArray[i]));
    }
}

// Шаги реализации для добавления нового элемента
// 1. В массив tasks добавить элемент методом push/unshift
// 2. Вызвать generateList(tasks);

function addList (list) {
    tasks.unshift(list);
    generateList(tasks);
};

generateList(tasks);


