
<<<<<<< HEAD:src/actions/sampleActions.js
import { SHUFFLE_ALL_DECKS, DEAL_HEROES_TO_TOWN, DEAL_INITIAL_CARDS, NEXT_GAME_PHASE, DECREASE_PLAYER_HEALTH, DEAL_ROOM_CARD, BAIT_HEROES, UPDATE_PLAYER_TREASURE, BUILD_DUNGEON, NEXT_ROUND, SET_HERO_START_OF_DUNGEON, MOVE_HERO_NUMBER_OF_STEPS, DAMAGE_HERO, HERO_KILLED, PLAYER_KILLED, RESET_PLAYER_CARDS, RESET_GAME, ADD_BUILD_ACTIONS, HERO_SURVIVED, CHANGE_USE_BUTTON_SWAPPING, SWAP_ROOMS, CHANGE_SWAP_ROOMS_MODE, DAMAGE_ROOM, DRAW_FROM_DISCARD, CHANGE_SHOW_DISCARD_PILE } from "./types"
=======
import { SHUFFLE_ALL_DECKS, DEAL_HEROES_TO_TOWN, DEAL_INITIAL_CARDS, NEXT_GAME_PHASE, DECREASE_PLAYER_HEALTH, DEAL_ROOM_CARD, BAIT_HEROES, UPDATE_PLAYER_TREASURE, BUILD_DUNGEON, NEXT_ROUND, SET_HERO_START_OF_DUNGEON, MOVE_HERO_NUMBER_OF_STEPS, DAMAGE_HERO, HERO_KILLED, PLAYER_KILLED, RESET_PLAYER_CARDS, RESET_GAME, ADD_BUILD_ACTIONS, HERO_SURVIVED, CHANGE_USE_BUTTON_SWAPPING, SWAP_ROOMS, CHANGE_SWAP_ROOMS_MODE, DAMAGE_ROOM, ADD_USERNAME, ADD_SOUL } from "./types"
>>>>>>> 4210fe66e50b98e0ecd5905d8b1e12af7a02b97f:client/src/actions/sampleActions.js

// !add multiple actions to this file

export const shuffleAllDecksAction = (allDecksObj) => {
    return {
        type: SHUFFLE_ALL_DECKS,
        data: allDecksObj
    }
}
export const dealHeroesToTown = (heroType, number) => {
    return {
        type: DEAL_HEROES_TO_TOWN,
        data: { heroType, number }
    }
}
export const dealRoomCard = () => {
    return {
        type: DEAL_ROOM_CARD,
    }
}
export const resetPlayerCards = () => {
    return {
        type: RESET_PLAYER_CARDS,
    }
}
export const baitHeroes = (treasureCleric, treasureFighter, treasureThief) => {
    return {
        type: BAIT_HEROES,
        data: {treasureCleric, treasureFighter, treasureThief}
    }
}
export const dealInitialCardsAction = (chosenBoss, chosenRooms) => {
    return {
        type: DEAL_INITIAL_CARDS,
        data: { chosenBoss, chosenRooms }
    }
}
export const nextGamePhase = () => {
    return {
        type: NEXT_GAME_PHASE,
    }
}
export const resetGame = () => {
    return {
        type: RESET_GAME,
    }
}
export const nextRound = (playerDungeon) => {
    return {
        type: NEXT_ROUND,
        playerDungeon
    }
}
export const updatePlayerTreasure = (playerDungeon) => {
    return {
        type: UPDATE_PLAYER_TREASURE,
        data: playerDungeon
    }
}
export const decreasePlayerHealth = (points) => {
    return {
        type: DECREASE_PLAYER_HEALTH,
        points
    }
}
export const buildDungeon = (cardObj, targetID) => {

    return {
        type: BUILD_DUNGEON, 
        card: cardObj,
        targetID: targetID
    }
}
export const setHeroStartOfDungeon = (playerDungeon, heroesAtStartOfDungeon) => {
    return {
        type: SET_HERO_START_OF_DUNGEON, 
        playerDungeon,
        heroesAtStartOfDungeon
    }
}
export const moveHeroNumberOfSteps = (steps) => {
    return {
        type: MOVE_HERO_NUMBER_OF_STEPS,
        steps
    }
}
export const damageHero = (damage) => {
    return {
        type: DAMAGE_HERO,
        damage
    }
}
export const heroKilled = (lastHero, playerDungeon, heroesAtStartOfDungeon) => {
    return {
        type: HERO_KILLED,
        lastHero,
        playerDungeon,
        heroesAtStartOfDungeon
    }
}
export const heroSurvived = (lastHero, playerDungeon, heroesAtStartOfDungeon) => {
    return {
        type: HERO_SURVIVED,
        lastHero,
        playerDungeon,
        heroesAtStartOfDungeon
    }
} 
export const playerKilled = () => {
    return {
        type: PLAYER_KILLED,
    }
}
export const addBuildActions = (numberOfActions) => {
    return {
        type: ADD_BUILD_ACTIONS,
        numberOfActions
    }
}
export const changeUseButtonSwapping = () => {
    return {
        type: CHANGE_USE_BUTTON_SWAPPING
    }
}
export const changeSwapRoomsMode = () => {
    return {
        type: CHANGE_SWAP_ROOMS_MODE
    }
}
export const swapRooms = (selectedCardID, targetedRoomID) => {
    return {
        type: SWAP_ROOMS,
        selectedCardID,
        targetedRoomID
    }
}
export const damageRoom = (roomID) => {
    return {
        type: DAMAGE_ROOM,
        roomID
    }
}
export const changeShowDiscardPile = (roomTypeToDraw) => {
    return {
        type: CHANGE_SHOW_DISCARD_PILE,
        roomTypeToDraw
    }
}
export const drawFromDiscard = (roomID) => {
    return {
        type: DRAW_FROM_DISCARD,
        roomID
    }
}

export const addUsername = (username) => {
    return {
        type: ADD_USERNAME,
        username
    }
}

export const addSoul = () => {
    return {
        type: ADD_SOUL
    }
}

