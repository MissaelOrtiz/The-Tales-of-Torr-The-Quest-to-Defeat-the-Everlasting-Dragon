import { getCurrentUser } from '../../js/local-storage-utils.js';
import { renderHeroStats } from '../../js/render-hero-stats.js';

const villageButton = document.querySelector('#flee');
const bossButton = document.querySelector('#attack');

const user = getCurrentUser();
const leftPanelDisplay = document.querySelector('.left-panel');
const characterSheet = renderHeroStats(user);
leftPanelDisplay.append(characterSheet);

bossButton.addEventListener('click', () => {
    window.location = './boss-battle/';
});

villageButton.addEventListener('click', () => {
    window.location = '../';
});