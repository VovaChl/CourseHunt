// init user singleton


class UI {
    constructor() {
        this.login = document.querySelector('.login');
        this.authorized = document.querySelector('.authorized');
        this.roomsList = document.querySelector('.rooms-list');
        this.userList = document.querySelector('.users-list');
        this.messageContainer = document.querySelector('.message-container');
        this.navUserName = document.querySelector('.user-name');
        this.user = USER.getInstance();
    }

    showLogin() {
        this.login.style.display = 'block'
    }

    hideLogin() {
        this.login.style.display = 'none'
    }

    showAuthorized() {
        let iam = this.user.getUser();
        this.navUserName.innerText = `${iam.username}`;
        this.authorized.style.display = 'block'
    }

    hideAuthorized() {
        this.authorized.style.display = 'none'
    }

    generateRooms(rooms) {
        this.roomsList.innerHTML ='';

        rooms.forEach((room, index) => {
            this.roomsList.insertAdjacentHTML("beforeend", UI.roomListTemplate(room, index))
        })
    }

    generateUsersInRoom(users) {
        this.userList.innerHTML ='';
        
        users.forEach((user) => this.userList.insertAdjacentHTML("beforeend", UI.userListTemplate(user)));

        // for (let user in users) {
        //     this.userList.insertAdjacentHTML("beforeend", UI.userListTemplate(user, users[user.id]))
        // }
    }

    addMessage(message) {
        let className = this.getClass(message);
        this.messageContainer.insertAdjacentHTML("beforeend", UI.messageTemplate(message, className));
    }

    newUserJoin(name) {
        this.messageContainer.insertAdjacentHTML("beforeend", UI.newUserJoinTemplate(name));
    }

    userLeft(name) {
        this.messageContainer.insertAdjacentHTML("beforeend", UI.userLeftTemplate(name));
    }

    getClass(data) {
        let iam = this.user.getUser();
        if (data.username === iam.username){
            return {
                target: 'from',
                bgColor: 'light-green accent-3'
            }
        } else {
            return {
                target: 'to',
                bgColor: 'light-blue accent-3'
            }
        }
    }

    static roomListTemplate(room,index) {
        return `
            <li><a href="#" class="waves-effect" data-room-index="${index}">${room}</a></li>
        `;
    }

    static userListTemplate({name, id}) {
        return `
            <li class="collection-item" data-user-id="${id}">${name}</li>
        `;
    }

    static messageTemplate(msg, className) {
        let date = new Date();
        let hours = date.getHours() > 10 ? date.getHours() : '0' + date.getHours();
        let minutes = date.getMinutes()> 10 ? date.getMinutes() : '0' + date.getMinutes();
        let seconds = date.getSeconds()> 10 ? date.getSeconds() : '0' + date.getSeconds();
        return `
            <div class="message ${className.target} ">
                <div class="card ${className.bgColor}">
                    <div class="card-content white-text">
                        <p class="black-text">${hours}:${minutes}:${seconds}</p>
                        <p class="black-text">${msg.username ?msg.username +':' : ''}</p>
                        <h6>${msg.message}</h6> 
                    </div>
                </div>
           </div>
        `;
    }

    static newUserJoinTemplate(name) {
        let date = new Date();
        let hours = date.getHours() > 10 ? date.getHours() : '0' + date.getHours();
        let minutes = date.getMinutes()> 10 ? date.getMinutes() : '0' + date.getMinutes();
        let seconds = date.getSeconds()> 10 ? date.getSeconds() : '0' + date.getSeconds();
        return `
            <div class="card teal lighten-2">
                
                    <div class="card-content white-text">
                        <p class="black-text">${hours}:${minutes}:${seconds}</p>
                        <h6>User ${name} joined chat</h6>
                    </div>
           </div>
        `;
    }

    static userLeftTemplate(name) {
        let date = new Date();
        let hours = date.getHours() > 10 ? date.getHours() : '0' + date.getHours();
        let minutes = date.getMinutes()> 10 ? date.getMinutes() : '0' + date.getMinutes();
        let seconds = date.getSeconds()> 10 ? date.getSeconds() : '0' + date.getSeconds();
        return `
            <div class="card teal lighten-2">
                
                    <div class="card-content white-text">
                        <p class="black-text">${hours}:${minutes}:${seconds}</p>
                        <h6>User ${name} left the room</h6>
                    </div>
           </div>
        `;
    }

}