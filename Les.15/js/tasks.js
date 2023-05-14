// Init Id module
const id = Id;


const Tasks = (function () {

    let tasks= [];
    let instance;

    const getTasks = function () {
        return tasks;
    }

    const setTasks = function (array) {
        tasks = array;
        return tasks;
    }

    const searchTasks = async function (text) {
        let searchResult = [];

        await tasks.forEach(task => {
            if(task.text.indexOf(text) >= 0) {
                searchResult.push(task)
            }
        })
        
        return searchResult;
    }

    const addTask = async function (task) {
        task.id = id.generate();
        await tasks.unshift(task);

        return task;
    }

    const editTask = async function (id, newText) {
         for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id === id) {
                tasks[i].text = newText;
                break;
            }
        }
    }

    const removeTask = async function (id) {
        tasks = await tasks.filter(task => task.id !== id);
        return tasks;
    }

    const removeAll = async function () {
        tasks = [];
    }

    const createInstance = function () {
        return {
            searchTasks,
            getTasks,
            setTasks,
            addTask,
            editTask,
            removeTask,
            removeAll
        }
    }

    return {
        getInstance: function () {
            return instance || (instance = createInstance());
        }
    }

}()); 