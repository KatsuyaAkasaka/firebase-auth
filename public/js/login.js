import {firebase} from './initialize.js';

function createUI() {
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', {
        callbacks: {
            signInSuccessWithAuthResult: (authResult, redirectUrl) => {
                authResult.user.getIdToken(true)
                    .then(
                        //アカウント作成
                    )
                    .catch((error)  => { console.log(`Firebase getIdToken failed!: ${error.message}`) });
                return true;
            },
            uiShown: () => { document.getElementById('loader').style.display = 'none' }
        },
        signInSuccessUrl: '/success',
        signInFlow: 'popup',
        signInOptions: [
            // List of OAuth providers supported.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID
        ],
    });
}
createUI();
