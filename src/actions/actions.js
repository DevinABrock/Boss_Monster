
import { CURRENT_SELECTION, SHUFFLE_ALL_DECKS } from "./types"

export const shuffleAllDecksAction = (allDecksObj) => {
    return {
        type: SHUFFLE_ALL_DECKS,
        data: allDecksObj
    }
}

export const currentSelection = (cardObj) => {
  return {
    type: CURRENT_SELECTION,
    card: cardObj
  }
}

