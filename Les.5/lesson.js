let tasks = [
    "Выучить JavaScript",
    "Выучить Andgular 4",
    "Сходить на конференцию"
];

let ul = document.querySelector('.list-group');
// let deleteBtns = document.getElementsByClassName('delete-item');
let form = document.forms['addTodoItem'];
let inputText = form.elements['todoText'];

function listTemplate(task) {
    // create list item
    let li = document.createElement('li');
    li.textContent = task;
    li.className = 'list-group-item d-flex align-items-center'; 
    // create tag i fa-trash-can
    let iDelete = document.createElement('i');
    iDelete.className = 'fa-solid fa-trash-can delete-item ms-auto'; 
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
    // generateList(tasks);
    // insertAdjacentElement('position', 'element')
    ul.insertAdjacentElement('afterbegin', listTemplate(list));
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
}

ul.addEventListener("click", function (e){
    if (e.target.classList.contains('delete-item')) {
       deleteListItem(e.target);
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


// // События
// let btn = document.querySelector('.clear-btn');

// function click1(e) {  //addEventListener(событие, хендлер)
//     console.log(e);
// };
// function click2(e) {  //addEventListener(событие, хендлер)
//     console.log(e);
// };

// btn.addEventListener("click", click1);  //addEventListener(событие, хендлер)
// btn.addEventListener("click", click2);

// btn.removeEventListener("click", click1); // removeEventListener(событие, удаляемый обработчик)