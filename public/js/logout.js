import {firebase} from './initialize.js';

function logout() {
    firebase.auth().signOut()
    .then(()=>{
        location.href = '/';
    })
    .catch( (error)=>{
        console.log(`ログアウト時にエラーが発生しました (${error})`);
    });
};

logout();
