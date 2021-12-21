


import { SELECT_CARD } from "../actions/types"

const initialState = {
    card: {},
    className: ""
}

const misc = (state = initialState, action) => {

    switch(action.type){
        case SELECT_CARD:
            console.log(action)
            return {
                ...state,
                card: action.card,
                className: action.className
            }
        default:
            return state
    }
}

export default misc