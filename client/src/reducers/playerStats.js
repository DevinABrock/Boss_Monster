
import { DECREASE_PLAYER_HEALTH, UPDATE_PLAYER_TREASURE, RESET_GAME, HERO_KILLED, ADD_BUILD_ACTIONS, CHANGE_USE_BUTTON_SWAPPING, CHANGE_SWAP_ROOMS_MODE, NEXT_ROUND, ADD_USERNAME, ADD_SOUL, ABLE_TO_DESTROY } from "../actions/types"

const initialState = {
    username: "username",
    health: 99,
    souls: 0,
    treasureCleric: 0,
    treasureFighter: 0,
    treasureThief: 0,
    buildActions: 99,
    useButtonSwapping: false,
    swapRoomsMode: false,
    destroyMode: false,
}

const playerStats = (state = initialState, action) => {

    switch(action.type){
        case ADD_USERNAME:
            return {
                ...state,
                username: action.username
            }
        case ABLE_TO_DESTROY:
            return {
                ...state,
                destroyMode: !state.destroyMode
            }
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
        case CHANGE_USE_BUTTON_SWAPPING:
            return {
                ...state,
                useButtonSwapping: !state.useButtonSwapping
            }
        case CHANGE_SWAP_ROOMS_MODE:
            return {
                ...state,
                swapRoomsMode: !state.swapRoomsMode
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
        case NEXT_ROUND: // to add 1 build actions for ever 2 rooms destroyed

            let numRoomsDestroyed = 0
            let addedBuildActions = 0

            // playerDungeon brought in on the action
            action.playerDungeon.forEach(roomArr => {
                if(roomArr[0].durability === 0){
                    numRoomsDestroyed += 1
                }
            })

            if(numRoomsDestroyed === 6){
                addedBuildActions += 3 // three build actions are added
            }
            else if(numRoomsDestroyed >= 4){
                addedBuildActions += 2 // two build actions are added
            }
            else if(numRoomsDestroyed >= 2){
                addedBuildActions += 1 // one build action is added
            }

            if(numRoomsDestroyed >= 2){ // some amount of build actions added
                return {
                    ...state,
                    buildActions: state.buildActions += addedBuildActions
                }
            }
            else { // no build actions added
                return {
                    ...state
                }
            }
        case ADD_SOUL:
            return {
                ...state,
                souls: state.souls + 1
            }
        default:
            return state
    }
}


export default playerStats