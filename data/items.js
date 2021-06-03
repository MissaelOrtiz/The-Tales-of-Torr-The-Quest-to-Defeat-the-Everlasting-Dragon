const PotofHealth = {
    id: 1,
    name: 'Potion of Increased Bodily Vitality',
    description: 'A good ol`fashion POTION OF INCREASED BODILY VITALITY. Won`t really heal you, but might increase your overall health!',
    cost: 10,
    affect: 'maxHealth',
    effect: '4',
    img: 'potion6.png'
};

const PotofSpeed = {
    id: 2,
    name: 'Potion of Enhanced Muscle Responsiveness',
    description: 'A grand mixture of exotic herbs and reagents, including an ichorous discharge of a celestial being. What does it do? It makes you faster. That is it.',
    cost: 10,
    affect: 'speed',
    effect: '1',
    img: 'potion1.png'
};

const PotofXP = {
    id: 3,
    name: 'Potion of Experiential Incrementation and Improvement',
    description: 'Ahh, a timeless classic; a POTION OF EXPERIENTIAL INCREMENTATION AND IMPROVEMENT. Very popular amongst students, but an adventurer like you should not find a hard time putting this brew to use.',
    cost: 20,
    affect: 'xp',
    effect: '10',
    img: 'potion3.png'
};

const PotofStrength = {
    id: 4,
    name: 'Potion of Increased Combat Prowess',
    description: 'This potion should only be quaffed by the strongest of individuals. It will rend your body and reconstruct you magically to be better suited to the trials of combat. You should be ok.',
    cost: 10,
    affect: 'attack',
    effect: '2',
    img: 'potion2.png'
};

export const potions = [PotofHealth, PotofSpeed, PotofXP, PotofStrength];

const GreaterPotofHealth = {
    id: 1,
    name: 'Greater Potion of Increased Bodily Vitality',
    description: 'This marvelous brew is strawberry flavored, one of the mightiest flavors in all the realms. This should increase your vitality and color your mouth red!',
    cost: 10,
    affect: 'maxHealth',
    effect: '4',
    img: 'potion6.png'
};

const GreaterPotofSpeed = {
    id: 2,
    name: 'Greater Potion of Enhanced Muscle Responsiveness',
    description: 'What is different between this potion and its lesser ilk? Well if you must know; this one is bigger and blue raspberry flavored!',
    cost: 20,
    affect: 'speed',
    effect: '2',
    img: 'potion4.png'
};

const GreaterPotofXP = {
    id: 3,
    name: 'Greater Potion of Experiential Incrementation and Improvement',
    description: 'Look at the wonderous shimmer of the reagents! What a wonderful summertime drink to quaff when you require some experiential incrementation AND improvement!',
    cost: 40,
    affect: 'xp',
    effect: '30',
    img: 'potion7.png'
};

const GreaterPotofStrength = {
    id: 4,
    name: 'Greater Potion of Increased Combat Prowess',
    description: 'I swear on oath on my alchemical certification that this brew, when quaffed, will most likely become something much fiercer on the fields of battle. Probably.',
    cost: 20,
    affect: 'attack',
    effect: '4',
    img: 'potion5.png'
};

export const greaterPotions = [GreaterPotofHealth, GreaterPotofSpeed, GreaterPotofXP, GreaterPotofStrength];