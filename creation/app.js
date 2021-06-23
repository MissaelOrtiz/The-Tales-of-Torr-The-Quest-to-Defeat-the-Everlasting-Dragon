// IMPORTS
import { getCurrentUser, setUser } from '../js/local-storage-utils.js';
import classes from '../data/characters.js';
import { findById } from '../js/utils.js';

// DOMS & CONST
const form = document.querySelector('form');
const user = getCurrentUser();

// EVENTS
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const heroName = formData.get('hero-name');
    const classChoice = document.querySelector('input:checked');

// safety net
    if (classChoice === null) {
        return alert('You must choose a class to begin your adventure!');
    }

    
    const classChoiceValue = classChoice.value;
    const classInfo = findById(classes, classChoiceValue);

    

    user.hero = heroName;
    user.stats = classInfo.stats;
    setUser(user);
    window.location = '../wilderness/';
});

// CONSTANT LISTENERS
if (!user) {
    window.location = '../';
} else if (user.hero /* seems like this would work the same? */) {
    window.location = '../village/';
}