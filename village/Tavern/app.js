//import functions

//Grab DOMS and set CONSTs
const tavButtVillage = document.querySelector('.tav-butt-village');
const tavButtTalk = document.querySelector('.tav-butt-talk');
const logOut = document.querySelector('.logoff');
const botCenter = document.querySelector('.bot-center');

//set state

//event listeners
tavButtVillage.addEventListener('click', () => {
    window.location = '../';
});

logOut.addEventListener('click', () => {
    localStorage.removeItem('CURRENT_USER');
    window.location = '../../';
});

tavButtTalk.addEventListener('click', () => {
    const chatter = 'I will write this function later';
    botCenter.textContent = chatter;
});