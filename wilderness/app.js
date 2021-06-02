import { generateMonster, combatAttackRoll, combatDamageRoll, doesAttackHit, dealDamage, grantRewards, flee, updateCombatLog } from '../js/combat.js';
import { getCurrentUser, setUser, setCurrentEnemy, getCurrentEnemy, clearCurrentEnemy, resetUser } from '../js/local-storage-utils.js';


//grab DOM elements
const combatLog = document.querySelector('.combat-log');
const combatActionsDiv = document.querySelector('.combat-actions');
const attackButton = document.querySelector('#attack');
const fleeButton = document.querySelector('#flee');
const heroSprite = document.querySelector('.hero-sprite');
const enemySprite = document.querySelector('.enemy-sprite');
const heroPortrait = document.querySelector('.hero-picture');
//set global constants
const randomEnemy = generateMonster();
setCurrentEnemy(randomEnemy);
let enemy = getCurrentEnemy();
let user = getCurrentUser();

//initialize state
heroSprite.src = `../assets/characters/${user.stats.class}-sprite.png`;
heroPortrait.src = `../assets/characters/${user.stats.class}.png`;
enemySprite.src = `../assets/monsters/${enemy.img}.png`;


//combat event listeners
attackButton.addEventListener('click', () => {
    //user attacks first
    attackButton.disabled = true;
    fleeButton.disabled = true;
    //first... does the attack hit? store result in variable
    const attackRoll = combatAttackRoll();
    const attackResult = doesAttackHit(user, enemy, attackRoll);

    //if attack misses, then output missed attack to user... else attack hits, then...
    if (!attackResult) {
        const failedAttack = updateCombatLog(`> ${user.hero} attacks ${enemy.stats.name} but misses.`);
        combatLog.append(failedAttack);
        combatLog.scrollTop = combatLog.scrollHeight;
    } else {
        //how much damage does the attack do?apply damage to enemy and update enemy's stats in local storage
        const damageRoll = combatDamageRoll(user);
        dealDamage(enemy, damageRoll);
        setCurrentEnemy(enemy);
        //output results to user
        const successfulAttack = updateCombatLog(`> ${user.hero} attacks ${enemy.stats.name} for ${damageRoll} damage.`);
        combatLog.append(successfulAttack);
        combatLog.scrollTop = combatLog.scrollHeight;
        //change sprite image to attack
        heroSprite.src = `../assets/characters/${user.stats.class}-sprite-attack.png`;
        heroSprite.classList.add('hero-attack');
        //timeout to switch back to default image + positioning
        setTimeout(() => {
            heroSprite.src = `../assets/characters/${user.stats.class}-sprite.png`;
            heroSprite.classList.remove('hero-attack');
        }, 1000);
    }

    //wait a second
    setTimeout(() => {
    //check enemy health after the attack
    //if enemy has no health, then the user wins this battle... else the enemy attacks
        if (enemy.stats.health <= 0) {
            //user gets swag
            grantRewards(user, enemy);
            //output results
            const victory = updateCombatLog(`> ${user.hero} defeated ${enemy.stats.name}. ${enemy.stats.gold} gold and ${enemy.stats.xp} xp gained.`);
            combatLog.append(victory);
            combatLog.scrollTop = combatLog.scrollHeight;
            //set local storage
            setUser(user);
            clearCurrentEnemy();
            //disable attack and flee buttons, add new buttons to give user options to start another battle or return to the village
            combatActionsDiv.removeChild(attackButton);
            combatActionsDiv.removeChild(fleeButton);
            //button to start a new battle
            const newFightButton = document.createElement('button');
            newFightButton.classList = 'new-fight';
            newFightButton.textContent = 'Look for more monsters';
            //new fight button event listener
            newFightButton.addEventListener('click', () => {
                window.location = './';
            });
            //button to return to the village
            const returnButton = document.createElement('button');
            returnButton.classList = 'return';
            returnButton.textContent = 'Return to the village';
            //reset button event listener
            returnButton.addEventListener('click', () => {
                window.location = '../village/';
            });

            //add buttons to DOM
            combatActionsDiv.append(newFightButton, returnButton);

        } else {
            //first, does the enemy's attack hit? store result in variable
            const enemyRoll = combatAttackRoll();
            const enemyAttackResult = doesAttackHit(enemy, user, enemyRoll);
            //if the attack misses, then output result... else if it hits, then calc damage, update local storage, and output result.
            if (!enemyAttackResult) {
                const failedAttack = updateCombatLog(`> ${enemy.stats.name} attacks ${user.hero} but misses.`);
                combatLog.append(failedAttack);
                combatLog.scrollTop = combatLog.scrollHeight;
                attackButton.disabled = false;
                fleeButton.disabled = false;
            } else {
                const damageRoll = combatDamageRoll(enemy);
                dealDamage(user, damageRoll);
                setUser(user);
                const successfulAttack = updateCombatLog(`> ${enemy.stats.name} attacks ${user.hero} for ${damageRoll} damage.`);
                combatLog.append(successfulAttack);
                combatLog.scrollTop = combatLog.scrollHeight;
            //timeout to display enemy attack
                enemySprite.classList.add('enemy-attack');
                //timeout to switch back to default image + positioning
                setTimeout(() => {
                    enemySprite.classList.remove('enemy-attack');
                    attackButton.disabled = false;
                    fleeButton.disabled = false;
                }, 1000);
            }
        }
        //check to see if user's dead yet
        if (user.stats.health <= 0) {
            combatActionsDiv.removeChild(attackButton);
            combatActionsDiv.removeChild(fleeButton);
            const gameOver = updateCombatLog(`> ${user.hero} has suffered defeat at the hands of ${enemy.stats.name}.`);
            combatLog.append(gameOver);
            combatLog.scrollTop = combatLog.scrollHeight;
            heroSprite.src = `../assets/characters/${user.stats.class}-sprite-defeat.png`;
            //return to login after timeout
            const resetButton = document.createElement('button');
            resetButton.classList = 'reset-game';
            resetButton.textContent = 'New Game?';
            //reset button event listener
            resetButton.addEventListener('click', () => {
                //reset user stats
                resetUser(user);
                clearCurrentEnemy();
                //redirect
                window.location = '../village/';
            });

            combatActionsDiv.append(resetButton);
        }
    }, 1000);
});

//run away!
fleeButton.addEventListener('click', () => {
    flee(user, enemy);
});