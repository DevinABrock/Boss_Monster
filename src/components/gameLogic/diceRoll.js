

export const diceRoll = (gameRound) => {
    let rollNumber = Math.ceil(Math.random()*6)
    let isHit = false;
    (rollNumber<gameRound)? isHit=true: isHit=false;
    return {rollNumber, isHit}
}
