
import { SET_HERO_START_OF_DUNGEON } from "../actions/types"

const initialState = {
    heroRoomPosition: 6,
}

const heroStats = (state = initialState, action) => {

    switch(action.type){
        case SET_HERO_START_OF_DUNGEON:
            console.log('setting hero to start of dungeon', action.playerDungeon.length)
            return {
                ...state,
                heroRoomPosition: action.playerDungeon.length
            }
        default:
            return state
    }
}


export default heroStats