const User = (function () {

    let currentUser;
    let instance;

    const getUser = async function() {
        await firebase.auth().onAuthStateChanged(function(user) {
            if (user) currentUser = user;
            else currentUser = false;

            return currentUser;
        });
    };

    const createInstance = function () {
        return {
            getUser
        }
    }

    return {
        getInstance: function () {
            return instance || (instance = createInstance());
        }
    }

})();