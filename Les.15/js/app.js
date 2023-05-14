// Init Tasks module
const tasks = Tasks.getInstance();

// Init UI module
const ui = UI;

// Init LS module
const localstorage = Localstorage;

// Init notification
const notification = Notification;

// Init Observers
let addTaskObserver  = new EventObserver(),
    editTaskObserver  = new EventObserver(),
    removeTaskObserver = new EventObserver(),
    removeAllTasksObserver = new EventObserver();


// Subscribe on tasks evt
addTaskObserver.subscribe(localstorage.update);
addTaskObserver.subscribe(notification.show);
addTaskObserver.subscribe(ui.checkList);

editTaskObserver.subscribe(localstorage.update);
editTaskObserver.subscribe(notification.show);
editTaskObserver.subscribe(ui.checkList);

removeTaskObserver.subscribe(localstorage.update);
removeTaskObserver.subscribe(notification.show);
removeTaskObserver.subscribe(ui.checkList);

removeAllTasksObserver.subscribe(localstorage.update);
removeAllTasksObserver.subscribe(notification.show);
removeAllTasksObserver.subscribe(ui.checkList);

// Init elements
const searchForm = document.forms['searchTodoItem'];
const searchInput = searchForm.elements['searchText'];
const form = document.forms['addTodoItem'];
const inputText = form.elements['todoText'];
const ul = document.querySelector('.list-group');
const clearBtn = document.querySelector('.clear-btn');

window.addEventListener('load', function (e) {

    let ls = localstorage.getTasks();
    if (ls.length) {
        ls.forEach(task => {
            tasks.addTask(task)   
                .then(task => ui.addTask(task));
        });
    } else {
        ui.checkList();
    }

})

searchForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!searchInput.value) {
        searchInput.classList.add('is-invalid');
    } else {
        ui.deleteAll();

        tasks.searchTasks(searchInput.value)
            .then((tasks) => tasks.forEach(task => ui.addTask(task)));
    }
})

searchForm.addEventListener('reset', function (e) {
    ui.deleteAll();

    localstorage.getTasks().forEach(task => ui.addTask(task));
})

searchInput.addEventListener('keyup', function (e) { 
    if (searchInput.value) {
        searchInput.classList.remove('is-invalid');
    }
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!inputText.value) {
        inputText.classList.add('is-invalid');
    } else {
        // let newTask = tasks.addTask({ text: inputText.value });
        // ui.addTask(newTask);
        tasks.addTask({ text: inputText.value })
        .then(task => ui.addTask(task))
        .then(() => addTaskObserver.fire({ 
            text: 'Новая задача добавлена успешно',
            class: 'alert alert-success' 
        }))
        .then(() => form.reset());
    }
});

inputText.addEventListener('keyup', function (e) { 
    if (inputText.value) {
        inputText.classList.remove('is-invalid');
    }
});

ul.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-item')) {
        let id = e.target.closest('li').getAttribute('data-id');
        tasks.removeTask(id)
        .then (() => ui.deleteTask(id))
        .then(() => removeTaskObserver.fire({
            text: 'Задача удалена успешно',
            class: 'alert alert-danger'
        }))
        }

        if (e.target.classList.contains('edit-item')) {
            e.target.classList.toggle('fa-save');
            let id = e.target.closest('li').dataset.id;
            let span = e.target.closest('li').querySelector('span');

            if (e.target.classList.contains('fa-save')) {
                span.setAttribute('contenteditable', true);
                span.focus();
            } else {
                span.setAttribute('contenteditable', false);
                span.blur();
                tasks.editTask(id, span.textContent)
                    .then(() => editTaskObserver.fire({
                        text: 'Задача отредактирована успешно',
                        class: 'alert alert-warning'
                    }))
            }}
})

clearBtn.addEventListener('click', function (e) {
    tasks.removeAll()
        .then(() => ui.deleteAll())
        .then(() => removeAllTasksObserver.fire({
            text: 'Все задачи удалены успешно',
            class: 'alert alert-warning'
        }))
})