
import { SELECT_CARD, SHUFFLE_ALL_DECKS } from "./types"

export const shuffleAllDecksAction = (allDecksObj) => {
    return {
        type: SHUFFLE_ALL_DECKS,
        data: allDecksObj
    }
}

export const selectCard = (cardObj) => {
  return {
    type: SELECT_CARD,
    card: cardObj
  }
}

