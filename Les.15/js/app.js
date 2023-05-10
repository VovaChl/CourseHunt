// Init Tasks module
const tasks = Tasks.getInstance();

// Init UI module
const ui = UI;

// Init LS module
const localstorage = Localstorage;

// Init notification
const notification = Notification;

// Init Observers
const addTaskObserver = new EventObserver();
const removeTaskObserver = new EventObserver();
const removeAllTasksObserver = new EventObserver();

// Subscribe on tasks evt
addTaskObserver.subscribe(localstorage.update);
addTaskObserver.subscribe(notification.show);
addTaskObserver.subscribe(ui.checkList);

removeTaskObserver.subscribe(localstorage.update);
removeTaskObserver.subscribe(notification.show);
removeTaskObserver.subscribe(ui.checkList);

removeAllTasksObserver.subscribe(localstorage.update);
removeAllTasksObserver.subscribe(notification.show);
removeAllTasksObserver.subscribe(ui.checkList);

// Init elements
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

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!inputText.value) {
        // Show error, is-invalid
    } else {
        // let newTask = tasks.addTask({ text: inputText.value });
        // ui.addTask(newTask);
        tasks.addTask({ text: inputText.value })
        .then(task => ui.addTask(task))
        .then(() => addTaskObserver.fire({ 
            text: 'Новая задача добавлена успешно',
            class: 'alert alert-success' 
        }));
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
})

clearBtn.addEventListener('click', function (e) {
    tasks.removeAll()
        .then(() => ui.deleteAll())
        .then(() => removeAllTasksObserver.fire({
            text: 'Все задачи удалены успешно',
            class: 'alert alert-warning'
        }))
})