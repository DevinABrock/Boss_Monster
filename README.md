# Boss_Monster
## Build your dungeon, kill heroes, and steal their souls.

![Alt text](/client/public/homeScreen.jpg)
 <br/>

## Overview
Boss Monster is based off of the card game Boss Monster by Brotherwise Games. We had to modifiy the rules in order to create a single player version of the game.

Give it a try: https://bossmonster.netlify.app/dungeon-masters

### Gameplay
This version of Boss Monster plays similar to the original, but with new features.
- Dungeon rooms have durability and will be destroyed after 4 uses.
- Spell cards are used against you by chance of dice roll.
- Some cards have been removed and others duplicated in order to make the game single player.

![Alt text](/client/public/gameScreen.png)
 <br/>


### How To Play
The how to play page gives a full overview of the game.

![Alt text](/client/public/htpScreen.jpg)
 <br/>

### Dungeon Masters
Boss Monster uses a backend that stores users' names and scores. They are then ranked in our Dungeon Masters League.

![Alt text](/client/public/dmScreen.png)
 <br/>

## Work Summary

### Logic
Gameplay logic was written in JavaScript including the logic of 18 unique room cards. There are several different phases of the game, each phase with its own individual logic/rules. The room cards were particularly challenging due to certain cards having conflicting or additive effects. Some such effects include manipulation of room placement (Centipede Tunnel), buffing other room's damage (Goblin Armory), or the ability to destroy a room to gain special effects (The Crushinator, Dark Altar, Bottomless Pit, etc.). Being that Boss Monster is not a single player game, we had to change or add some rules in order for the game to be more balanced. One such rule was the addition of room durability, preventing the player from building the "perfect dungeon" and winning without a challenge. Overall, because this is a game, the logic is quite a bit more reactive than a typical webpage.

### Design
This application was designed to look more like a game than a website. This was achievable with CSS positioning, Flexbox and image editing softwares such as Photoshop and MS Paint. 

### Languages & Frameworks
Boss Monster was built with React.js, JSX, HTML, JavaScript, node.js, CSS, Sequelize, Flexbox, and Bootstrap.

### Site Deployment
The frontend client is hosted on Netlify and the backend server is hosted on Heroku using ElephantSQL as the database.

## Basic Objectives:
- Create an online single player version of the card game "Boss Monster".
- Add and modify rules to balance game.
- Allow user create a username and save their score.
- Implement room card logic.

## Stretch Goals Future
- Store displayed messages in a global state array and allow the user to view previous messages.
- Implement Boss Monster Level-Up effects
- Implement spell effects where a spell can randomly hit the player every round with the chance increasing as the game progresses.
- Have sound effects and music.

## Challenges & Solutions
Challenges
- Gameplay logic for different game phases. 
- Getting all of the different pages on the site to be responsive.
- Room card logic that was conflicted or additive.

Solutions
- Organization of game assets and constant communication.
- Limiting the responsiveness to iPad or larger screen due to time constraints.
- Working with the team to build the room card logic consistently.



