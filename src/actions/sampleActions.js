
import { SHUFFLE_ALL_DECKS, DEAL_HEROES_TO_TOWN, DEAL_INITIAL_CARDS, NEXT_GAME_PHASE, SELECT_CARD, DECREASE_HEALTH, BUILD_DUNGEON, DEAL_ROOM_CARD } from "./types"

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
export const decreaseHealth = () => {
    return {
        type: DECREASE_HEALTH,
    }
}
export const selectCard = (cardObj, className) => {
    return {
        type: SELECT_CARD,
        card: cardObj,
        className: className
    }
}
export const buildDungeon = (cardObj) => {

    console.log("cardObj", cardObj)
    return {
        type: BUILD_DUNGEON, 
        card: cardObj
    }
}

