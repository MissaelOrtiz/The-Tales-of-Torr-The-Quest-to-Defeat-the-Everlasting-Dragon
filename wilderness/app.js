import { generateMonster, combatAttackRoll, combatDamageRoll, doesAttackHit, dealDamage, grantRewards, flee } from '../js/combat.js';
import { getCurrentUser, setUser, setCurrentEnemy, getCurrentEnemy, clearCurrentEnemy, resetUser } from '../js/local-storage-utils.js';
import { updateLog } from '../js/log.js';
import { renderHeroStats, updateRenderedHeroStats } from '../js/render-hero-stats.js';

//grab DOM elements
const combatLog = document.querySelector('.bot-center');
const combatActionsDiv = document.querySelector('.mid-center');
const attackButton = document.querySelector('#attack');
const fleeButton = document.querySelector('#flee');
const heroSprite = document.querySelector('.hero-sprite');
const enemySprite = document.querySelector('.enemy-sprite');
const leftPanelDisplay = document.querySelector('.left-panel');

//set global constants
const randomEnemy = generateMonster();
setCurrentEnemy(randomEnemy);
let enemy = getCurrentEnemy();
let user = getCurrentUser();

const characterSheet = renderHeroStats(user);
leftPanelDisplay.append(characterSheet);

//initialize state
heroSprite.src = `../assets/characters/${user.stats.class}-sprite.png`;
enemySprite.src = `../assets/monsters/${enemy.img}.png`;
enemySprite.classList.add(`${enemy.img}`);
updateLog(combatLog, `You have found a level ${enemy.stats.level} ${enemy.stats.name} to battle!`);

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
        updateLog(combatLog, `${user.hero} attacks ${enemy.stats.name} but misses.`);
    } else {
        //how much damage does the attack do?apply damage to enemy and update enemy's stats in local storage
        const damageRoll = combatDamageRoll(user);
        dealDamage(enemy, damageRoll);
        setCurrentEnemy(enemy);
        //output results to user
        updateLog(combatLog, `${user.hero} attacks ${enemy.stats.name} for ${damageRoll} damage.`);
        updateRenderedHeroStats(user);
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
            updateLog(combatLog, `${user.hero} defeated ${enemy.stats.name}. ${enemy.stats.gold} gold and ${enemy.stats.xp} xp gained.`);
            updateRenderedHeroStats(user);
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
                updateLog(combatLog, `${enemy.stats.name} attacks ${user.hero} but misses.`);
                attackButton.disabled = false;
                fleeButton.disabled = false;
            } else {
                const damageRoll = combatDamageRoll(enemy);
                dealDamage(user, damageRoll);
                setUser(user);
                updateLog(combatLog, `${enemy.stats.name} attacks ${user.hero} for ${damageRoll} damage.`);
                updateRenderedHeroStats(user);
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
            updateLog(combatLog, `${user.hero} has suffered defeat at the hands of ${enemy.stats.name}.`);
            updateRenderedHeroStats(user);
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