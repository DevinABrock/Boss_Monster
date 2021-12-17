
import { combineReducers } from "redux"
import sampleReducer from "./sampleReducer"

// EX: access sampleReducer count by using "state.sampleCR.count"
const rootReducer = combineReducers({
    sampleCR: sampleReducer
    // add additional reducer key-value pairs
})

export default rootReducer