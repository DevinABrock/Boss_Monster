
import { combineReducers } from "redux"
import cardDecks from "./cardDecks"

// EX: access sampleReducer count by using "state.sampleCR.count"
const rootReducer = combineReducers({
    cardDecks
    // add additional reducer key-value pairs
})

export default rootReducer