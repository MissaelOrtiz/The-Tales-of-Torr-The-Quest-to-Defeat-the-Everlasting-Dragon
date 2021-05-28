// IMPORTS
import { getCurrentUser, setUser } from '../js/local-storage-utils.js';
import classes from '../data/characters.js';
import { findById } from '../js/utils.js';

// DOMS & CONST
const form = document.querySelector('form');

// EVENTS
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const user = getCurrentUser();
    const heroName = formData.get('hero-name');
    const classChoice = document.querySelector('input:checked');
    const classChoiceValue = classChoice.value;
    const classInfo = findById(classes, classChoiceValue);

    user.hero = `${heroName}`;
    user.stats = classInfo.stats;
    setUser(user);
});
