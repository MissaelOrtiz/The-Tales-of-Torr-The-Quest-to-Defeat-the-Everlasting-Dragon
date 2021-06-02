// Imports
import { getCurrentUser } from '../js/local-storage-utils.js';


// Consts
const tavernButton = document.querySelector('.tavern');
const churchButton = document.querySelector('.church');
const labButton = document.querySelector('.laboratory');
const merchantButton = document.querySelector('.merchant');
const wildButton = document.querySelector('.wild');

const user = getCurrentUser();

// Fun Zone
tavernButton.addEventListener('click', () => {
    window.location = './Tavern/';
});

churchButton.addEventListener('click', () => {
    window.location = './Church/';
});

labButton.addEventListener('click', () => {
    window.location = './Laboratory/';
});

merchantButton.addEventListener('click', () => {
    window.location = './Merchant/';
});

wildButton.addEventListener('click', () => {
    window.location = '../wilderness/';
});
// QUESTLISTENER
if (!user.hero) {
    window.location = '../creation/';
}