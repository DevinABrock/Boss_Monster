
import { SHUFFLE_ALL_DECKS, DEAL_HEROES_TO_TOWN, DEAL_INITIAL_CARDS, BUILD_DUNGEON, DEAL_ROOM_CARD, BAIT_HEROES, HERO_KILLED, SET_HERO_START_OF_DUNGEON, RESET_PLAYER_CARDS, HERO_SURVIVED, SWAP_ROOMS, DAMAGE_ROOM, NEXT_ROUND, CHANGE_SHOW_DISCARD_PILE, DRAW_FROM_DISCARD, DESTROY_ROOM, DISCARD_CARD } from "../actions/types"
import { dungeonBack } from "../assets/cards"

const initialState = {
    showDiscardPile: false,
    monsterCardFromDiscard: false,
    trapCardFromDiscard: false,
    roomCardFromDiscard: false,
    bossDeck: [],
    heroDeck: [],
    epicHeroDeck: [],
    roomDeck: [],
    heroesInTown: [],
    heroesAtStartOfDungeon: [],
    playerBoss: {},
    playerRooms: [
        // {
        //     id: "R59",
        //     name: "The Crushinator",
        //     subtitle: "Advanced Trap Room",
        //     dmg: 2,
        //     treasure: "Thief",
        //     description:
        //         "Destroy another room in your dungeon: Until end of turn, your Rooms have +2 damage.",
        //     image: "/card-images/rooms/the-crushinator.svg",
        // },
        // {
        //     id: "R58",
        //     name: "Recycling Center",
        //     subtitle: "Advanced Trap Room",
        //     dmg: 3,
        //     treasure: "Thief",
        //     description: "When another room in your dungeon is destroyed, you may draw two Room cards.",
        //     image: "/card-images/rooms/recycling-center.svg",
        // },
        // {
        //     id: "R28",
        //     name: "Beast Menagerie",
        //     subtitle: "Advanced Monster Room",
        //     dmg: 4,
        //     treasure: "Fighter",
        //     description:
        //         "Once per turn when you build another Monster room, draw a Room card.",
        //     image: "/card-images/rooms/beast-menagerie.svg",
        // },
        // {
        //     id: "R16",
        //     name: "Goblin Armory",
        //     subtitle: "Monster Room",
        //     dmg: 1,
        //     treasure: "Fighter x2",
        //     description: "Monster Rooms adjacent to this room deal +1 damage.",
        //     image: "/card-images/rooms/goblin-armory.svg",
        // },
        // {
        //     id: "R61",
        //     name: "Centipede Tunnel",
        //     subtitle: "Monster Room",
        //     dmg: 1,
        //     treasure: "Fighter + Mage",
        //     description:
        //     "When you build this room, you may swap the placement of two Rooms in any one dungeon.",
        //     image: "/card-images/rooms/centipede-tunnel.svg",
        // },
        // {
        //     id: "R51",
        //     name: "Dizzygas Hallway",
        //     subtitle: "Trap Room",
        //     dmg: 1,
        //     treasure: "Thief",
        //     description:
        //     "If the next room in your dungeon is a Trap room, it has +2 damage.",
        //     image: "/card-images/rooms/dizzygas-hallway.svg",
        // },
        // {
        //     id: "R63",
        //     name: "Construction Zone",
        //     subtitle: "Trap Room",
        //     dmg: 1,
        //     treasure: "Fighter + Thief",
        //     description:
        //     "When you build this room, you may immediately build an additional Room.",
        //     image: "/card-images/rooms/construction-zone.svg",
        // },
        // {
        //     id: "R49",
        //     name: "Boulder Ramp",
        //     subtitle: "Trap Room",
        //     dmg: 1,
        //     treasure: "Thief",
        //     description:
        //     "Destroy another room in your dungeon: Deal 5 damage to a hero in this room.",
        //     image: "/card-images/rooms/boulder-ramp.svg",
        // },
        // {
        //     id: "R13",
        //     name: "Dracolich Lair",
        //     subtitle: "Advanced Monster Room",
        //     dmg: 3,
        //     treasure: "Cleric",
        //     description:
        //     "Once per turn, you may discard two Room cards to choose one Room card from the discard pile and put it into your hand.",
        //     image: "/card-images/rooms/dracolich-lair.svg",
        // },
        // {
        //     id: "R1",
        //     name: "Dark Altar",
        //     subtitle: "Trap Room",
        //     dmg: 1,
        //     treasure: "Cleric x2",
        //     description:
        //     "Destroy this Room: Choose one card from the discard pile and put it into your hand.",
        //     image: "/card-images/rooms/dark-altar.svg",
        // },
        // {
        //     id: "R65",
        //     name: "Dragon Hatchery",
        //     subtitle: "Monster Room",
        //     dmg: 0,
        //     treasure: "Cleric + Mage + Fighter + Thief",
        //     description: "(This room contains all four treasure types.)",
        //     image: "/card-images/rooms/dragon-hatchery.svg",
        // },
        // {
        //     id: "R66",
        //     name: "Dragon Hatchery",
        //     subtitle: "Monster Room",
        //     dmg: 0,
        //     treasure: "Cleric + Mage + Fighter + Thief",
        //     description: "(This room contains all four treasure types.)",
        //     image: "/card-images/rooms/dragon-hatchery.svg",
        // },
        // {
        //     id: "R67",
        //     name: "Dragon Hatchery",
        //     subtitle: "Monster Room",
        //     dmg: 0,
        //     treasure: "Cleric + Mage + Fighter + Thief",
        //     description: "(This room contains all four treasure types.)",
        //     image: "/card-images/rooms/dragon-hatchery.svg",
        // },
        // {
        //     id: "R63",
        //     name: "Construction Zone",
        //     subtitle: "Trap Room",
        //     dmg: 1,
        //     treasure: "Fighter + Thief",
        //     description:
        //         "When you build this room, you may immediately build an additional Room.",
        //     image: "/card-images/rooms/construction-zone.svg",
        // },
        // {
        //     id: "R62",
        //     name: "Centipede Tunnel",
        //     subtitle: "Monster Room",
        //     dmg: 1,
        //     treasure: "Fighter + Mage",
        //     description:
        //         "When you build this room, you may swap the placement of two Rooms in any one dungeon.",
        //     image: "/card-images/rooms/centipede-tunnel.svg",
        // },
        // {
        //     id: "R50",
        //     name: "Boulder Ramp",
        //     subtitle: "Trap Room",
        //     dmg: 1,
        //     treasure: "Thief",
        //     description:
        //     "Destroy another room in your dungeon: Deal 5 damage to a hero in this room.",
        //     image: "/card-images/rooms/boulder-ramp.svg",
        // },
        // {
        //     id: "R4",
        //     name: "Open Grave",
        //     subtitle: "Trap Room",
        //     dmg: 2,
        //     treasure: "Cleric",
        //     description:
        //     "Once per turn, if a Hero dies in this room, choose one Room card from the discard pile and put into your hand.",
        //     image: "/card-images/rooms/open-grave.svg",
        // },
        // {
        //     id: "R22",
        //     name: "Minotaur's Maze",
        //     subtitle: "Monster Room",
        //     dmg: 0,
        //     treasure: "Fighter",
        //     description:
        //     "The first time a Hero enters this room, send it back to the previous room.",
        //     image: "/card-images/rooms/minotaurs-maze(1).svg",
        // },
        // {
        //     id: "R29",
        //     name: "Monster's Ballroom",
        //     subtitle: "Advanced Monster Room",
        //     dmg: "*",
        //     treasure: "Fighter",
        //     description:
        //         "This room's damage is equal to the number of Monster rooms in your dungeon.",
        //     image: "/card-images/rooms/monsters-ballroom.svg",
        // },
        // {
        //     id: "R70",
        //     name: "Monstrous Monument",
        //     subtitle: "Trap Room",
        //     dmg: 1,
        //     treasure: "Cleric + Fighter",
        //     description:
        //         "When you build this room, choose one Monster Room from the discard pile and put it in your hand.",
        //     image: "/card-images/rooms/monstrous-monument.svg",
        // },
        // {
        //     id: "R46",
        //     name: "Bottomless Pit",
        //     subtitle: "Trap Room",
        //     dmg: 1,
        //     treasure: "Thief",
        //     description: "Destroy this room: Kill a Hero in this room.",
        //     image: "/card-images/rooms/bottomless-pit.svg",
        // },
        // {
        //     id: "R47",
        //     name: "Bottomless Pit",
        //     subtitle: "Trap Room",
        //     dmg: 1,
        //     treasure: "Thief",
        //     description: "Destroy this room: Kill a Hero in this room.",
        //     image: "/card-images/rooms/bottomless-pit.svg",
        // },
        // {
        //     id: "R48",
        //     name: "Bottomless Pit",
        //     subtitle: "Trap Room",
        //     dmg: 1,
        //     treasure: "Thief",
        //     description: "Destroy this room: Kill a Hero in this room.",
        //     image: "/card-images/rooms/bottomless-pit.svg",
        // },
    ],
    playerDungeon: [
        // [{
        //     id: "R29",
        //     name: "Monster's Ballroom",
        //     subtitle: "Advanced Monster Room",
        //     dmg: "*",
        //     treasure: "Fighter",
        //     description:
        //     "This room's damage is equal to the number of Monster rooms in your dungeon.",
        //     image: "/card-images/rooms/monsters-ballroom.svg",
        // }],
        // [{
        //     id: "R58",
        //     name: "Recycling Center",
        //     subtitle: "Advanced Trap Room",
        //     dmg: 3,
        //     treasure: "Thief",
        //     description: "When another room in your dungeon is destroyed, you may draw two Room cards.",
        //     image: "/card-images/rooms/recycling-center.svg",
        // }],
        // [{
        //     id: "R59",
        //     name: "The Crushinator",
        //     subtitle: "Advanced Trap Room",
        //     dmg: 2,
        //     treasure: "Thief",
        //     description:
        //       "Destroy another room in your dungeon: Until end of turn, your Rooms have +2 damage. Revised: Once per turn, you may destroy another Room in your dungeon to give all your Rooms +2 until end of turn.",
        //     image: "/card-images/rooms/the-crushinator.svg",
        //   },],
        // [{
        //     id: "R29",
        //     name: "Monster's Ballroom",
        //     subtitle: "Advanced Monster Room",
        //     dmg: "*",
        //     treasure: "Fighter",
        //     description:
        //         "This room's damage is equal to the number of Monster rooms in your dungeon.",
        //     image: "/card-images/rooms/monsters-ballroom.svg",
        // }],
        // [
        //     {
        //         id: "R14",
        //         name: "Vampire Bordello",
        //         subtitle: "Advanced Monster Room",
        //         dmg: 3,
        //         treasure: "Cleric",
        //         description:
        //             "Once per turn, if a Hero dies in this room you may heal one wound. (Flip over one of your wounds, adding its Soul value to your total.)",
        //         image: "/card-images/rooms/vampire-bordello.svg",
        //     },
        // ],
        // [{
        //     id: "R28",
        //     name: "Beast Menagerie",
        //     subtitle: "Advanced Monster Room",
        //     dmg: 4,
        //     treasure: "Fighter",
        //     description:
        //         "Once per turn when you build another Monster room, draw a Room card.",
        //     image: "/card-images/rooms/beast-menagerie.svg",
        // }],

        [dungeonBack], [dungeonBack],
        [dungeonBack], [dungeonBack],
        [dungeonBack], [dungeonBack]
    ],
    discardPile: [
        // {
        //     id: "R12",
        //     name: "Dracolich Lair",
        //     subtitle: "Advanced Monster Room",
        //     dmg: 3,
        //     treasure: "Cleric",
        //     description:
        //     "Once per turn, you may discard two Room cards to choose one Room card from the discard pile and put it into your hand.",
        //     image: "/card-images/rooms/dracolich-lair.svg",
        // },
        // {
        //     id: "R24",
        //     name: "Neanderthal Cave",
        //     subtitle: "Monster Room",
        //     dmg: 3,
        //     treasure: "Fighter",
        //     description: "You cannot build an Advanced Room on Neanderthal Cave.",
        //     image: "/card-images/rooms/neanderthal-cave.svg",
        // },
        // {
        //     id: "R20",
        //     name: "Golem Factory",
        //     subtitle: "Monster Room",
        //     dmg: 2,
        //     treasure: "Fighter",
        //     description:
        //         "Once per turn, if a hero dies in this room, draw a Room card.",
        //     image: "/card-images/rooms/golem-factory.svg",
        // },
        // {
        //     id: "R16",
        //     name: "Goblin Armory",
        //     subtitle: "Monster Room",
        //     dmg: 1,
        //     treasure: "Fighter x2",
        //     description: "Monster Rooms adjacent to this room deal +1 damage.",
        //     image: "/card-images/rooms/goblin-armory.svg",
        // },
    ]
}

