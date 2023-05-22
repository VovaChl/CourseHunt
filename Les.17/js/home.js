// Projects service init
const projects = new Projects();

 // Init user
 const user = User.getInstance();

 // Init homeUI
const ui = new HomeUI();

// Init auth
const auth = new Auth();

// Init elements
const signout = document.querySelector('.sign-out');
const projectsContiner = document.querySelector('.projects-list-wrapper');

// Check Auth
firebase.auth().onAuthStateChanged(function(authUser) {
    if (!authUser) {
        // Redirect to login page if unauthorized
        window.location = 'login.html';
    }
    else {
        // Set user
        user.setUser({ email: authUser.email });
        ui.setUserName(authUser.email);
    }
});

signout.addEventListener('click', function (e) {
    auth.signout()
        .then(status => {
            if (status) {
                window.location = 'login.html';
            }
        })
        .catch(error => {
            console.log(error);
        })
})

// Get projects

projects.getAllProjects()
    .then(projectsArray => ui.generateProjectCards(projectsArray))
    .catch(error => console.log(error));

// Delete project
projectsContiner.addEventListener('click', (e) => {
    // Check e.target === 'delete-btn'
    if (e.target.classList.contains('delete-btn')) {
        const id = e.target.closest('.card').dataset.id;
        projects.deleteProject(id)
            .then(projects.getAllProjects)
            .then((projectsArray) => ui.generateProjectCards(projectsArray))
            .catch(error => console.log(error))
    }
})    