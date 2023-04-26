class UI {
    constructor() {
        this.profile = document.getElementById('profile');
        this.search_container = document.querySelector('.searchContainer')
    }

    // Display profile
    showProfile(user) {

    }

    // Display repos
    showRepos(repos) {

    }

    // Display alert message
    showAlert (message = '', className = 'alert alert-danger') {
        // Clear any alert
        this.clearAlert();
        // Create template
        const alert = `<div class="${className}">${message}</div>`;

        this.search_container.insertAdjacentHTML('afterbegin', alert);
        // Hide alert after 2s
        setTimeout(() => this.clearAlert(), 2000)
    }

    // Clear alert
    clearAlert() {
        const currentAlert = document.querySelector('.alert') 

        if (currentAlert) {
            currentAlert.remove();
        }
    }
}