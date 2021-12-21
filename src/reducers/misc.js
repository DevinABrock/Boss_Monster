


import { SELECT_CARD } from "../actions/types"

const initialState = {
    card: {}
}

const misc = (state = initialState, action) => {

    switch(action.type){
        case SELECT_CARD:

        console.log("in misc.js", action.card)
            return {
              ...state,
              card: action.card
            }
        default:
            return state
    }
}

export default misc