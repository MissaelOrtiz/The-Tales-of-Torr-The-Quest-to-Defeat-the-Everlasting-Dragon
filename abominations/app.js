import { combatAttackRoll, combatDamageRoll, doesAttackHit, dealDamage, grantRewards, flee, } from '../js/combat.js';
import { getCurrentUser, setUser, setCurrentEnemy, getCurrentEnemy, clearCurrentEnemy, resetUser } from '../js/local-storage-utils.js';
import { renderAbomination } from './render-abominations.js';
import { updateLog } from '../js/log.js';
import { renderHeroStats, updateRenderedHeroStats } from '../js/render-hero-stats.js';

renderAbomination();
//grab DOM elements
const combatLog = document.querySelector('.combat-log');
const combatActionsDiv = document.querySelector('.combat-actions');
const attackButton = document.querySelector('#attack');
const fleeButton = document.querySelector('#flee');
const heroSprite = document.querySelector('.hero-sprite');
const frankGif = document.querySelector('.frank-gif');
const frankSays = document.querySelector('.frank-response');

//set global constants
let enemy = getCurrentEnemy();
let user = getCurrentUser();

frankGif.src = `./assets/frank-drink.gif`;
frankSays.textContent = `"Go on, darling, let's see what you've got!"`;

const leftPanelDisplay = document.querySelector('.left-panel');
const characterSheet = renderHeroStats(user);
leftPanelDisplay.append(characterSheet);


//initialize state
heroSprite.src = `../assets/characters/${user.stats.class}-sprite.png`;

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
        updateLog(combatLog, `> ${user.hero} attacks ${enemy.stats.name} but misses.`);
        frankGif.src = `./assets/frank-easy.gif`;
        frankSays.textContent = `"Poor dear, you missed! Is that the best you can do?"`;
    } else {
        //how much damage does the attack do?apply damage to enemy and update enemy's stats in local storage
        const damageRoll = combatDamageRoll(user);
        dealDamage(enemy, damageRoll);
        setCurrentEnemy(enemy);
        //output results to user
        updateLog(combatLog, `> ${user.hero} attacks ${enemy.stats.name} for ${damageRoll} damage.`);
        updateRenderedHeroStats(user);
        //change sprite image to attack
        heroSprite.src = `../assets/characters/${user.stats.class}-sprite-attack.png`;
        heroSprite.classList.add('hero-attack');
        frankGif.src = `./assets/frank-howbout.gif`;
        frankSays.textContent = `"Not bad, gorgeous. Keep it up and I can make a hero out of you..."`;
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
            updateLog(combatLog, `> ${user.hero} defeated ${enemy.stats.name}. ${enemy.stats.gold} gold and ${enemy.stats.xp} xp gained.`);
            frankGif.src = `./assets/frank-hand.gif`;
            frankSays.textContent = `"Well fought, my babies! If you want to really make me swoon, I've got another delicious abomination cooked up for you to dance with... Howabout it?"`;
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
            newFightButton.textContent = 'Fight another abomination!';
            //new fight button event listener
            newFightButton.addEventListener('click', () => {
                window.location = './';
            });
            //button to return to the village
            const returnButton = document.createElement('button');
            returnButton.classList = 'return';
            returnButton.textContent = "That's enough, time to return to the village";
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
                updateLog(combatLog, `> ${enemy.stats.name} attacks ${user.hero} but misses.`);
                attackButton.disabled = false;
                fleeButton.disabled = false;
            } else {
                const damageRoll = combatDamageRoll(enemy);
                dealDamage(user, damageRoll);
                setUser(user);
                updateLog(combatLog, `> ${enemy.stats.name} attacks ${user.hero} for ${damageRoll} damage.`);
                updateRenderedHeroStats(user);
                setTimeout(() => {
                    attackButton.disabled = false;
                    fleeButton.disabled = false;
                }, 1000);
            }
        }
        //check to see if user's dead yet
        if (user.stats.health <= 0) {
            combatActionsDiv.removeChild(attackButton);
            combatActionsDiv.removeChild(fleeButton);
            updateLog(combatLog, `> ${user.hero} has suffered defeat at the hands of ${enemy.stats.name}.`);
            updateRenderedHeroStats(user);
            heroSprite.src = `../assets/characters/${user.stats.class}-sprite-defeat.png`;
            frankGif.src = `./assets/frank-upset.gif`;
            frankSays.textContent = `"Oh dear, now I have another body to clean up. What a shame, this one could have been such a gallant hero to keep in my trophy case!"`;
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