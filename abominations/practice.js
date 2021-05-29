// import functions
import heads from './heads.js';
import torsos from './torsos.js';
// import leggies from './leggies.js';

// grab DOM elements
const img1 = document.querySelector('#head-img');
const img2 = document.querySelector('#torso-img');
// const img3 = document.querySelector('#leggies-img');
const name1 = document.querySelector('#head-name');
const name2 = document.querySelector('#torso-name');
// const name3 = document.querySelector('#leggies-name');

// initialize state
renderThreeParts();

function grabRandomHead() {
    const headOptions = Math.floor(Math.random() * heads.length);
    const randomHead = heads[headOptions];
    return randomHead;
}

function grabRandomTorso() {
    const torsoOptions = Math.floor(Math.random() * torsos.length);
    const randomTorso = torsos[torsoOptions];
    return randomTorso;
}

// function grabRandomLeggies() {
//     const leggiesOptions = Math.floor(Math.random() * leggies.length);
//     const randomLeggies = leggies[leggiesOptions];
//     return randomLeggies;
// }

function renderThreeParts() {
    let head = grabRandomHead();
    let torso = grabRandomTorso();
    // let leggie = grabRandomLeggies();

    img1.src = `./assets/${head.image}`;
    img2.src = `./assets/${torso.image}`;
    // img3.src = `./assets/${leggie.img}`;

    name1.textContent = `${head.name}`;
    name2.textContent = `${torso.name}`;
    // name3.textContent = `${leggie.name}`;
}