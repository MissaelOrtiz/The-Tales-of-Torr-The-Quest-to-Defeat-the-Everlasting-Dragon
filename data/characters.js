const Knight = {
    id: 1,
    stats: {
        class: 'Knight',
        health: 20,
        maxHealth: 20,
        attack: 6,
        speed: 2,
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
        health: 12,
        maxHealth: 12,
        attack: 12,
        speed: 0,
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
        health: 6,
        maxHealth: 6,
        attack: 20,
        speed: 1,
        ac: 7,
        gold: 15,
        xp: 0
    },
    img: 'mage.png'
};

export default [Knight, Barbarian, Mage];