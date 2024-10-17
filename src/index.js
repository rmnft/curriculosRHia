const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor Node.js está rodando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
