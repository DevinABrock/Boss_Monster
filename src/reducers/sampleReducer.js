
import { INCREMENT } from "../actions/types"

const initalState = {
    count: 0
}

const sampleReducer = (state=initalState, action) => {

    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count + action.data
            }
        default:
            return state
    }
}

export default sampleReducer