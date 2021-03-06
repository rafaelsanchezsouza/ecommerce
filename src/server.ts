import express from 'express';
import path from 'path';
import 'express-async-errors';
import cors from 'cors';
import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();
app.use(express.json()); //para que express consiga ler json

app.use(cors());
// app.get('/products', (request, response) => {
//   return response.send('Hello World!!!');
// });
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);
app.listen(3333);
