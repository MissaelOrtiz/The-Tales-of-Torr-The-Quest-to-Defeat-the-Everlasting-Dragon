const heroNameDisplay = document.querySelector('.hero-name');
const heroPortrait = document.querySelector('.hero-picture');
const healthStatDisplay = document.querySelector('.health-stat');
const attackDisplay = document.querySelector('.attack-stat');
const speedDisplay = document.querySelector('.speed-stat');
const acDisplay = document.querySelector('.ac-stat');
const goldDisplay = document.querySelector('.gold-stat');
const xpDisplay = document.querySelector('.xp-stat');

export function renderHeroStats(user) {
    heroNameDisplay.textContent = user.hero;
    heroPortrait.src = `../assets/characters/${user.stats.class}.png`;
    healthStatDisplay.textContent = `${user.stats.health} / ${user.stats.maxHealth}`;
    attackDisplay.textContent = user.stats.attack;
    speedDisplay.textContent = user.stats.speed;
    acDisplay.textContent = user.stats.ac;
    goldDisplay.textContent = user.stats.gold;
    xpDisplay.textContent = user.stats.xp;
}

export function updateRenderedHeroStats(user) {
    healthStatDisplay.textContent = `${user.stats.health} / ${user.stats.maxHealth}`;
    goldDisplay.textContent = user.stats.gold;
    xpDisplay.textContent = user.stats.xp;
}