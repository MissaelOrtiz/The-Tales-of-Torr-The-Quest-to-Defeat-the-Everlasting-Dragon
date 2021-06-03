//import functions and utilities
import { getCurrentUser, setUser } from '../js/local-storage-utils.js';
import { updateRenderedHeroStats } from './render-hero-stats.js';

const user = getCurrentUser();


//functions
export function renderPotions(item) {
    const li = document.createElement('li');
    li.classList.add('potion');
    li.title = item.name;

    const div1 = document.createElement('div');
    div1.classList.add('item-left-panel');

    const div2 = document.createElement('div');
    div2.classList.add('item-right-panel');

    const h3 = document.createElement('h3');
    h3.textContent = item.name;
    
    const img = document.createElement('img');
    img.src = `../../assets/potions/${item.img}`;
    img.classList.add('for-sale');

    const p1 = document.createElement('p');
    p1.textContent = `${item.cost} gold`;

    const p2 = document.createElement('p');
    p2.textContent = item.description;

    const button = document.createElement('button');
    button.textContent = 'Purchase';
    button.value = item.id;
    button.addEventListener('click', () => {      

        if (user.stats.gold < item.cost) {
            return alert(`You are too poor. Come back when you are not poor.`);

        } else {
            const confirmPurchase = confirm(`Do you want to puchase ${item.name} for ${item.cost}?`);
            if (confirmPurchase) {
                user.stats.gold = user.stats.gold - item.cost;
                user.stats[`${item.affect}`] = user.stats[`${item.affect}`] + item.effect;
                setUser(user);
                updateRenderedHeroStats(user);
            }
        }
    });
    div1.appendChild(h3);
    div1.appendChild(img);
    div1.appendChild(p1);
    div2.appendChild(p2);
    div2.appendChild(button);
    li.appendChild(div1);
    li.appendChild(div2);
    return li;
}
