
import { SHUFFLE_ALL_DECKS, DEAL_HEROES_TO_TOWN, DEAL_INITIAL_CARDS, DEAL_ROOM_CARD, BAIT_HEROES } from "../actions/types"

const initialState = {
    bossDeck: [],
    heroDeck: [],
    epicHeroDeck: [],
    roomDeck: [],
    heroesInTown: [],
    heroesAtStartOfDungeon: [],
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
        },
        {
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
        }]
    ]
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
                heroesInTown: [...chosenHeros],
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
        case BAIT_HEROES:

            
            // accidentally did baiting based off hero treasures instead of room treasures (not removing bc could potentially reference in future)
            let heroesToPlayerDungeon = state.heroesInTown.filter(hero=> {
                console.log(hero)
                console.log(action.data)
                
                if(hero.subtitle === "Ordinary-Hero"){
                    if(hero.treasure === "Thief" && action.data.treasureThief>1){
                        return true
                    }
                    if(hero.treasure === "Cleric" && action.data.treasureCleric>1){
                        return true
                    }
                    if(hero.treasure === "Fighter" && action.data.treasureFighter>1){
                        return true
                    }
                }
                else{
                    if(hero.treasure === "Thief" && action.data.treasureThief>3){
                        return true
                    }
                    if(hero.treasure === "Cleric" && action.data.treasureCleric>3){
                        return true
                    }
                    if(hero.treasure === "Fighter" && action.data.treasureFighter>3){
                        return true
                    }
                }
                // if no case matches then the hero stays in town
                return false
            })
            console.log(heroesToPlayerDungeon)
            return {
                ...state,
                heroesInTown: state.heroesInTown.filter(hero=> !heroesToPlayerDungeon.includes(hero)),
                heroesAtStartOfDungeon: [...heroesToPlayerDungeon]
            }
        default:
            return state
    }
}

export default cardDecks