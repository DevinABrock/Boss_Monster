
import { combineReducers } from "redux"
import cardDecks from "./cardDecks"
import gamePhase from "./gamePhase"
import playerStats from "./gamePhase"
import misc from "./misc"

// EX: access sampleReducer count by using "state.sampleCR.count"
const rootReducer = combineReducers({
    cardDecks,
    gamePhase,
    playerStats,
    misc
    // add additional reducer key-value pairs
})

export default rootReducer