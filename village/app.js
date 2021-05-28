// Imports
import { getCurrentUser } from '../js/local-storage-utils.js';


// Consts
const user = getCurrentUser();

// DOM elems

// Fun Zone

// QUESTLISTENER
if (!user.hero) {
    window.location = '../creation/';
}
