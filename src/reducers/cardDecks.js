
import { SHUFFLE_ALL_DECKS, DEAL_HEROES_TO_TOWN, DEAL_INITIAL_CARDS } from "../actions/types"

const initialState = {
    bossDeck: [],
    heroDeck: [],
    epicHeroDeck: [],
    roomDeck: [],
    herosInTown: [],
    playerBoss: {},
    playerRooms: [],
    playerDungeon: [
        [{
            id: "R47",
            name: "Bottomless Pit",
            subtitle: "Trap Room",
            dmg: 1,
            treasure: "Thief",
            description: "Destroy this room: Kill a Hero in this room.",
            image: "/card-images/rooms/bottomless-pit.svg",
        }],
        [{
            id: "R58",
            name: "Recycling Center",
            subtitle: "Advanced Trap Room",
            dmg: 3,
            treasure: "Thief",
            description:"When another room in your dungeon is destroyed, you may draw two Room cards.",
            image: "/card-images/rooms/recycling-center.svg",
        }],
        [{
            id: "R58",
            name: "Recycling Center",
            subtitle: "Advanced Trap Room",
            dmg: 3,
            treasure: "Thief",
            description:"When another room in your dungeon is destroyed, you may draw two Room cards.",
            image: "/card-images/rooms/recycling-center.svg",
        }],
    ],
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
                heroDeck: [...state.heroDeck.slice(0, - (action.data.number/2))]
            }
        case DEAL_INITIAL_CARDS:
            return {
                ...state,
                playerBoss: action.data.chosenBoss,
                playerRooms: [...action.data.chosenRooms]
            }
        default:
            return state
    }
}

export default cardDecks