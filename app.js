import { createUser, loginUser } from './js/local-storage-utils.js';

const formLogin = document.getElementById('log-in-form');
const formSignup = document.getElementById('sign-up-form');

formSignup.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formSignup);
    const username = formData.get('username');
    const password = formData.get('password');

    createUser(username, password);
});

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formLogin);
    const username = formData.get('username');
    const password = formData.get('password');

    loginUser(username, password);
});