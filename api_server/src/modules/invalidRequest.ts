import { Request } from "express"
export const invalidRequest = (req: Request) => {

    // Checking for parameter existence
    if(!('flips' in req.query)){
        return 'The \'flips\' parameter is not passed';
    }
    if(!('side' in req.query)){
        return 'The \'side\' parameter is not passed';
    }

    //Checking for empty params
    if(req.query.flips === ""){
        return 'The \'flips\' parameter is empty';
    }
    if(req.query.side === ""){
        return 'The \'side\' parameter is empty';
    }

    // Checking if flips is not a number
    if(isNaN(Number(req.query['flips']))){
        return '\'flips\' should be passed as a number';
    }

    // Checking if 'side' is neither heads/head nor tails/tail
    if(req.query['side'] !== 'heads' && req.query['side'] !== 'head' && 
       req.query['side'] !== 'tails' && req.query['side'] !== 'tail'){
        return '\'side\' should be either \'heads\' or \'tails\'';
    }

    return null;
}