const cardDecks = (state = initialState, action) => {

    switch (action.type) {
        case SHUFFLE_ALL_DECKS:
            // console.log('shuffling deck')
            return {
                ...state,
                bossDeck: [...action.data.bossDeck],
                heroDeck: [...action.data.heroDeck],
                epicHeroDeck: [...action.data.epicHeroDeck],
                roomDeck: [...action.data.roomDeck],
            }
        case DEAL_HEROES_TO_TOWN:
            if (action.data.heroType === "ordinary") {
                // console.log('dealing heroes to town', action.data.number)
                let chosenHeroes = state.heroDeck.slice(-action.data.number);
                let newHeroDeck = state.heroDeck.slice(0, - (action.data.number));
                // console.log('chosenHeroes', chosenHeroes)
                // console.log('newHeroDeck', newHeroDeck)
                return {
                    ...state,
                    heroesInTown: [...chosenHeroes],
                    heroDeck: state.heroDeck.slice(0, - (action.data.number))
                }
            }
            else {
                // console.log('dealing heroes to town', action.data.number)
                let chosenHeroes = state.epicHeroDeck.slice(-action.data.number);
                let newHeroDeck = state.epicHeroDeck.slice(0, - (action.data.number));
                // console.log('chosenHeroes', chosenHeroes)
                // console.log('newHeroDeck', newHeroDeck)
                return {
                    ...state,
                    heroesInTown: [...chosenHeroes],
                    epicHeroDeck: state.epicHeroDeck.slice(0, - (action.data.number))
                }
            }

        case DEAL_INITIAL_CARDS:
            return {
                ...state,
                bossDeck: state.bossDeck.slice(0, -1),
                roomDeck: state.roomDeck.slice(0, -5),
                playerBoss: action.data.chosenBoss,
                playerRooms: [...action.data.chosenRooms]
            }
        case RESET_PLAYER_CARDS:
            return {
                ...state,
                playerRooms: [],
                playerDungeon: [[dungeonBack], [dungeonBack], [dungeonBack], [dungeonBack], [dungeonBack], [dungeonBack]],
                heroesInTown: [],
                heroesAtStartOfDungeon: []
            }
        case BUILD_DUNGEON:
            action.card.durability = 100
            // adds new room to dungeon if blank spot is clicked
            if (action.targetID === "D1") {

                let newPlayerDungeon = []

                // custom filter function to filter out cards with id of "D1"
                for (let i = 0; i < state.playerDungeon.length; i++) {
                    if (state.playerDungeon[i][0].id !== "D1") {
                        newPlayerDungeon.push(state.playerDungeon[i])
                    }
                }

                newPlayerDungeon.push([action.card])

                for (let i = newPlayerDungeon.length; i < 6; i++) {
                    newPlayerDungeon.push([dungeonBack])
                }

                return {
                    ...state,
                    playerDungeon: newPlayerDungeon,
                    playerRooms: state.playerRooms.filter(cardObj => cardObj.id !== action.card.id)
                }
            }
            // adds new room on top of current room in dungeon
            else {

                let newPlayerDungeon = state.playerDungeon.map(roomArr => { //[[{}], [{}], [{}]]

                    if (roomArr[0].id === action.targetID) {
                        // using tempArr so current roomArr in state.playerDungeon is not mutated
                        let tempArr = [...roomArr]
                        tempArr.unshift(action.card)
                        return tempArr
                    }
                    else {
                        return roomArr
                    }
                })
                return {
                    ...state,
                    playerDungeon: newPlayerDungeon,
                    playerRooms: state.playerRooms.filter(cardObj => cardObj.id !== action.card.id)
                }
            }
        case DAMAGE_ROOM:
            return {
                ...state,
                playerDungeon: state.playerDungeon.map(roomArr => {
                    if(action.roomID === roomArr[0].id){
                        // roomArr[0].durability -= 100 
                        // roomArr[0].durability -= 20
                    }
                    return roomArr
                })
            }
        case DESTROY_ROOM:
            // console.log('destroying room', action.roomIndex)

            let destroyedDungeon = [...state.playerDungeon]
            // if the array only has one room then destroy the whole array and add a blank room on the end
            // console.log(roomIndex)
            if (state.playerDungeon[action.roomIndex].length === 1) {
                destroyedDungeon.splice(action.roomIndex, 1)
                destroyedDungeon.push([dungeonBack])
            }
            // if the array has multiple rooms then remove the top room
            else {
                destroyedDungeon[action.roomIndex].splice(0, 1)
            }
            // console.log(destroyedDungeon)
            return {
                ...state,
                playerDungeon: destroyedDungeon
            }
        case DEAL_ROOM_CARD:
            return {
                ...state,
                roomDeck: state.roomDeck.slice(0, -1),
                playerRooms: state.playerRooms.concat(state.roomDeck.slice(-1))
            }
        case SWAP_ROOMS:
            let selectedCardIndex = null;
            let targetRoomIndex = null;
            let newDungeon = [...state.playerDungeon]
            for (let index = 0; index < state.playerDungeon.length; index++) {
                if (state.playerDungeon[index][0].id === action.targetedRoomID) {
                    // console.log('target index found', index)
                    targetRoomIndex = index
                }
                if (state.playerDungeon[index][0].id === action.selectedCardID) {
                    // console.log('selected index found', index)
                    selectedCardIndex = index
                }
            }
            // console.log(targetRoomIndex, selectedCardIndex)

            [newDungeon[targetRoomIndex], newDungeon[selectedCardIndex]] = [newDungeon[selectedCardIndex], newDungeon[targetRoomIndex]]
            // console.log(newDungeon)

            return {
                ...state,
                playerDungeon: [...newDungeon]
            }
        case BAIT_HEROES:
            // console.log("boss treasure", state.playerBoss.treasure)
            let bossTreasure = state.playerBoss.treasure;
            let thiefTreasure = action.data.treasureThief;
            let clericTreasure = action.data.treasureCleric;
            let fighterTreasure = action.data.treasureFighter;
            // console.log("thiefTreasure", thiefTreasure, "clericTreasure", clericTreasure, "fighterTreasure", fighterTreasure)
            // adding the boss treasure to the treasure type depending on the boss
            switch (bossTreasure) {
                case "Thief":
                    thiefTreasure++
                    break
                case "Cleric":
                    clericTreasure++
                    break
                case "Fighter":
                    fighterTreasure++
                    break
                default:
                    break;
            }
            // console.log("thiefTreasure", thiefTreasure, "clericTreasure", clericTreasure, "fighterTreasure", fighterTreasure)
            // accidentally did baiting based off hero treasures instead of room treasures (not removing bc could potentially reference in future)
            let heroesToPlayerDungeon = state.heroesInTown.filter(hero => {
                // console.log(hero)
                // console.log(action.data)

                // if the hero is the fool he always goes to the dungeon
                if (hero.treasure === "?") {
                    return true
                }
                // if the hero is ordinary
                if (hero.subtitle === "Ordinary-Hero") {
                    // console.log('ordinary hero')
                    if (hero.treasure === "Thief" && thiefTreasure > 1) {
                        return true
                    }
                    if (hero.treasure === "Cleric" && clericTreasure > 1) {
                        return true
                    }
                    if (hero.treasure === "Fighter" && fighterTreasure > 1) {
                        return true
                    }
                }
                // if the hero is epic
                else {
                    if (hero.treasure === "Thief" && thiefTreasure > 2) {
                        return true
                    }
                    if (hero.treasure === "Cleric" && clericTreasure > 2) {
                        return true
                    }
                    if (hero.treasure === "Fighter" && fighterTreasure > 2) {
                        return true
                    }
                }
                // if no case matches then the hero stays in town
                return false
            })
            // console.log(heroesToPlayerDungeon)
            return {
                ...state,
                heroesInTown: state.heroesInTown.filter(hero => !heroesToPlayerDungeon.includes(hero)),
                heroesAtStartOfDungeon: [...heroesToPlayerDungeon]
            }
        case HERO_KILLED:
            return {
                ...state,
                heroesAtStartOfDungeon: state.heroesAtStartOfDungeon.slice(1),
            }
        case HERO_SURVIVED:
            return {
                ...state,
                heroesAtStartOfDungeon: state.heroesAtStartOfDungeon.slice(1),
            }
        case SET_HERO_START_OF_DUNGEON:
            return {
                ...state,
                heroesInTown: [],
            }
        case NEXT_ROUND: // to remove cards that have 0 durability & add 1 card to player hand for ever 2 rooms destroyed

            let newPlayerDungeon = []
            let numRoomsDestroyed = 0
            let newDiscardPile = []

            state.playerDungeon.forEach(roomArr => {
                let tempArr = [...roomArr]
                if (tempArr[0].durability === 0) {
                    if (tempArr.length > 1) {
                        newDiscardPile.push(tempArr.splice(0, 1)[0])
                        newPlayerDungeon.push(tempArr)
                        numRoomsDestroyed += 1
                    }
                    else {
                        newDiscardPile.push(tempArr[0])
                        numRoomsDestroyed += 1
                    }
                }
                else {
                    newPlayerDungeon.push(tempArr)
                }
            })

            for (let i = newPlayerDungeon.length; i < 6; i++) {
                newPlayerDungeon.push([dungeonBack])
            }

            let cardsToDraw = []
            let newRoomDeck = state.roomDeck

            if (numRoomsDestroyed === 6) {
                cardsToDraw.push(newRoomDeck.splice(-3)) // three cards are added
            }
            else if (numRoomsDestroyed >= 4) {
                cardsToDraw.push(newRoomDeck.splice(-2)) // two cards are added
            }
            else if (numRoomsDestroyed >= 2) {
                cardsToDraw.push(newRoomDeck.splice(-1)) // one card is added
            }

            // console.log("newDiscardPile", newDiscardPile)
            // console.log("cardsToDraw", cardsToDraw)

            // console.log(newPlayerDungeon)

            if (numRoomsDestroyed >= 2) { // some amount of cards are drawn and added to players hand
                return {
                    ...state,
                    playerDungeon: newPlayerDungeon,
                    roomDeck: newRoomDeck,
                    playerRooms: state.playerRooms.concat(cardsToDraw[0]),
                    discardPile: [...state.discardPile].concat(newDiscardPile) 
                }
            }
            else { // no cards added to players hand
                return {
                    ...state,
                    playerDungeon: newPlayerDungeon,
                    discardPile: [...state.discardPile].concat(newDiscardPile) 
                }
            }
        case CHANGE_SHOW_DISCARD_PILE:
            // console.log("action.roomTypeToDraw", action.roomTypeToDraw)
            if (action.roomTypeToDraw === "Monster Room") {
                return {
                    ...state,
                    showDiscardPile: !state.showDiscardPile,
                    monsterCardFromDiscard: !state.monsterCardFromDiscard,
                }
            }
            else if (action.roomTypeToDraw === "Trap Room") {
                return {
                    ...state,
                    showDiscardPile: !state.showDiscardPile,
                    trapCardFromDiscard: !state.trapCardFromDiscard,
                }
            }
            else {
                return {
                    ...state,
                    showDiscardPile: !state.showDiscardPile,
                    roomCardFromDiscard: !state.roomCardFromDiscard,
                }
            }
        case DISCARD_CARD:
            
            let cardDiscarded = state.playerRooms.filter(cardObj => cardObj.id === action.roomID)
            // console.log("cardDiscarded", cardDiscarded)

            return {
                ...state,
                playerRooms: state.playerRooms.filter(cardObj => cardObj.id !== action.roomID),
                discardPile: state.discardPile.concat(cardDiscarded),
            }

        case DRAW_FROM_DISCARD:

            let cardDrawn = state.discardPile.filter(cardObj => cardObj.id === action.roomID)

            return {
                ...state,
                playerRooms: state.playerRooms.concat(cardDrawn),
                discardPile: state.discardPile.filter(cardObj => cardObj.id !== action.roomID)
            }
        default:
            return state
    }
}

export default cardDecks