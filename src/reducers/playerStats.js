
import { DECREASE_PLAYER_HEALTH, UPDATE_PLAYER_TREASURE, RESET_GAME, HERO_KILLED, ADD_BUILD_ACTIONS } from "../actions/types"

const initialState = {
    username: "username",
    health: 5,
    souls: 0,
    treasureCleric: 0,
    treasureFighter: 0,
    treasureThief: 0,
    buildActions: 0 
}

const playerStats = (state = initialState, action) => {

    switch(action.type){
        case DECREASE_PLAYER_HEALTH:
            return {
                ...state,
                health: state.health - action.points,
            }
        case RESET_GAME:
            return {
                ...state,
                health: 5,
                souls: 0,
            }
        case HERO_KILLED:
            return {
                ...state,
                souls: state.souls + 1,
            }
        case UPDATE_PLAYER_TREASURE:
            let thiefTreasure = 0;
            let clericTreasure = 0;
            let fighterTreasure = 0;
            action.data.forEach(room => {
                if(room[0]){
                    let treasureTypesArr = room[0].treasure.split(" + ");
                    treasureTypesArr.forEach(treasureString => {
                        if(treasureString === "Thief"){
                            thiefTreasure++
                        }
                        if(treasureString === "Thief x2"){
                            thiefTreasure = thiefTreasure + 2;
                        }
                        if(treasureString === "Cleric"){
                            clericTreasure++
                        }
                        if(treasureString === "Cleric x2"){
                            clericTreasure = clericTreasure + 2;
                        }
                        if(treasureString === "Fighter"){
                            fighterTreasure++
                        }
                        if(treasureString === "Fighter x2"){
                            fighterTreasure = fighterTreasure + 2;
                        }
                    })
                }
            });
            return {
                ...state,
                treasureCleric: clericTreasure,
                treasureFighter: fighterTreasure,
                treasureThief: thiefTreasure
            }
        case ADD_BUILD_ACTIONS:
            return {
                ...state,
                buildActions: state.buildActions + action.numberOfActions
            }
        default:
            return state
    }
}


export default playerStats