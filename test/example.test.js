// IMPORT MODULES under test here:
import { doesAttackHit, dealDamage, grantRewards } from '../js/combat.js';

const test = QUnit.test;

test('This function will take two users with the stats speed and ac and compare the speed plus an arbitrary attack roll of user1 against the ac of user2, returning a hit if it is larger.', (expect) => {
    //Arrange
    const user1 = {
        stats: {
            speed: 1,
            ac: 3,
        }
    };
    const user2 = {
        stats: {
            speed: 1,
            ac: 3,
        }
    };
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = doesAttackHit(user1, user2, 10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('This function will take in an object with the stat health and subtract a certain amount of health determined by the damageRoll param.', (expect) => {
    //Arrange
    let user1 = {
        stats: {
            health: 10,
            speed: 1,
            ac: 3,
        }
    };
    // Set up your arguments and expectations
    const expected = 7;
    
    //Act 
    // Call the function you're testing and set the result to a const
    dealDamage(user1, 3);
    const actual = user1.stats.health;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('This function will take in two objects with the stats gold and xp, taking the stats gold and xp values of user1 and incrementing them by the same values in user2', (expect) => {
    //Arrange
    let user1 = {
        stats: {
            gold: 1,
            xp: 1
        }
    };
    let user2 = {
        stats: {
            gold: 1,
            xp: 1
        }
    };
    // Set up your arguments and expectations
    const expected = [2, 2];
    
    //Act 
    // Call the function you're testing and set the result to a const
    grantRewards(user1, user2);
    const actual = [Number(user1.stats.gold), Number(user1.stats.xp)];

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});