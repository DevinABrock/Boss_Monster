
import { SHUFFLE_ALL_DECKS, DEAL_HEROES_TO_TOWN, DEAL_INITIAL_CARDS, NEXT_GAME_PHASE, DECREASE_PLAYER_HEALTH, DEAL_ROOM_CARD, BAIT_HEROES, UPDATE_PLAYER_TREASURE, BUILD_DUNGEON, NEXT_ROUND, SET_HERO_START_OF_DUNGEON, MOVE_HERO_NUMBER_OF_STEPS, DAMAGE_HERO, HERO_KILLED, PLAYER_KILLED, RESET_PLAYER_CARDS, RESET_GAME } from "./types"

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
export const nextRound = () => {
    return {
        type: NEXT_ROUND,
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
export const heroKilled = () => {
    return {
        type: HERO_KILLED,
    }
}
export const playerKilled = () => {
    return {
        type: PLAYER_KILLED,
    }
}

