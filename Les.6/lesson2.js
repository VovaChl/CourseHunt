let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

let ul = document.querySelector('.list-group');
// let deleteBtns = document.getElementsByClassName('delete-item');
let form = document.forms['addTodoItem'];
let inputText = form.elements['todoText'];

function listTemplate(task) {
    // create list item
    let li = document.createElement('li');
    li.className = 'list-group-item d-flex'; 
    let span = document.createElement('span');
    span.textContent = task;
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
    tasks.unshift(list);
    ul.insertAdjacentElement('afterbegin', listTemplate(list));
    //adds to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks))
};

// function setDeleteEvent () {
//     for (let i = 0; i < deleteBtns.length; i++) {
//         deleteBtns[i].addEventListener("click", function(e) {
//             console.log('click');
//         });
//     }
// }
function deleteListItem (target) {
    // Delete list item
        // 1. Найти родителя
        // 2. Удалить родителя
        // 3. splice, index, indexOf, text
    let parent = target.closest('li');
        let index = tasks.indexOf(parent.textContent);
        tasks.splice(index,1);
        parent.remove();
        //update localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks))
}

ul.addEventListener("click", function (e){
    if (e.target.classList.contains('delete-item')) {
       deleteListItem(e.target);
    } 

    if (e.target.classList.contains('edit-item')) {
        let span = e.target.closest('li').querySelector('span');
        span.setAtribute('contenteditable', true);
        span.focus();

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