//import
import { getCurrentUser, setUser } from '../../js/local-storage-utils.js';
import { renderHeroStats, updateRenderedHeroStats } from '../../js/render-hero-stats.js';
import { updateLog } from '../../js/log.js';
import { churchChatter } from '../../data/events.js';

//set DOMS and CONSTs
const churchButtVillage = document.querySelector('.church-butt-village');
const churchButtTalk = document.querySelector('.church-butt-talk');
const churchButtHeal = document.querySelector('.church-butt-heal');
const churchButtLevel = document.querySelector('.church-butt-level');
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
    const randomChatter = Math.floor(Math.random() * churchChatter.length);
    const chatter = churchChatter[randomChatter];
    updateLog(botCenter, chatter);
});

churchButtHeal.addEventListener('click', () => {
    if (user.stats.xp >= 5) {
        user.stats.xp = user.stats.xp - 5;
        user.stats.health = user.stats.maxHealth;
        updateLog(botCenter, 'Your wounds are magically healed! Your health has been fully restored!');
        setUser(user);
        updateRenderedHeroStats(user);
    } else {
        updateLog(botCenter, 'You lack experience. Come back when you have earned the Light of Torr');
    }

});

churchButtLevel.addEventListener('click', () => {
    if (user.stats.xp >= 35) {
        user.stats.xp = user.stats.xp - 35;
        user.stats.level++;
        user.stats.speed++;
        user.stats.ac++;
        updateLog(botCenter, 'You feel yourself grow stronger as an adventurer!!');
        setUser(user);
        updateRenderedHeroStats(user);
    } else {
        updateLog(botCenter, 'You lack the experience to ascend. Come back when you have earned the Light of Torr');
    }
});