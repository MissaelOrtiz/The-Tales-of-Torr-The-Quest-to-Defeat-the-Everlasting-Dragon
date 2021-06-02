//import
import { updateCombatLog } from '../../js/combat.js';
import { getCurrentUser, setUser } from '../../js/local-storage-utils.js';

//set DOMS and CONSTs
const mercButtVillage = document.querySelector('.merc-butt-village');
const mercButtTalk = document.querySelector('.merc-butt-talk');
//const mercButtBuy = document.querySelector('.merc-butt-buy');
const botCenter = document.querySelector('.bot-center');

const user = getCurrentUser();

//event listeners
mercButtVillage.addEventListener('click', () => {
    window.location = '../';

});

mercButtTalk.addEventListener('click', () => {
    const chatter = updateCombatLog(`hello ${user.hero}.`);
    botCenter.append(chatter);
});

