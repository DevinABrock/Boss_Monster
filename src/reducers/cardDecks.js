
import { SHUFFLE_ALL_DECKS, DEAL_HEROES_TO_TOWN, DEAL_INITIAL_CARDS, BUILD_DUNGEON } from "../actions/types"

const initialState = {
    bossDeck: [],
    heroDeck: [],
    epicHeroDeck: [],
    roomDeck: [],
    heroesInTown: [],
    playerBoss: {},
    playerRooms: [],
    playerDungeon: [],
}

const cardDecks = (state = initialState, action) => {

    switch(action.type){
        case SHUFFLE_ALL_DECKS:
            console.log('shuffling deck')
            return {
                ...state,
                bossDeck: [...action.data.bossDeck],
                heroDeck: [...action.data.heroDeck],
                epicHeroDeck: [...action.data.epicHeroDeck],
                roomDeck: [...action.data.roomDeck],
            }
        case DEAL_HEROES_TO_TOWN:
            console.log('dealing heroes to town', action.data.number)
            let chosenHeroes = state.heroDeck.slice(0, action.data.number);
            let newHeroDeck = state.heroDeck.slice(0, - (action.data.number/2))
            console.log('chosenHeroes', chosenHeroes)
            console.log('newHeroDeck', newHeroDeck)
            return {
                ...state,
                heroesInTown: [...chosenHeroes],
                // not sure why this works since it should not need to be divided by 2 ( i think this runs twice is why? )
                heroDeck: [...state.heroDeck.slice(0, - (action.data.number/2))]
            }
        case DEAL_INITIAL_CARDS:
            return {
                ...state,
                playerBoss: action.data.chosenBoss,
                playerRooms: [...action.data.chosenRooms]
            }
        case BUILD_DUNGEON:
            console.log("action.card", action.card)
            return {
                ...state,
                playerDungeon: [[action.card], ...state.playerDungeon],
                playerRooms: state.playerRooms.filter(cardObj=>cardObj.id !== action.card.id)
            }
        default:
            return state
    }
}

export default cardDecks