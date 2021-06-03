export function renderHeroStats(user) {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('character-sheet');
    
    //h2 with user hero name
    const h2 = document.createElement('h2');
    h2.classList.add('hero-name');
    h2.textContent = user.hero;

    //div with hero portrait
    const div1 = document.createElement('div');
    div1.classList.add('portrait');
    const imgBorder = document.createElement('img');
    imgBorder.src = 'https://missaelortiz.github.io/The-Tales-of-Torr-The-Quest-to-Defeat-the-Everlasting-Dragon/assets/border.png';
    imgBorder.classList.add('hero-picture-border');
    const imgPortrait = document.createElement('img');
    imgPortrait.src = `https://missaelortiz.github.io/The-Tales-of-Torr-The-Quest-to-Defeat-the-Everlasting-Dragon/assets/characters/${user.stats.class}.png`;
    imgPortrait.classList.add('hero-picture');
    div1.append(imgBorder, imgPortrait);

    //div with stats
    const div2 = document.createElement('div'); 
    div2.classList.add('stats');

    //hp stat
    const p1 = document.createElement('p');
    const hpImg = document.createElement('img');
    hpImg.classList.add('hp');
    hpImg.src = 'https://missaelortiz.github.io/The-Tales-of-Torr-The-Quest-to-Defeat-the-Everlasting-Dragon/assets/hp-small.png';
    const span1 = document.createElement('span');
    span1.classList.add('health-stat');
    span1.textContent = `${user.stats.health} / ${user.stats.maxHealth}`;
    p1.append(hpImg, span1);

    //attack stat
    const p2 = document.createElement('p');
    const span2 = document.createElement('span');
    span2.classList.add('attack-stat');
    span2.textContent = user.stats.attack;
    p2.textContent = 'ATTACK:';
    p2.append(span2);

    //speed stat
    const p3 = document.createElement('p');
    const span3 = document.createElement('span');
    span3.classList.add('speed-stat');
    span3.textContent = user.stats.speed;
    p3.textContent = 'SPEED:';
    p3.append(span3);

    //ac stat
    const p4 = document.createElement('p');
    const span4 = document.createElement('span');
    span4.classList.add('ac-stat');
    span4.textContent = user.stats.ac;
    p4.textContent = 'AC:';
    p4.append(span4);
    
    const imgBar = document.createElement('img');
    imgBar.classList.add('bar');
    imgBar.src = 'https://missaelortiz.github.io/The-Tales-of-Torr-The-Quest-to-Defeat-the-Everlasting-Dragon/assets/bar-short.png';

    //gold stat
    const p5 = document.createElement('p');
    const span5 = document.createElement('span');
    span5.classList.add('gold-stat');
    span5.textContent = user.stats.gold;
    p5.textContent = 'GOLD:';
    p5.append(span5);

    //xp stat
    const p6 = document.createElement('p');
    const span6 = document.createElement('span');
    span6.classList.add('xp-stat');
    span6.textContent = user.stats.xp;
    p6.textContent = 'XP:';
    p6.append(span6);

    div2.append(p1, p2, p3, p4, imgBar, p5, p6);
    mainDiv.append(h2, div1, div2);
    return mainDiv;
}

export function updateRenderedHeroStats(user) {
    const healthStatDisplay = document.querySelector('.health-stat');
    const speedDisplay = document.querySelector('.speed-stat');
    const acDisplay = document.querySelector('.ac-stat');
    const goldDisplay = document.querySelector('.gold-stat');
    const xpDisplay = document.querySelector('.xp-stat');

    healthStatDisplay.textContent = `${user.stats.health} / ${user.stats.maxHealth}`;
    speedDisplay.textContent = user.stats.speed;
    acDisplay.textContent = user.stats.ac;
    goldDisplay.textContent = user.stats.gold;
    xpDisplay.textContent = user.stats.xp;

}