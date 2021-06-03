//import
import { updateCombatLog } from '../../js/combat.js';
import { getCurrentUser } from '../../js/local-storage-utils.js';
import { greaterPotions, potions } from '../../data/items.js';
import { renderPotions } from '../../js/potions-utils.js';

//set DOMS and CONSTs
const mercButtVillage = document.querySelector('.merc-butt-village');
const mercButtTalk = document.querySelector('.merc-butt-talk');
//const mercButtBuy = document.querySelector('.merc-butt-buy');
const botCenter = document.querySelector('.bot-center');
const cartItems = document.querySelector('.cart-items');

const user = getCurrentUser();
function getXp(user) {
    if (user.stats.xp >= 50) {
        return greaterPotions;
    } else {
        return potions;
    }
}

const cart = getXp(user);

// render cart items
for (let item of cart) {
    const li = renderPotions(item);
    cartItems.appendChild(li);
}
//event listeners
mercButtVillage.addEventListener('click', () => {
    window.location = '../';

});

mercButtTalk.addEventListener('click', () => {
    const chatter = updateCombatLog(`hello ${user.hero}.`);
    botCenter.append(chatter);
});

