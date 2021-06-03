const Knight = {
    id: 1,
    stats: {
        class: 'knight',
        level: 1,
        health: 20,
        maxHealth: 20,
        attack: 6,
        speed: 2,
        ac: 8,
        gold: 10,
        xp: 0
    },
};
const Barbarian = {
    id: 2,
    stats: {
        class: 'barbarian',
        level: 1,
        health: 12,
        maxHealth: 12,
        attack: 12,
        speed: 0,
        ac: 6,
        gold: 5,
        xp: 0
    },
};
const Mage = {
    id: 3,
    stats: {
        class: 'mage',
        level: 1,
        health: 6,
        maxHealth: 6,
        attack: 20,
        speed: 1,
        ac: 7,
        gold: 15,
        xp: 0
    },
};

export default [Knight, Barbarian, Mage];