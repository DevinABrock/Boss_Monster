
import { NEXT_GAME_PHASE, NEXT_ROUND, PLAYER_KILLED, RESET_GAME } from "../actions/types"

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
        case NEXT_ROUND:
            // console.log('changing round')
            return {
                ...state,
                gamePhase: 2,
                gameRound: state.gameRound + 1,
            }
        case PLAYER_KILLED:
            return {
                ...state,
                gamePhase: 10,
            }
        case RESET_GAME:
            return {
                ...state,
                gamePhase: 1,
                gameRound: 1,
            }
        default:
            return state
    }
}

export default gamePhase