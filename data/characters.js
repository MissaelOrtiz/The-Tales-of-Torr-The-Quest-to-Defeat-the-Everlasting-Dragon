const Warrior = {
    id: 1,
    stats: {
        class: 'Warrior',
        health: 10,
        maxHealth: 10,
        attack: 5,
        ac: 8,
        gold: 5,
        xp: 0
    },
    img: 'warrior.png'
};
const Bard = {
    id: 2,
    stats: {
        class: 'Bard',
        health: 8,
        maxHealth: 8,
        attack: 3,
        ac: 6,
        gold: 10,
        xp: 0
    },
    img: 'bard.png'
};
const Mage = {
    id: 3,
    stats: {
        class: 'Mage',
        health: 5,
        maxHealth: 5,
        attack: 10,
        ac: 3,
        gold: 8,
        xp: 0
    },
    img: 'mage.png'
};

export const classes = [Warrior, Bard, Mage];