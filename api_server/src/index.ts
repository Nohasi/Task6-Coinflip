import { invalidRequest } from "./modules/invalidRequest";

import express = require('express');

const app = express();

app.use(express.json());

app.get('/coinflip', (req: express.Request, res: express.Response) => {

});

const port: number = 4090;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = server;