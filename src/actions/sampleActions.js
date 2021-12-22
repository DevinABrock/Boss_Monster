
import { SHUFFLE_ALL_DECKS, DEAL_HEROES_TO_TOWN, DEAL_INITIAL_CARDS, NEXT_GAME_PHASE, DECREASE_HEALTH, DEAL_ROOM_CARD, BAIT_HEROES, UPDATE_PLAYER_TREASURE, BUILD_DUNGEON } from "./types"

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
export const updatePlayerTreasure = (playerDungeon) => {
    return {
        type: UPDATE_PLAYER_TREASURE,
        data: playerDungeon
    }
}
export const decreaseHealth = () => {
    return {
        type: DECREASE_HEALTH,
    }
}
export const buildDungeon = (cardObj) => {

    return {
        type: BUILD_DUNGEON, 
        card: cardObj
    }
}

