// Projects service init
const projects = new Projects();
let editingProject = {}

 // Init user
 const user = User.getInstance();

 // Init homeUI
const ui = new HomeUI();

// Init auth
const auth = new Auth();

// Init elements
const addBtn = document.querySelector('.add-btn');
const signout = document.querySelector('.sign-out');
const projectsContiner = document.querySelector('.projects-list-wrapper');
const addForm = document.forms['add-new-project-form'];
const editForm = document.forms['edit-project-form'];

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

addBtn.addEventListener('click', () => addForm.reset());

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

    else if (e.target.classList.contains('edit-btn')) {
        const id = e.target.closest('.card').dataset.id;
        editingProject = projectsList.find(project => project.id === id);
        editForm.elements['projectName'].value = editingProject.name;
        editForm.elements['projectDescription'].value = editingProject.description
        editForm.elements['projectPrice'].value = editingProject.price
        editForm.elements['projectAmount'].value = editingProject.amount
        editForm.elements['projectImg'].value = editingProject.img
    }
})

addForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let name = addForm.elements['projectName'].value;
    let description = addForm.elements['projectDescription'].value;
    let price = addForm.elements['projectPrice'].value;
    let amount = addForm.elements['projectAmount'].value;
    let img = addForm.elements['projectImg'].value;
    let newProject = {
        name, 
        description,
        price,
        amount,
        img
    };

    projects.addProject(newProject);
    addForm.reset();
    $('#addProject').modal('hide');

    projects.getAllProjects()
    .then(projectsArray => ui.generateProjectCards(projectsArray))
    .catch(error => console.log(error));

})

editForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let name = editForm.elements['projectName'].value;
    let description = editForm.elements['projectDescription'].value;
    let price = editForm.elements['projectPrice'].value;
    let amount = editForm.elements['projectAmount'].value;
    let img = editForm.elements['projectImg'].value;
    let options = {
        name, 
        description,
        price,
        amount,
        img
    };

    projects.editProject(editingProject.id, options);
    editForm.reset();
    $('#editProject').modal('hide');

    projects.getAllProjects()
    .then(projectsArray => ui.generateProjectCards(projectsArray))
    .catch(error => console.log(error));
})