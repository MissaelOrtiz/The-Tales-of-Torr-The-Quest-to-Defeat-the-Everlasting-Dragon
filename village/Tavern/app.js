//import functions
import { getCurrentUser } from '../../js/local-storage-utils.js';
import { renderHeroStats } from '../../js/render-hero-stats.js';
import { updateLog } from '../../js/log.js';
import { tavernChatter } from '../../data/events.js';


//Grab DOMS and set CONSTs
const tavButtVillage = document.querySelector('.tav-butt-village');
const tavButtTalk = document.querySelector('.tav-butt-talk');
const logOut = document.querySelector('.logoff');
const botCenter = document.querySelector('.bot-center');

//set state
const user = getCurrentUser();
const leftPanelDisplay = document.querySelector('.left-panel');
const characterSheet = renderHeroStats(user);
leftPanelDisplay.append(characterSheet);


//event listeners
tavButtVillage.addEventListener('click', () => {
    window.location = '../';
});

logOut.addEventListener('click', () => {
    localStorage.removeItem('CURRENT_USER');
    
    window.location = '../../';
});

tavButtTalk.addEventListener('click', () => {
    const randomChatter = Math.floor(Math.random() * tavernChatter.length);
    const chatter = tavernChatter[randomChatter];
    updateLog(botCenter, chatter);
});