export function combatAttackRoll() {
    const rndmRoll = Math.ceil(Math.random() * 10);
    return rndmRoll;
}

export function dealDamage(attacker, defender) {
    defender.stats.health = defender.stats.health - attacker.stats.attack;
}