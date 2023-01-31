import { invalidRequest } from "./modules/invalidRequest";

import express = require('express');

const app = express();

app.use(express.json());

app.get('/coinflip', (req: express.Request, res: express.Response) => {
    let errorMessage: string | null = invalidRequest(req);
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
        flips : req.query['flips'],
        side: req.query['side']
    });
});

const port: number = 4090;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = server;