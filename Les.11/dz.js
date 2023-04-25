// 1. Создать функцию, которая возвращает промис.  Функция принимает два аргумента - время, через которое промис должен выполниться, и значение, с которым промис будет выполнен. 
// function promiseCreator(...) {...}
// const prom = promiseCreator(500, 'Ok!');
// prom.then(console.log);
// // Ok

function promiseCreator(time, value) {
    return new Promise (function(resolve) {
        setTimeout(resolve(value), time)
    }) 
}

// 2. Используя fetch метод, создать get запрос к адресу https://jsonplaceholder.typicode.com/posts. 

// Отобразить в списке ul полученные поля из response. Показывать только id и title поля:
// 1 sunt aut...
// 2 qui est…
// Не производить манипуляции с DOM в цикле!

fetch(`https://jsonplaceholder.typicode.com/posts`, { method: 'GET' })
    .then(res => {
        return res.json();
    })
    .then (data => {
        data.forEach(post => console.log(post.id, post.title))
    })
    .catch(err => {
        console.log(err);
    })

// 3. Выполнить два запроса: 
// - https://jsonplaceholder.typicode.com/posts  
// - https://jsonplaceholder.typicode.com/users. 

// Вывести в консоль информацию о количестве постов и юзеров.
// Запросы должны выполняться одновременно, информацию выводить только после того, как будут обработаны оба запроса.

var postsCount;
var usersCount;

function getPosts() {
    return new Promise(function (resolve, reject) {
    ajax.send({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
        success: resolve,
        error: reject,
        })
    })
}

function getUsers () {
    return new Promise(function (resolve, reject) {
    ajax.send({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users',
        success: resolve,
        error: reject,
        })
    })
}

getPosts()
    .then(res => {
        let data = JSON.parse(res);
        postsCount = data.length;
    })
    .then(getUsers)
    .then(res => {
        users = JSON.parse(res);
        usersCount = users.length;
    })
    .then(res => console.log(`Постов: ${postsCount}, пользователей: ${usersCount}`))
    .catch(err => {
        console.log(err);
    });