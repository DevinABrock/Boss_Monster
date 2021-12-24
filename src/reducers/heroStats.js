
import { SET_HERO_START_OF_DUNGEON, MOVE_HERO_NUMBER_OF_STEPS, DAMAGE_HERO, HERO_KILLED } from "../actions/types"
import { dungeonBack } from "../assets/cards"

const initialState = {
    heroRoomPosition: 5,
    heroHealth: 1
}

const heroStats = (state = initialState, action) => {

    switch(action.type){
        case SET_HERO_START_OF_DUNGEON:
            console.log('setting hero to start of dungeon', action.playerDungeon)
            let roomsInPlayerDungeon = [];
            for (let index = 0; index < action.playerDungeon.length; index++) {
                console.log(action.playerDungeon[index])
                if(action.playerDungeon[index][0]===dungeonBack){
                    console.log('empty card')
                }
                else{
                    roomsInPlayerDungeon.push([action.playerDungeon[index]])
                }
            }
            console.log("rooms in player dungeon", roomsInPlayerDungeon)
            return {
                ...state,
                heroRoomPosition: roomsInPlayerDungeon.length-1,
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
        case HERO_KILLED:
            return {
                ...state,
                heroRoomPosition: 5
            }
        default:
            return state
    }
}


export default heroStats