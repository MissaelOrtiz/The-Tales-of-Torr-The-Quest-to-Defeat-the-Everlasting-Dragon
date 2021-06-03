import { getCurrentUser } from '../../js/local-storage-utils.js';
import { renderHeroStats } from '../../js/render-hero-stats.js';

const villageButton = document.querySelector('.lab-butt-flee');
const abomiButton = document.querySelector('.lab-butt-fight');

const user = getCurrentUser();
const leftPanelDisplay = document.querySelector('.left-panel');
const characterSheet = renderHeroStats(user);
leftPanelDisplay.append(characterSheet);

abomiButton.addEventListener('click', () => {
    window.location = '../../abominations/';
});

villageButton.addEventListener('click', () => {
    window.location = '../../village/';
});