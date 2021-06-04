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
    img: 'Bandit'
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
const zombie = {
    id: 5,
    stats: {
        level: 1,
        name: 'Undead Villager',
        health: 10,
        maxHealth: 10,
        attack: 2,
        speed: 0,
        ac: 3,
        gold: 0,
        xp: 5 
    },
    img: 'zombie'
};
const kingslime = {
    id: 6,
    stats: {
        level: 3,
        name: 'Rare King Slime',
        health: 40,
        maxHealth: 40,
        attack: 5,
        speed: -1,
        ac: 4,
        gold: 25,
        xp: 15 
    },
    img: 'kingslime'
};
const manticore = {
    id: 7,
    stats: {
        level: 2,
        name: 'Manticore',
        health: 20,
        maxHealth: 20,
        attack: 7,
        speed: 1,
        ac: 4,
        gold: 15,
        xp: 10 
    },
    img: 'manticore'
};
const orc = {
    id: 8,
    stats: {
        level: 2,
        name: 'Orc',
        health: 12,
        maxHealth: 12,
        attack: 6,
        speed: 0,
        ac: 3,
        gold: 8,
        xp: 8
    },
    img: 'orc'
};
const frog = {
    id: 9,
    stats: {
        level: 2,
        name: 'Giant Frog',
        health: 6,
        maxHealth: 6,
        attack: 3,
        speed: 3,
        ac: 8,
        gold: 10,
        xp: 10
    },
    img: 'frog'
};
const werewolf = {
    id: 10,
    stats: {
        level: 2,
        name: 'Werewolf',
        health: 12,
        maxHealth: 12,
        attack: 4,
        speed: 2,
        ac: 6,
        gold: 10,
        xp: 10
    },
    img: 'werewolf'
};
const vampire = {
    id: 11,
    stats: {
        level: 2,
        name: 'Vampire',
        health: 18,
        maxHealth: 18,
        attack: 3,
        speed: 4,
        ac: 4,
        gold: 12,
        xp: 12
    },
    img: 'vampire'
};
const armor = {
    id: 12,
    stats: {
        level: 2,
        name: 'Living Armor',
        health: 10,
        maxHealth: 10,
        attack: 1,
        speed: 0,
        ac: 10,
        gold: 10,
        xp: 10
    },
    img: 'armor'
};

export default [goblin, wolf, bandit, slime, zombie, kingslime, manticore, orc, frog, werewolf, vampire, armor];