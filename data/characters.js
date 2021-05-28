const Knight = {
    id: 1,
    stats: {
        class: 'Knight',
        health: 12,
        maxHealth: 12,
        attack: 2,
        ac: 8,
        gold: 10,
        xp: 0
    },
    img: 'knight.png'
};
const Barbarian = {
    id: 2,
    stats: {
        class: 'Barbarian',
        health: 8,
        maxHealth: 8,
        attack: 5,
        ac: 6,
        gold: 5,
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
        gold: 15,
        xp: 0
    },
    img: 'mage.png'
};

export const classes = [Knight, Barbarian, Mage];