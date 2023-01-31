import { invalidRequest } from "./modules/invalidRequest";

import express = require('express');
import { flipCoins } from "./modules/flipCoins";

const app = express();

app.use(express.json());

app.get('/coinflip', (req: express.Request, res: express.Response) => {
    let errorMessage: string | null = invalidRequest(req);
    // not null: an error exists, hence is returned
    if(errorMessage != null){
        res.status(406);
        res.send({
            status: 406,
            error: errorMessage
        })
        return;
    }

    res.status(200);
    res.send({
        status: 200,
        results: flipCoins(Number(req.query['flips']), String(req.query['side']))
    });
});

const port: number = 4090;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = server;