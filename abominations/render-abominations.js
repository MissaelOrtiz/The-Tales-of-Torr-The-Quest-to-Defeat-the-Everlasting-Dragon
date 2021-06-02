// import functions
import tops from './tops.js';
import leggies from './leggies.js';
import { setCurrentEnemy } from '../js/local-storage-utils.js';
import { findById } from '../js/utils.js';

// grab DOM elements
const img1 = document.querySelector('#top-img');
const img2 = document.querySelector('#leggie-img');
// const firstName = document.querySelector('#first-name');
const name = document.querySelector('#abominame');

function grabRandomTop() {
    const topOptions = Math.floor(Math.random() * tops.length);
    const randomtop = tops[topOptions];
    return randomtop;
}

function grabRandomLeggie() {
    const leggieOptions = Math.floor(Math.random() * leggies.length);
    const randomLeggie = leggies[leggieOptions];
    return randomLeggie;
}

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function generateName() {
    var name1 = ['Borticle', 'Pickleman', 'Bungholemius', 'Boofenacious', 'Barfimillius', 'Bonkjelly', 'Bacterial', 'Bowserlicious', 'Brandynugget', 'Berillium', 'Bendandsnap', 'Breadbunter', 'Benedict', 'Blathers', 'Basketball', 'Brundlefly', 'Blashpemous', 'Bronelius', 'Quackmuncher', 'Bucketwrench', 'Brøtherhamper', 'Bansheesweat', 'Battlestar', 'Borkenator', 'Bromeister', 'Boomtastic', 'Bignacious D.'];
    var name2 = ['Crotchetygoop', 'Quack III Esq', 'Crucialpants', 'Crumbtananatch', 'Cucumbermelon', 'Corderoy', 'Clementine', 'Crackity-Jones', 'Codswallop', 'Crustaceous', 'Capitalism', 'Craftfloop', 'California', 'Cloptastic', 'Cumberbatch', 'Choochootrain', 'Clowntickler', 'Cahootsman', 'Crabapple', 'Chinchillasplash', 'Chestershire', 'Cerulean', 'Chippendale', 'Clappenator 3000', 'Camembert'];
    var name = capFirst(name1[getRandomInt(0, name1.length - 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length - 1)]);
    return name;
}

export function renderAbomination() {
    let top = grabRandomTop();
    let leggie = grabRandomLeggie();
    let firstName = generateName();
    let species = (top.name + leggie.name);
    const abomination = findById(tops, top.id);
    abomination.name = firstName;
    abomination.type = species;
    setCurrentEnemy(abomination);

    img1.src = `./assets/${top.image}`;
    img2.src = `./assets/${leggie.image}`;

    // firstName.textContent = `${randomName.name} the`;
    name.textContent = `An abomination approaches! ${firstName}, the ${species}, is ready to fight!`;
}