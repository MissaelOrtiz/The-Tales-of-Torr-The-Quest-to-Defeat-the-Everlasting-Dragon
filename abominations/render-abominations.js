// import functions
import tops from './tops.js';
import leggies from './leggies.js';
import { setCurrentEnemy } from '../js/local-storage-utils.js';
import { findById } from '../js/utils.js';
import { firstNames, lastNames } from './names.js';
// grab DOM elements
const img1 = document.querySelector('#top-img');
const img2 = document.querySelector('#leggie-img');
// const firstName = document.querySelector('#first-name');
const name = document.querySelector('#abominame');

function grabRandom(items) {
    const options = Math.floor(Math.random() * items.length);
    return items[options];
}

function grabRandomTop() {
    return grabRandom(tops);
}

function grabRandomLeggie() {
    return grabRandom(leggies);
}

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function generateName() {
    const name1 = capFirst(firstNames[getRandomInt(0, firstNames.length - 1)]);
    const name2 = capFirst(lastNames[getRandomInt(0, lastNames.length - 1)]);

    return `${name1} ${name2}`;
}

// nice function composition here!
export function renderAbomination() {
    let top = grabRandomTop();
    let leggie = grabRandomLeggie();
    let firstName = generateName();
    let species = (top.stats.name + leggie.name);
    const abomination = findById(tops, top.id);
    abomination.name = firstName;
    abomination.type = species;
    setCurrentEnemy(abomination);
  
    img1.src = `./assets/${top.image}`;
    img2.src = `./assets/${leggie.image}`;

    // firstName.textContent = `${randomName.name} the`;
    name.textContent = `An abomination approaches! ${firstName}, the ${species}, is ready to fight!`;
}