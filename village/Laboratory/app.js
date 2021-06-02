const villageButton = document.querySelector('.lab-butt-village');
const abomiButton = document.querySelector('.lab-butt-fight');

abomiButton.addEventListener('click', () => {
    window.location = '../../abominations/';
});

villageButton.addEventListener('click', () => {
    window.location = '../../village/';
});