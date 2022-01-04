
import { SELECT_CARD, BUILDING_MODE } from "./types"

export const selectCard = (cardObj, className, id) => {
    
    return {
        type: SELECT_CARD,
        card: cardObj,
        className: className,
        id: id
    }
}
export const buildingMode = () => {
    return {
        type: BUILDING_MODE
    }
}


