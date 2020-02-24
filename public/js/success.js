import {firebase} from './initialize.js';

function findUserState() {
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
          var displayName = document.getElementById("displayName");
          displayName.innerHTML = `welcome ${user.displayName}`;
        }
        else {
            location.href='/';
        }
    });
}

findUserState();
