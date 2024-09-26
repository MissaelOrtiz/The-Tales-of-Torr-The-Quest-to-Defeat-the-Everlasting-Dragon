import { createUser, loginUser } from './js/local-storage-utils.js';

const formLogin = document.getElementById('log-in-form');
const formSignup = document.getElementById('sign-up-form');

function getFormData() {
    const formData = new FormData(formSignup);
    const username = formData.get('username');
    const password = formData.get('password');

    return { username, password };
}

formSignup.addEventListener('submit', (e) => {
    e.preventDefault();

    const { username, password } = getFormData();
    createUser(username, password);
});

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const { username, password } = getFormData();
    loginUser(username, password);
});