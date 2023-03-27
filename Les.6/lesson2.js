let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

let ul = document.querySelector('.list-group');
let form = document.forms['addTodoItem'];
let inputText = form.elements['todoText'];
let clearAllButton = document.querySelector('.clear-btn');
let notificationAlert = document.querySelector('.notification-alert');

function generateId() {
    let id = '';
    let words = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    
    for (let i = 0; i < 15; i++) {
        let  position = Math.floor(Math.random() * words.length);
        id += words[position];
    }

    return id;
}

function listTemplate(task) {
    // create list item
    let li = document.createElement('li');
    li.className = 'list-group-item d-flex'; 
    li.setAttribute('data-id', task.id);
    let span = document.createElement('span');
    span.textContent = task.text;
    // create tag i fa-trash-can
    let iDelete = document.createElement('i');
    iDelete.className = 'fa-solid fa-trash-can delete-item'; 
    let iEdit = document.createElement('i');
    iEdit.className = 'fa-solid fa-edit edit-item ms-auto me-2'; 
    li.appendChild(span);
    li.appendChild(iEdit);
    li.appendChild(iDelete);

    return li;
}

function clearList() {
    ul.innerHTML = '';
}

function generateList(tasksArray) {
    
    clearList();

    for (let i = 0; i < tasksArray.length; i++) {
        // let li = listTemplate[i]; 
        // ul.appendChild(li); тож самое, что ниже
        ul.appendChild(listTemplate(tasksArray[i]));
    }

    //setDeleteEvent();
}

function addList (list) {
    let newTask = {
        id: generateId(),
        text: list
    }

    tasks.unshift(newTask);

    ul.insertAdjacentElement('afterbegin', listTemplate(newTask));
    //adds to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks))

    message({
        text: 'Task added success',
        cssClass: 'alert-success',
        timeout: 4000
    });
};

function deleteListItem (id) {

        for (let i = 0; i < tasks.length; i++) {
            if ( tasks[i].id === id) {
                tasks.splice(i,1);
                break;
            }
        }
        //update to localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks))

        message({
            text: 'Task deleted success',
            cssClass: 'alert-danger',
            timeout: 4000
        });
}

function editListItem(id, newvalue) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].text = newvalue;
            break;
        }
    }

    localStorage.setItem('tasks', JSON.stringify(tasks))

    message({
        text: 'Task updated success',
        cssClass: 'alert-success',
        timeout: 4000
    });
}

clearAllButton.addEventListener('click', function () {
    clearList();
    tasks = [];
    localStorage.setItem('tasks', JSON.stringify(tasks));
});



function message(settings) {
    notificationAlert.classList.remove('alert-success');
    notificationAlert.classList.remove('alert-danger');
    notificationAlert.classList.add(settings.cssClass);
    notificationAlert.textContent = settings.text;
    notificationAlert.classList.add('show');
    setTimeout(function () {
        notificationAlert.classList.remove('show');
    }, settings.timeout);
};

ul.addEventListener('click', function (e){
    if (e.target.classList.contains('delete-item')) {
        let parent = e.target.closest('li');
        let id = parent.dataset.id; 
       deleteListItem(id);
       parent.remove();
    } 

    if (e.target.classList.contains('edit-item')) {
        e.target.classList.toggle('fa-save');
        let id = e.target.closest('li').dataset.id;
        let span = e.target.closest('li').querySelector('span');

        if (e.target.classList.contains('fa-save')) {
            span.setAttribute('contenteditable', true);
            span.focus();
        }
        else {
            span.setAttribute('contenteditable', false);
            span.blur();
            editListItem(id, span.textContent);
        }

    }
});

form.addEventListener('submit', function (e){
    e.preventDefault();
    // 0. Найти Input
    // 1. Get input text input.value
    // 2. value send to addList || insert adjustment element
    if (inputText.value) {
        addList(inputText.value);
        form.reset();
    }
    else {
        inputText.classList.add('is-invalid');
    }
});

inputText.addEventListener('keyup', function (e) { //this внутри обработчика указывает на элемент (в данном случае inputText)
    if ( inputText.value ) {
        inputText.classList.remove('is-invalid');
    }
});

generateList(tasks);