
import { SELECT_CARD, BUILDING_MODE } from "./types"

export const selectCard = (cardObj, className) => {
    return {
        type: SELECT_CARD,
        card: cardObj,
        className: className
    }
}
export const buildingMode = () => {
    return {
        type: BUILDING_MODE
    }
}


