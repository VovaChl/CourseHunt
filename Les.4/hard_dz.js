// Задача со звездочкой. 
// Создать функцию которая будет выводить сообщение на страницу.
// Функция принимает текст сообщения и на странице показывает блок с этим сообщением. 
// За разметку взять alert alert-info из бутстрапа 4.
// Элемент должен быть сразу на странице над списком с задачами и через стили ему должно быть задано display:none свойство. 
// При вызове вашей функции в скрипте добавляется класс show на элемент, на данный класс в стилях должно быть прописано display: block. 
// Для того что бы добавить класс можно использовать следующий метод element.classList.add('имя класса'). 
// Также можно добавить что бы сообщение исчезало через определенное врямя:
// для этого нужно добавить setTimeout который принимает функцию и время через которое эта функция должна сработать, 
// внутри функции вы можете снять класс с alert сделать это можно методом element.classList.remove('имя класса'). 
// Это задание делать только если вы сделали задания из презентаций. 
// По вопросам и уточнениям писать мне в личку

let tasks = [
    "Выучить JavaScript",
    "Выучить Andgular 4",
    "Сходить на конференцию"
];

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

let show_info = document.querySelector('.alert-info');

function showInfo(text) {
    show_info.textContent = text;
    show_info.classList.add('show');
    // hideInfo(show_info,'show');
    setTimeout(() => {
        hideInfo(show_info,'show')
      }, "10000");
};

function hideInfo (el, hideClass) {
    el.classList.remove(hideClass)
};
