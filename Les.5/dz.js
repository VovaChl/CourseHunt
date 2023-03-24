// Домашнее задание. 

// 1. При добавлении новой задачи выводить над формой уведомление (Task added success!) для разметки использовать alert alert-success. Соблюдайте отступы между блоками. 

// 2. При удалении задачи должно появляться то же уведомление но с другим текстом (Task has been removed success!) и у алерта должны быть классы alert alert-danger что бы он был красного цвета. 

// Подробно по классам бутстрапа относительно алертов смотреть тут: https://getbootstrap.com/docs/4.0/components/alerts/ 


let tasks = [
  "Выучить JavaScript",
  "Выучить Andgular 4",
  "Сходить на конференцию"
];

let ul = document.querySelector('.list-group');
let form = document.forms['addTodoItem'];
let inputText = form.elements['todoText'];
let Alert = document.querySelector('.alert-success');

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

function showAlert(el,className,text,extraClass) {
  el.classList.remove(extraClass);
  el.textContent= text;
  el.classList.add(className);
  if (text === 'Task has been removed success!') {
    el.classList.add(extraClass);
  }
  setTimeout(() => {
      hideInfo(Alert,className,extraClass)
    }, 5000);
}

function hideInfo (el, hideClass, extraClass) {
  el.classList.remove(hideClass);
  el.classList.remove(extraClass);
};


function generateList(tasksArray) {
  
  clearList();

  for (let i = 0; i < tasksArray.length; i++) {
      ul.appendChild(listTemplate(tasksArray[i]));
  }

}

function addList (list) {
  tasks.unshift(list);
  ul.insertAdjacentElement('afterbegin', listTemplate(list));
  showAlert(Alert, 'show','Task added success!', 'alert-danger');
};

function deleteListItem (target) {
  let parent = target.closest('li');
      let index = tasks.indexOf(parent.textContent);
      tasks.splice(index,1);
      parent.remove();
      showAlert(Alert,'show','Task has been removed success!', 'alert-danger');
}

ul.addEventListener("click", function (e){
  if (e.target.classList.contains('delete-item')) {
     deleteListItem(e.target);
  }
});

form.addEventListener('submit', function (e){
  e.preventDefault();
  if (inputText.value) {
      addList(inputText.value);
      form.reset();
  }
  else {
      inputText.classList.add('is-invalid');
  }
});

inputText.addEventListener('keyup', function (e) { 
  if ( inputText.value ) {
      inputText.classList.remove('is-invalid');
  }
});

generateList(tasks);