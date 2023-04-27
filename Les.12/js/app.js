// Init Github
const github = new Github();
const ui = new UI();

//Init search input
let searchInput = document.getElementById('searchUser');

// Add Event Listener
searchInput.addEventListener('keyup', (e) => {
    // Get input text
    let userText = e.target.value;

    if(userText !== '') {
        // Make http request
        ui.showSpinner();
        github.getUser(userText)
            .then(user => {
                if(user.message === 'Not Found') {
                    // Show alert
                    ui.showAlert(`User: ${userText} not found`, 'alert alert-danger');
                    // Clear profile
                    ui.clearProfile();
                } else {
                    // Show profile
                    ui.clearProfile();
                    ui.showProfile(user);
                    ui.clearAlert();
                }
                
                return user;
            })
            .then(user => github.getRepos(user))
            .then(repos => ui.showRepos(repos))
            .catch(err => console.log(err));
    } else {
        // Clear profile
        ui.clearProfile();
    }
});