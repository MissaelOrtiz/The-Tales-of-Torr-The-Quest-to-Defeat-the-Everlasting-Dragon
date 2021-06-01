const goblin = {
    id: 1,
    stats: {
        level: 1,
        name: 'Goblin',
        health: 5,
        maxHealth: 5,
        attack: 3,
        speed: 0,
        ac: 3,
        gold: 3,
        xp: 4
    },
    img: 'goblin'
};
const wolf = {
    id: 2,
    stats: {
        level: 1,
        name: 'Timber Wolf',
        health: 7,
        maxHealth: 7,
        attack: 5,
        speed: 1,
        ac: 5,
        gold: 10,
        xp: 6 
    },
    img: 'wolf'
};
const bandit = {
    id: 3,
    stats: {
        level: 1,
        name: 'Newbie Bandit',
        health: 8,
        maxHealth: 8,
        attack: 3,
        speed: 0,
        ac: 4,
        gold: 5,
        xp: 6
    },
    img: 'bandit'
};
const slime = {
    id: 4,
    stats: {
        level: 1,
        name: 'Common Forest Slime',
        health: 20,
        maxHealth: 20,
        attack: 2,
        speed: -1,
        ac: 1,
        gold: 2,
        xp: 6 
    },
    img: 'slime'
};
const abomination = {
    id: 5,
    stats: {
        level: 2,
        name: 'Oh Gods, What is That',
        health: 15,
        maxHealth: 15,
        attack: 5,
        speed: 2,
        ac: 4,
        gold: 0,
        xp: 10 
    },
};

export default [goblin, wolf, bandit, slime, abomination];