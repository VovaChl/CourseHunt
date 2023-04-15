// AJAX
// FETCH
// Socket


// url, route
// request, req - запрос к серверу
// response, res - ответ от сервера
// methods:
// get, GET - получение данных от сервера
// post, POST - передача данных серверу
// put, PUT - обновляение данных на сервере
// delete, DELETE - удаление данных на сервере
// Headers - заголовки (доп.информация)

// jsonplaceholder.typicode.com
// const xhr = new XMLHttpRequest();

// // xhr.addEventListener('readystatechange', function (e) {
// //     console.log(xhr.readyState);

// //     if (xhr.readyState === 4) {
// //         console.log(xhr.responseText);
// //     }
// // })

// xhr.addEventListener('load', function (e) {
//     console.log(xhr.responseText);

//     //xhr.status -статус код 200,404 и тд
//     //xhr.statusText = текст ответа 'ok' , 'not found'
// });

// xhr.addEventListener('error', function (e) {
//     console.log(xhr.responseText);
// });

// xhr.addEventListener('timeout', function (e) {
//     console.log('timeout');
// });

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// xhr.timeout = 3000;

// xhr.setRequestHeader('Content-type', 'application/json');

// // xhr.getResponseHeader('Content-type');
// // xhr.getAllResponseHeaders(); 

// xhr.send();

// get all posts
ajax.send({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
    success: function (res) {
        let responce = JSON.parse(res)
        console.log(responce);
    },
    error: function (err) {
        console.log(err);
    }
});

ajax.send({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,      
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    success: function (res) {
        let responce = JSON.parse(res)
        console.log(responce);
    },
    error: function (err) {
        console.log(err);
    }
});