import coinflipResult from "../tests/coinflipResult";

export const determineWinner = (flips: number, flippedCoins: coinflipResult[]): string => {
    let winCounter = 0;
    flippedCoins.forEach((coin) => {
        if(coin.result){
            winCounter++;
        }
    })
    let winThreshold = flips / 2;
    if(winCounter > (winThreshold)){
        return 'win';
    }
    if(winCounter < (winThreshold)){
        return 'lose';
    }
    return 'draw';
}