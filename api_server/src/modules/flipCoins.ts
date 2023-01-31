import resultsType from "../tests/resultsType";

export const flipCoins = (flips: number, side: string): resultsType[] => {
    let resultsContainer = [];
    let oneOrZero = 1;

    // encoded heads as 1 and tails as 0
    let targetValue = (side==='heads')? 1 : 0;
    for(let i = 0; i < flips; i++){
        // expression to get either 0 or 1
        oneOrZero = (Math.random()>=0.5)? 1 : 0;
        resultsContainer.push(
            {
                target: side,
                // returns the 'heads' or 'tails' string based on value
                sideFlipped: (oneOrZero === 1)? 'heads' : 'tails',
                result: (targetValue === oneOrZero)
            }
        );
    }

    return resultsContainer;
}