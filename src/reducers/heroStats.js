
import { SET_HERO_START_OF_DUNGEON, MOVE_HERO_NUMBER_OF_STEPS, DAMAGE_HERO } from "../actions/types"

const initialState = {
    heroRoomPosition: 5,
    heroHealth: 1
}

const heroStats = (state = initialState, action) => {

    switch(action.type){
        case SET_HERO_START_OF_DUNGEON:
            console.log('setting hero to start of dungeon', action.heroesAtStartOfDungeon[0].HP)
            return {
                ...state,
                heroRoomPosition: action.playerDungeon.length-1,
                heroHealth: action.heroesAtStartOfDungeon[0].HP
            }
        case MOVE_HERO_NUMBER_OF_STEPS:
            return {
                ...state,
                heroRoomPosition: state.heroRoomPosition + action.steps,
            }
        case DAMAGE_HERO:
            return {
                ...state,
                heroHealth: state.heroHealth - action.damage,
            }
        default:
            return state
    }
}


export default heroStats