import { findById } from './utils.js';
import monsters from '../data/monsters.js';

export function generateMonster() {
    const rndmNumber = Math.ceil(Math.random() * monsters.length);
    const chosenMonster = findById(monsters, rndmNumber);
    return chosenMonster;
}

export function combatAttackRoll() {
    const rndmRoll = Math.ceil(Math.random() * 10);
    return rndmRoll;
}

export function combatDamageRoll(combatant) {
    const rndmRoll = Math.ceil(Math.random() * combatant.stats.attack);
    return rndmRoll;
}

export function doesAttackHit(attacker, defender, attackRoll) {
    if (attackRoll + attacker.stats.speed >= defender.stats.ac) {
        return true;
    } else {
        return false;
    }
}

export function dealDamage(defender, damageRoll) {
    defender.stats.health = defender.stats.health - damageRoll;
}

export function grantRewards(user, enemy) {
    user.stats.gold = user.stats.gold + enemy.stats.gold;
    user.stats.xp = user.stats.xp + enemy.stats.xp;
}

export function flee(user, enemy) {
    if (user.stats.gold < enemy.stats.gold) {
        return alert('You are too poor to flee! You must fight!');
    } else {
        user.stats.gold = user.stats.gold - enemy.stats.gold;
    }
}
export function updateCombatLog(string) {
    const p = document.createElement('p');
    p.textContent = string;
    return p;
}