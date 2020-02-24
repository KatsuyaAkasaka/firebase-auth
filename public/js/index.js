import {firebase} from './initialize.js';

class Button {
    constructor(id) {
        this.id = id;
    }
    get myId() {
        return this.id;
    }
    /**
     * @param {string} id
     */
    set myId(id) {
        this.id = id;
    }
    get element() {
        return document.getElementById(this.id);
    }
    /**
     * @param {string} style
     */
    set style(style) {
        this.element.style.display = style;
    }
}

/**
 *
 * @param {Button} loginButton
 * @param {Button} logoutButton
 */
function loginObserver(loginButton, logoutButton) {
    firebase.auth().onAuthStateChanged((user) =>{
        if(user) {
            document.getElementById("displayName").innerHTML = `${user.displayName}`;
            loginButton.style = "none";
            logoutButton.style = "block";
        } else {
            loginButton.style = "block";
            logoutButton.style = "none";
        }
    });
}

(() => {
    const loginButton = new Button("login");
    const logoutButton = new Button("logout");
    loginButton.style = "none";
    logoutButton.style = "none";
    loginObserver(loginButton, logoutButton);
    return;
})();
