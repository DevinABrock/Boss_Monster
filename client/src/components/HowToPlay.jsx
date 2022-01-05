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
                <div className='ruleDescription'>Well, first you'll need to learn how to play the game.</div>

                <div className='ruleTitle'>Rules</div>
                <div className='ruleDescription'>Your goal is to build up your dungeon in order to lure heroes inside, kill them and gain their soul. Collect as many souls as you can. You will be limited to 6 dungeon rooms.</div>
                <div className='ruleDescription'>If the hero makes it through your dungeon without dying, they will wound you. Ordinary Heroes inflict 1 wound while Epic Heroes inflict 2 wounds. If you receive 5 or more wounds, you are killed and the game is over.</div>
                {/* <div className='ruleDescription'>When all 6 rooms have been built, your boss will level up. You will then be able to use their ability, but only once.</div> */}
                <div className='ruleDescription'>Your dungeon's rooms start with 100% durability. Each hero that enters that room will lower the durability by 20%. Once it reaches 0, it will be destroyed at the end of the turn.</div>
                <div className='ruleDescription'>For every 2 rooms destroyed in the manner listed above, you will be given 1 Room Card and 1 build action you can use in the next build phase.</div>
                <div className='ruleDescription'>Advanced Rooms can only be built on top of other rooms with the same type. Monster on monster, trap on trap.</div>

                <div className='ruleTitle'>Gameplay</div>
                <div className='ruleDescription'>1. Pre-game: You will be randomly given a boss monster and 5 room cards. You will have the chance to then build 1 room to the left of your boss monster.</div>
                <div className='ruleDescription'>2. Beginning of Turn: Starts a new turn. Certain card abilities can only be used once per turn.</div>
                {/* <div className='ruleDescription'>3. Spell phase: d20 is rolled. If the result is greater or equal to the number of turns, a spell is cast against the player. Resolve any spell effects before moving on.</div> */}
                <div className='ruleDescription'>3. Town Phase: Heroes enter the town. The number of heroes is determined by the turn number.
                <br/>
                <br/>&nbsp;&nbsp;Turns 1-3: 1 Ordinary Hero
                <br/>&nbsp;&nbsp;Turns 4-6: 2 Ordinary Heroes 
                <br/>&nbsp;&nbsp;Turns 7-9: 3 Ordinary Heroes
                <br/>&nbsp;&nbsp;Turns 10-12: 2 Epic Heroes
                <br/>&nbsp;&nbsp;Turns 13-14: 3 Epic Heroes
                <br/>
                <br/>NOTE: You will encounter Ordinary Heroes first. They are easier to kill but only give you 1 soul. Near the end of the game, you will start encountering Epic Heroes. They are harder to kill but give 2 souls.</div>
                
                <div className='ruleDescription'>4. Build Phase: You are given 1 room card and 1 build action. Build rooms in an attempt to bait heroes into your dungeon and kill them without taking a wound.</div>
                <div className='ruleDescription'>5. Bait phase: Heroes are baited into the dungeon if there is enough of their treasure type (2 for Ordinary Heroes and 3 for Epic Heroes). Thieves want gold, Fighters want weapons, and Cleric want relics. If no hero is baited, return to phase 2.</div>
                <div className='ruleDescription'>6. Adventure phase: Heroes traverse your dungeon and are either killed or wound you.</div>
                <div className='ruleDescription'>7. End of Turn: If you have 5 or more wounds, you are killed and the game is over. How long can you survive? How many souls can you collect?</div>
                <div className='ruleDescription'>Repeat phases 2-7 until the hero deck is exhausted or you are wounded 5 times.</div>
            </div>
        </div>
    )
}

export default HowToPlay
