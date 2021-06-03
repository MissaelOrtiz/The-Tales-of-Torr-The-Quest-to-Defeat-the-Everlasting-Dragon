//import
import { updateCombatLog } from '../../js/combat.js';
import { getCurrentUser, setUser } from '../../js/local-storage-utils.js';
import { renderHeroStats, updateRenderedHeroStats } from '../../js/render-hero-stats.js';

//set DOMS and CONSTs
const churchButtVillage = document.querySelector('.church-butt-village');
const churchButtTalk = document.querySelector('.church-butt-talk');
const churchButtHeal = document.querySelector('.church-butt-heal');
const botCenter = document.querySelector('.bot-center');

const user = getCurrentUser();

const leftPanelDisplay = document.querySelector('.left-panel');
const characterSheet = renderHeroStats(user);
leftPanelDisplay.append(characterSheet);


//event listeners
churchButtVillage.addEventListener('click', () => {
    window.location = '../';
});

churchButtTalk.addEventListener('click', () => {
    const chatter = updateCombatLog(`hello ${user.hero}.`);
    botCenter.append(chatter);
});

churchButtHeal.addEventListener('click', () => {
    if (user.stats.gold >= 10) {
        user.stats.gold = user.stats.gold - 10;
        user.stats.health = user.stats.maxHealth;
        const healMessage = updateCombatLog('Your wounds are magically healed! Your health has been fully restored!');
        botCenter.append(healMessage);
        setUser(user);
        updateRenderedHeroStats(user);
    } else {
        const denyMessage = updateCombatLog('You are poor. Come back when you are not poor.');
        botCenter.append(denyMessage);
    }

});