
import { combineReducers } from "redux"
import cardDecks from "./cardDecks"
import gamePhase from "./gamePhase"
import playerStats from "./playerStats"
import misc from "./misc"
import heroStats from "./heroStats"

// EX: access sampleReducer count by using "state.sampleCR.count"
const rootReducer = combineReducers({
    cardDecks,
    gamePhase,
    playerStats,
    misc,
    heroStats
    // add additional reducer key-value pairs
})

export default rootReducer