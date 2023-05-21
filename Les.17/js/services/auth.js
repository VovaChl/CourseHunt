class Auth {
    async login(email,password) {
        await firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error){
            return Promise.reject(error);
        })

    }

    async signout() {
        return await firebase.auth().signOut().then(function() {
            return true;
        }).catch(function(error) {
            return Promise.reject(error);
        })
    }
}