//Init socket
const socket = io();

// init ui

const ui = new UI();

// init USER module

const user = USER.getInstance();

// init elements
const loginForm = document.forms['login-form'];
const userName = loginForm.elements['username'];
const roomsList = document.querySelector('.rooms-list');
const messageForm = document.forms['send-message'];
const message = messageForm.elements['message'];

// Init local var
let currentRoom;

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (userName.value) {
        const name = userName.value;
        user.setUser(name);
        socket.emit('new user', name);
    }
});

roomsList.addEventListener('click', function (e) {
    if (e.target.dataset.roomIndex) {
        let index = e.target.dataset.roomIndex;
        socket.emit('roomchange', index);
        $('.sidenav').sidenav('close');
    }
});

messageForm.addEventListener('submit',(e) => {
    e.preventDefault();

    if(message.value) {
        socket.emit('message', message.value);
        message.value = '';
    }
});

// socket events

socket.on('welcome', room => {
    currentRoom = room;
    ui.hideLogin();
    ui.showAuthorized();
});

socket.on('rooms', rooms => { ui.generateRooms(rooms) });

// socket.on('updateusers', users => { ui.generateUsersInRoom(users) }); // all users

socket.on('chat message', message => { ui.addMessage(message) });

socket.on('new user joined', user => { ui.newUserJoin(user) });

socket.on('roommates', ({usernames}) => {
    let usersArray = Object.keys(usernames)
    .filter(user => usernames[user].room === currentRoom)
    .map( user => {
        usernames[user].name = user;
        return usernames[user];
    });

    ui.generateUsersInRoom(usersArray);
});