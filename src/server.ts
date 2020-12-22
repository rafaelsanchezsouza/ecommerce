import express from 'express';

import './database/connection';

import routes from './routes';

const app = express();
app.use(express.json()); //para que express consiga ler json

app.use(routes);

app.listen(3333);
