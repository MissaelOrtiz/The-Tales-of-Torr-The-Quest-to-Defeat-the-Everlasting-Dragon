export function combatAttackRoll() {
    const rndmRoll = Math.ceil(Math.random() * 10);
    return rndmRoll;
}

export function doesAttackHit(attacker, defender, attackRoll) {
    if (attackRoll + attacker.stats.attack >= defender.stats.ac) {
        return true;
    } else {
        return false;
    }
}

export function dealDamage(attacker, defender) {
    defender.stats.health = defender.stats.health - attacker.stats.attack;
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

