
import { SHUFFLE_ALL_DECKS, DEAL_HEROES_TO_TOWN, DEAL_INITIAL_CARDS, NEXT_GAME_PHASE, SELECT_CARD } from "./types"

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
export const selectCard = (cardObj) => {
    return {
        type: SELECT_CARD,
        card: cardObj
    }
}

