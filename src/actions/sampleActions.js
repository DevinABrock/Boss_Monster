
import { INCREMENT } from "./types"

// !add multiple actions to this file

export const sampleAction = (sampleData) => {
    return {
        type: INCREMENT,
        data: sampleData
    }
}