// Imports
import { getCurrentUser, getUser } from '../js/local-storage-utils.js';


// Consts
const user = getCurrentUser();
console.log(user);

// DOM elems

// Fun Zone

// QUESTLISTENER
if (!user.hero) {
    window.location = '../creation/';
}
