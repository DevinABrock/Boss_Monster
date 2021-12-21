
import { combineReducers } from "redux"
import cardDecks from "./cardDecks"
import gamePhase from "./gamePhase"
import playerStats from "./gamePhase"

// EX: access sampleReducer count by using "state.sampleCR.count"
const rootReducer = combineReducers({
    cardDecks,
    gamePhase,
    playerStats
    // add additional reducer key-value pairs
})

export default rootReducer