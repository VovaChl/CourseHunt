const Firebase = (function() {
        
    const firebaseConfig = {
        apiKey: "AIzaSyB6bK1LcAVBrhzIhlJ1h7vUFD4jQLAJtpc",
        authDomain: "voch-d9fc8.firebaseapp.com",
        projectId: "voch-d9fc8",
        storageBucket: "voch-d9fc8.appspot.com",
        messagingSenderId: "996194754331",
        appId: "1:996194754331:web:a08d4bc61b61b64e29bdbe",
        measurementId: "G-S61XGZHV8S"
      };

      firebase.initializeApp(firebaseConfig);
    
      const db = firebase.firestore();

      let instance;

      const getDb = function () {
        return db;
      };

      const createInstance = function () {
        return {
            getDb
        }
      }

      return {
        getInstance: function () {
            return instance || (instance = createInstance());
        }
      }
}());