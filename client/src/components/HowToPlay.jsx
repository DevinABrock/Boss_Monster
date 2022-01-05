import React from 'react'
import './css/HowToPlay.css'

function HowToPlay() {
    return (
        <div className='htpContainer'>
            <div className='htpTitle'>Dungeon Master Onboarding</div>
            <img className="dmBackground" src='/homeBannerNoWords.png' alt="" />
            <div className='directionsContainer'>
                <div className='ruleTitle'>Welcome</div>
                <div className='ruleDescription'>For the best playing experience, please play on a 1366 x 768 screen or higher.</div>
                <div className='ruleDescription'>In order to make this game single player, we had to modify some of the rules.</div>
                <div className='ruleDescription'>Some cards have been taken out or have had their effects modified.</div>
                <div className='ruleDescription'>Enjoy!</div>

                <div className='ruleTitle'>Introduction</div>
                <div className='ruleDescription'>So you want to become a dungeon master?</div>
                <div className='ruleDescription'>Well first you'll need to learn how to play the game.</div>

                <div className='ruleTitle'>Rules</div>
                <div className='ruleDescription'>You will be limited to 6 dungeon rooms. These rooms will fend off any pesky heroes searching for loot.</div>
                <div className='ruleDescription'>When all 6 rooms have been built, your boss will level up. You will then be able to use their ability, but only once.</div>
                <div className='ruleDescription'>Your dungeon's rooms start with 100% durability. Each hero that enters that room will lower the durability by 20%. Once it reaches 0, it will be destroyed at the end of the round.</div>
                <div className='ruleDescription'>For every two rooms destroyed in the manner listed above, you will draw one Room Card and will be able to build one additional room in the next build phase.</div>
                <div className='ruleDescription'>Advanced Rooms can only be built on top of another room with that same type. Monster on monster, trap on trap.</div>

                <div className='ruleTitle'>Gameplay</div>
                <div className='ruleDescription'>1. Pre-game phase: You will be randomly given a boss monster and 5 room cards. You will have the chance to then build one room to the left of your boss monster.</div>
                <div className='ruleDescription'>2. Beginning of Turn. On beginning of turn 10 (when epic heroes start entering town), the player draws 5 room cards and can build an additional 2 room (3x when added to normal 1 build per build phase) plus any additional builds.</div>
                <div className='ruleDescription'>3. Spell phase: d20 is rolled. If the result is greater or equal to the number of turns, a spell is cast against the player. Resolve any spell effects before moving on.</div>
                <div className='ruleDescription'>4. Town phase: Heroes enter town. Number of heroes determined by turn number, enter the town. (1-3: 1 hero; 4-6: 2 heroes; 7-9: 3 heroes; 10-12: 2 epic heroes; 13-14: 3 epic heroes).</div>
                <div className='ruleDescription'>5. Build phase: Player draws 1 room card and builds 1 room in an attempt to bait heroes into their dungeon and kill them without taking a wound.</div>
                <div className='ruleDescription'>6. Bait phase: Heroes are baited into the dungeon if it has enough of their treasure type (2x for ordinary heroes and 4x for epic heroes). If no hero is baited, return to phase 2 and repeat.</div>
                <div className='ruleDescription'>7. Adventure phase: Heroes traverse the bosses dungeon and are either killed or wound the boss monster.</div>
                <div className='ruleDescription'>8. End of Turn: See how many souls you can get. Can you survive all the heroes? If the player has 5 or more wounds, he/she loses.</div>
                <div className='ruleDescription'>Repeat phases 2-7 until the hero deck is exhausted or you are wounded 5 times.</div>
            </div>
        </div>
    )
}

export default HowToPlay
