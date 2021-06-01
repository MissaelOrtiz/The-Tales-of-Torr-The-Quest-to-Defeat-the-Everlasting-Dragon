import { generateMonster, combatAttackRoll, combatDamageRoll, doesAttackHit, dealDamage, grantRewards, flee, updateCombatLog } from '../js/combat.js';
import { getCurrentUser, setUser, setCurrentEnemy, getCurrentEnemy, clearCurrentEnemy, resetUser } from '../js/local-storage-utils.js';


//grab DOM elements
const combatLog = document.querySelector('.combat-log');
const combatActionsDiv = document.querySelector('.combat-actions');
const attackButton = document.querySelector('#attack');
const fleeButton = document.querySelector('#flee');
const heroSprite = document.querySelector('.hero-sprite');
const enemySprite = document.querySelector('.enemy-sprite');

//set global constants
let user = getCurrentUser();

const randomEnemy = generateMonster();
setCurrentEnemy(randomEnemy);
let enemy = getCurrentEnemy();


//initialize state
heroSprite.src = `../assets/characters/${user.stats.class}-sprite.png`;


//combat event listeners
attackButton.addEventListener('click', () => {
    //does attack hit?
    const attackRoll = combatAttackRoll();
    const attackResult = doesAttackHit(user, enemy, attackRoll);

    //user attack
    if (!attackResult) {
        const failedAttack = updateCombatLog(`${user.hero} attacks ${enemy.stats.name} but misses.`);
        combatLog.append(failedAttack);
        //no hits
    } else {
        const damageRoll = combatDamageRoll(user);
        dealDamage(enemy, damageRoll);
        setCurrentEnemy(enemy);
        const successfulAttack = updateCombatLog(`${user.hero} attacks ${enemy.stats.name} for ${damageRoll} damage.`);
        combatLog.append(successfulAttack);
        heroSprite.src = `../assets/characters/${user.stats.class}-sprite-attack.png`;
        //toggle CSS class on with animation on hero sprite
        heroSprite.classList.add('hero-attack');
        //timeout animation cycle and toggle CSS class off
        setTimeout(() => {
            //switch back to default image
            heroSprite.src = `../assets/characters/${user.stats.class}-sprite.png`;
            heroSprite.classList.remove('hero-attack');
        }, 1000);

    }

    //check enemy health
    if (enemy.stats.health <= 0) {
        grantRewards(user, enemy);
        const victory = updateCombatLog(`${user.hero} defeated ${enemy.stats.name}. ${enemy.stats.gold} gold and ${enemy.stats.xp} xp gained.`);
        combatLog.append(victory);
        setUser(user);
        clearCurrentEnemy();

        //change buttons
        combatActionsDiv.removeChild(attackButton);
        combatActionsDiv.removeChild(fleeButton);

        const newFightButton = document.createElement('button');
        newFightButton.classList = 'new-fight';
        newFightButton.textContent = 'Look for more monsters';
    
        //reset button event listener
        newFightButton.addEventListener('click', () => {
            window.location = './';
        });
        
        const returnButton = document.createElement('button');
        returnButton.classList = 'return';
        returnButton.textContent = 'Return to the village';
    
        //reset button event listener
        returnButton.addEventListener('click', () => {
            window.location = '../village/';
        });
    
        combatActionsDiv.append(newFightButton, returnButton);

    } else {
        const enemyRoll = combatAttackRoll();
        const enemyAttackResult = doesAttackHit(enemy, user, enemyRoll);

        if (!enemyAttackResult) {
            const failedAttack = updateCombatLog(`${enemy.stats.name} attacks ${user.hero} but misses.`);
            combatLog.append(failedAttack); 
        } else {
            const damageRoll = combatDamageRoll(enemy);
            dealDamage(user, damageRoll);
            setUser(user);
            const successfulAttack = updateCombatLog(`${enemy.stats.name} attacks ${user.hero} for ${damageRoll} damage.`);
            combatLog.append(successfulAttack);
        }
    }

    if (user.stats.health <= 0) {
        combatActionsDiv.removeChild(attackButton);
        combatActionsDiv.removeChild(fleeButton);
        const gameOver = updateCombatLog(`${user.hero} has suffered defeat at the hands of ${enemy.stats.name}.`);
        combatLog.append(gameOver);
        heroSprite.src = `../assets/characters/${user.stats.class}-sprite-defeat.png`;
        //reset user stats
        resetUser(user);
        clearCurrentEnemy();
        //return to login after timeout
        const resetButton = document.createElement('button');
        resetButton.classList = 'reset-game';
        resetButton.textContent = 'New Game?';

        //reset button event listener
        resetButton.addEventListener('click', () => {
            window.location = '../village/';
        });

        combatActionsDiv.append(resetButton);
    }

});

fleeButton.addEventListener('click', () => {
    flee(user, enemy);
});