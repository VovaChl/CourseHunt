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
        github.getUser(userText)
            .then(user => {
                if(user.message === 'Not Found') {
                    // Show alert
                    ui.showAlert(`User: ${userText} not found`, 'alert alert-danger')
                } else {
                    // Show profile
                }
            })
            .catch(err => console.log(err));
    } else {
        // Clear profile
    }
});