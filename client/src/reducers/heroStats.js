
import { SET_HERO_START_OF_DUNGEON, MOVE_HERO_NUMBER_OF_STEPS, DAMAGE_HERO, HERO_KILLED, HERO_SURVIVED, DESTROY_ROOM } from "../actions/types"
import { dungeonBack } from "../assets/cards"

const initialState = {
    heroRoomPosition: 5,
    heroHealth: 1
}

const heroStats = (state = initialState, action) => {

    switch (action.type) {
        case SET_HERO_START_OF_DUNGEON:
            console.log('setting hero to start of dungeon', action.playerDungeon)
            let roomsInPlayerDungeon = [];
            for (let index = 0; index < action.playerDungeon.length; index++) {
                console.log(action.playerDungeon[index])
                if (action.playerDungeon[index][0] === dungeonBack) {
                    console.log('empty card')
                }
                else {
                    roomsInPlayerDungeon.push([action.playerDungeon[index]])
                }
            }
            console.log("rooms in player dungeon", roomsInPlayerDungeon)
            return {
                ...state,
                heroRoomPosition: roomsInPlayerDungeon.length - 1,
                heroHealth: action.heroesAtStartOfDungeon[0].HP
            }
        case MOVE_HERO_NUMBER_OF_STEPS:
            return {
                ...state,
                heroRoomPosition: state.heroRoomPosition + action.steps,
            }
        case DESTROY_ROOM:
            let newHeroPosition = null;
            if (action.roomIndex <= state.heroRoomPosition) {
                newHeroPosition = state.heroRoomPosition - 1
            }
            else{
                newHeroPosition = state.heroRoomPosition
            }
            console.log('newHeroPosition', newHeroPosition)
            return {
                ...state,
                heroRoomPosition: newHeroPosition
            }
        case DAMAGE_HERO:
            return {
                ...state,
                heroHealth: state.heroHealth - action.damage,
            }
        case HERO_KILLED:
            console.log("action.heroesAtStartOfDungeon", action.heroesAtStartOfDungeon)

            if (action.lastHero) {
                console.log("HERO_KILLED last hero")
                return {
                    ...state,
                    heroRoomPosition: 5,
                }
            }
            else {
                // replicating everything that SET_HERO_START_OF_DUNGEON is doing
                console.log("HERO_KILLED not the last hero")
                console.log('setting hero to start of dungeon', action.playerDungeon)
                let roomsInPlayerDungeon = [];
                for (let index = 0; index < action.playerDungeon.length; index++) {
                    console.log(action.playerDungeon[index])
                    if (action.playerDungeon[index][0] === dungeonBack) {
                        console.log('empty card')
                    }
                    else {
                        roomsInPlayerDungeon.push([action.playerDungeon[index]])
                    }
                }
                console.log("rooms in player dungeon", roomsInPlayerDungeon)
                return {
                    ...state,
                    heroRoomPosition: 5,
                    heroRoomPosition: roomsInPlayerDungeon.length - 1,
                    heroHealth: action.heroesAtStartOfDungeon[1].HP
                }
            }
        case HERO_SURVIVED:
            console.log("action.heroesAtStartOfDungeon", action.heroesAtStartOfDungeon)

            if (action.lastHero) {
                console.log("HERO_SURVIVED last hero")
                return {
                    ...state,
                    heroRoomPosition: 5,
                }
            }
            else {
                // replicating everything that SET_HERO_START_OF_DUNGEON is doing
                console.log("HERO_SURVIVED not the last hero")
                console.log('setting hero to start of dungeon', action.playerDungeon)
                let roomsInPlayerDungeon = [];
                for (let index = 0; index < action.playerDungeon.length; index++) {
                    console.log(action.playerDungeon[index])
                    if (action.playerDungeon[index][0] === dungeonBack) {
                        console.log('empty card')
                    }
                    else {
                        roomsInPlayerDungeon.push([action.playerDungeon[index]])
                    }
                }
                console.log("rooms in player dungeon", roomsInPlayerDungeon)
                return {
                    ...state,
                    heroRoomPosition: 5,
                    heroRoomPosition: roomsInPlayerDungeon.length - 1,
                    heroHealth: action.heroesAtStartOfDungeon[1].HP
                }
            }


        default:
            return state
    }
}


export default heroStats