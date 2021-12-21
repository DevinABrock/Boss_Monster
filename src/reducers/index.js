
import { combineReducers } from "redux"
import cardDecks from "./cardDecks"
import misc from "./misc"

// EX: access sampleReducer count by using "state.sampleCR.count"
const rootReducer = combineReducers({
    cardDecks,
    misc
    // add additional reducer key-value pairs
})

export default rootReducer