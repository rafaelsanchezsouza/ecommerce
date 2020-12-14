import express from 'express';

import './database/connection';

const app = express();

app.use(express.json()); //para que express consiga ler json

app.get('/users', (request, response) => {
  console.log('teste');
  return response.json({ message: 'Hello World' });
});

app.listen(3333);
