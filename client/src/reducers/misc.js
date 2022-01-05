


import { SELECT_CARD, BUILDING_MODE } from "../actions/types"

const initialState = {
    card: {},
    className: "",
    buildingMode: false
}

const misc = (state = initialState, action) => {

    switch(action.type){
        case SELECT_CARD:
            if(action.id !== "A1" && action.id !== "D1"){
                return {
                    ...state,
                    card: action.card,
                    className: action.className,
                    id: action.id
                }
            }
            else{
                return{
                    ...state
                }
            }
            
        case BUILDING_MODE:
            // console.log("buildingMode", !state.buildingMode)
            return {
                ...state,
                buildingMode: !state.buildingMode // swaps state of buildingMode between true and false
            }
        default:
            return state
    }
}

export default misc