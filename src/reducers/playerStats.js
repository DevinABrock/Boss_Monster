
import { DECREASE_HEALTH } from "../actions/types"

const initialState = {
    username: "username",
    health: 5,
    souls: 0,
}

const playerStats = (state = initialState, action) => {

    switch(action.type){
        case DECREASE_HEALTH:
            return {
                ...state,
                health: state.health - 1,
            }
        default:
            return state
    }
}

export default playerStats