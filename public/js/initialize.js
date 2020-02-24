const initializeApp = () => {
    if (!firebase.apps.length) {
        const firebaseConfig = {
            apiKey: process.env.API_KEY,
            authDomain: "authentication-test-436b3.firebaseapp.com",
            databaseURL: "https://authentication-test-436b3.firebaseio.com",
            projectId: "authentication-test-436b3",
            storageBucket: "authentication-test-436b3.appspot.com",
            messagingSenderId: "197363054738",
            appId: "1:197363054738:web:0ecd3eb9c46d76f7e38e4b"
        };
        firebase.initializeApp(firebaseConfig);
    }
    return firebase;
};

exports.firebase = initializeApp();
