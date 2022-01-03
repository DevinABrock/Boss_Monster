
const { bossDeck, roomDeck, heroDeck, epicHeroDeck, spellDeck} = require('../../assets/cards');

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
    // console.log('Shuffling Decks')
    let shuffledBosses = shuffleDeck(bossDeck);
    let shuffledRooms = shuffleDeck(roomDeck);
    let shuffledHeroes = shuffleDeck(heroDeck);
    let shuffledEpicHeroes = shuffleDeck(epicHeroDeck);
    let shuffledSpells = shuffleDeck(spellDeck);

    let deckObj = { bossDeck: shuffledBosses, roomDeck: shuffledRooms, heroDeck: shuffledHeroes, epicHeroDeck: shuffledEpicHeroes, spellDeck: shuffledSpells }
    return deckObj;
}

export const dealInitialCards = (bossDeck, roomDeck, dealInitialCardsAction, dispatch) => {
    // console.log('dispatching hand');
    let chosenBoss = bossDeck[bossDeck.length-1];
    let roomLength = roomDeck.length-1;
    let chosenRooms = [roomDeck[roomLength], roomDeck[roomLength-1], roomDeck[roomLength-2], roomDeck[roomLength-3], roomDeck[roomLength-4]];

    dispatch(dealInitialCardsAction(chosenBoss, chosenRooms))

}
