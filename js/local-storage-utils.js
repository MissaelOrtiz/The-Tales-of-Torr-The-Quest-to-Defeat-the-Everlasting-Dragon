export function getUser(username) {
    const stringyuser = localStorage.getItem(username);
    return JSON.parse(stringyuser);
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(user.username, stringyUser);
}

export function loginUser(username, password) {
    const user = getUser(username);
    if (user) {
        if (user.password === password) {
            localStorage.setItem('CURRENT_USER', username);
            window.location = './village/';
        } else {
            alert('Incorrect username and/or password. Try again.');
        }
    } else {
        alert('This user not not exist. Try again or create a new user.');
    }
}

export function logoutUser() {
    localStorage.removeItem('CURRENT_USER');
    window.location = '../';
}

export function getCurrentUser() {
    const currentUsername = localStorage.getItem('CURRENT_USER');
    const user = getUser(currentUsername);
    return user;
}

export function createUser(username, password) {
    if (localStorage.getItem(username)) {
        alert('This username taken. Please choose another username.');
    } else {
        const newUser = {
            username: username,
            password: password,
            hero: false,
            stats: {
                class: '',
                health: 0,
                maxHealth: 0,
                attack: 0,
                speed: 0,
                ac: 0,
                gold: 0,
                xp: 0 },
            completedquests: {},
            items: {}
        };
        setUser(newUser);
        loginUser(username, password);
    }
}


export function setCurrentEnemy(mnstr) {
    const stringyMonster = JSON.stringify(mnstr);
    localStorage.setItem('CURRENT_ENEMY', stringyMonster);
}

export function getCurrentEnemy() {
    const enemy = getUser('CURRENT_ENEMY');
    return enemy;
}

export function clearCurrentEnemy() {
    localStorage.removeItem('CURRENT_ENEMY');
}

export function resetUser(user) {
    user.hero = false;
    user.stats = {
        class: '',
        health: 0,
        maxHealth: 0,
        attack: 0,
        speed: 0,
        ac: 0,
        gold: 0,
        xp: 0 };
    user.completedquests = {};
    user.items = {};
    setUser(user);
}