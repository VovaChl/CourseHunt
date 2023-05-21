//Auth init
const auth = new Auth();

// Init elements
const signout = document.querySelector('.sign-out');

 // Init user
 const user = User.getInstance();

// Check Auth
firebase.auth().onAuthStateChanged(function(user) {
    if (!user) window.location = 'login.html';
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