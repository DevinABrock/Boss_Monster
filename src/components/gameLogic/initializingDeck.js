
const { bossDeck, roomDeck, heroDeck, epicHeroDeck, } = require('../../assets/cards');

function shuffleDeck(givenDeck) {
    for (let x = 0; x < givenDeck.length; x++) {
        let randomCardNum = Math.floor(Math.random() * (givenDeck.length-1));
        let givenX = givenDeck[x];
        givenDeck[x] = givenDeck[randomCardNum];
        givenDeck[randomCardNum] = givenX
    }
    return givenDeck
}

export const shuffleAllDecks = () => {
    console.log('Shuffling Decks')
    let shuffledBosses = shuffleDeck(bossDeck);
    let shuffledRooms = shuffleDeck(roomDeck);
    let shuffledHeroes = shuffleDeck(heroDeck);
    let shuffledEpicHeroes = shuffleDeck(epicHeroDeck);

    let deckObj = { bossDeck: shuffledBosses, roomDeck: shuffledRooms, heroDeck: shuffledHeroes, epicHeroDeck: shuffledEpicHeroes }
    return deckObj;
}
