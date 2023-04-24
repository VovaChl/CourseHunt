// forEach, filter , map, every, some, reduce
let numbers = [10, 20, -10, 2, -5];
let users = [
    {
        name:1,
        age:29,
        gender: 'male', 
        balance: 100,
    },
    {
        name:2,
        age:22,
        gender: 'female',
        balance: 200,
    },
    {
        name:3,
        age:21,
        gender: 'male',
        balance: 300,
    },
]
// Filter
let res = numbers.filter((item,index,array) => {
    return item >= 0;
});

res = users.filter(user => {
    return user.gender === 'male';
})
res = users.filter(user => user.gender === 'male');

// Map
let mapRes = users.map(user => user.name);

mapRes = users.map(user => {
 user.age = user.age + ' years old';
 return user;
});

// Reduce
let total = users.reduce((sum, user) => {
    return sum += user.balance;
}, 0);
total = users.reduce((sum, user) =>  sum += user.balance, 0);


// Promises

// cb HEEEEEEEEEEEEEELLL
// let post;
// let comments;
// let id = 1;

// ajax.send({
//     method: 'GET',
//     url: `https://jsonplaceholder.typicode.com/posts/${id}`,
//     success: function (res) {
//         post = JSON.parse(res);

//         ajax.send({
//             method: 'GET',
//             url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
//             success: function (res) {
//                 comments = JSON.parse(res);
//                 // выводим комментарии на страницу
//             }
//         });
//     },
//     error: function (err) {
//         console.log(err);
//     }
// });

// Базовый пример промиса
// const promise1 = new Promise(function(resolve, reject) {
//     //resolve, reject  - функции которвые вызовутся выполнено или отклонено промисом, пока не выполнили промис в состоянии ожидания (pending)
//     setTimeout(function() {
//         //reject('Error');
//         resolve('First step');
//     }, 2000);
// });

// const promise2 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         //reject('Error');
//         resolve('Second step');
//     }, 2000);
// });

// const promise3 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         //reject('Error');
//         resolve('Third step');
//     }, 2000);
// });

// promise1
//     .then(data => {
//         console.log(data);
//         return 'some new info';
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch(err => {   
//         console.log(err);
//     })

// function promise1() {
//     return new Promise(function(resolve,reject){
//         setTimeout(function() {
//             console.log('First step');
//             resolve('First step');
//             }, 2000);
//     })
// }

// function promise2(data) {
//     return new Promise(function(resolve,reject){
//         setTimeout(function() {
//             console.log(data, 'Second step');
//             reject('Error on second step');
//             resolve('Second step');
//             }, 2000);
//     })
// }

// function promise3(data) {
//     return new Promise(function(resolve,reject){
//         setTimeout(function() {
//             console.log(data, 'Third step');
//             resolve('Third step');
//             }, 2000);
//     })
// }

// promise1()
//     .then(promise2)
//     .then(promise3)
//     .catch(err => {
//         console.log(err);
//     });

let post;
let comments;

function getPostByID(id) {
    return new Promise(function (resolve, reject) {
    ajax.send({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
        success: resolve,
        error: reject,
        })
    })
}

function getCommentsByID (id) {
    return new Promise(function (resolve, reject) {
    ajax.send({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
        success: resolve,
        error: reject,
        })
    })
}

function generateTemplate(comments) {
    comments.forEach(comment => {
        //
    });
}

getPostByID(1)
    .then(res => {
        let data = JSON.parse(res);
        return data.id
    })
    .then(getCommentsByID)
    .then(res => {
        comments = JSON.parse(res);
        return comments;
    })
    .then(generateTemplate)
    .catch(err => {
        console.log(err);
    });

// Fetch
fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`, {
    //settings
    method: 'GET',
    //body, headers and etc.
})
    .then(res => {
        console.log(res.status);
        console.log(res.headers.get('Content-type'));
        return res.json();
    })
    .then (data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })