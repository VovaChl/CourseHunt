const UI = (function () {

    const ul = document.querySelector('.list-group');
    const emptyAlert = document.querySelector('.empty-alert');

    const listTemplate = function (task) {
    let li = document.createElement('li');
    li.className = 'list-group-item d-flex'; 
    li.setAttribute('data-id', task.id);
    let span = document.createElement('span');
    span.textContent = task.text;
    let iDelete = document.createElement('i');
    iDelete.className = 'fa-solid fa-trash-can delete-item'; 
    let iEdit = document.createElement('i');
    iEdit.className = 'fa-solid fa-edit edit-item ms-auto me-2'; 
    li.appendChild(span);
    li.appendChild(iEdit);
    li.appendChild(iDelete);

    return li;
    }

    const addTask = function (task) {
        ul.insertAdjacentElement('afterbegin', listTemplate(task));
    }

    const deleteTask = function (id) {
        const li = ul.querySelector(`[data-id="${id}"]`)
        li.remove();
    }

    const deleteAll = function () {
        ul.innerHTML = '';
    }
    
    const checkList = function () {
        if (!ul.children.length) {
            emptyAlert.style.display = 'block';
        } else {
            emptyAlert.style.display = 'none';
        }
    }

    return {
        addTask,
        deleteTask,
        checkList,
        deleteAll
    }

}());