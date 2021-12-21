
import { SHUFFLE_ALL_DECKS, DEAL_HEROES_TO_TOWN, DEAL_INITIAL_CARDS, DEAL_ROOM_CARD } from "../actions/types"

const initialState = {
    bossDeck: [],
    heroDeck: [],
    epicHeroDeck: [],
    roomDeck: [],
    herosInTown: [],
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
            let chosenHeros = state.heroDeck.slice(0, action.data.number);
            let newHeroDeck = state.heroDeck.slice(0, - (action.data.number/2))
            console.log('chosenHeros', chosenHeros)
            console.log('newHeroDeck', newHeroDeck)
            return {
                ...state,
                herosInTown: [...chosenHeros],
                // not sure why this works since it should not need to be divided by 2 ( i think this runs twice is why? )
                heroDeck: state.heroDeck.slice(0, - (action.data.number))
            }
        case DEAL_INITIAL_CARDS:
            
            return {
                ...state,
                bossDeck: state.bossDeck.slice(0, -1),
                roomDeck: state.roomDeck.slice(0, -5),
                playerBoss: action.data.chosenBoss,
                playerRooms: [...action.data.chosenRooms]
            }
        case DEAL_ROOM_CARD:
            return {
                ...state,
                roomDeck: state.roomDeck.slice(0, -1),
                playerRooms: state.playerRooms.concat(state.roomDeck.slice(-1))
            }
        default:
            return state
    }
}

export default cardDecks