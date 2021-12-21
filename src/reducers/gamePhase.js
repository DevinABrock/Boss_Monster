
import { NEXT_GAME_PHASE } from "../actions/types"

const initialState = {
    gamePhase: 1,
    gameRound: 1,
}

const gamePhase = (state = initialState, action) => {

    switch(action.type){
        case NEXT_GAME_PHASE:
            return {
                ...state,
                gamePhase: state.gamePhase+1
            }
        default:
            return state
    }
}

export default gamePhase