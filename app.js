const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('API rodando na porta 3000!');
});

app.get('/id', (req, res) => {
  const { id } = req.query;
  fs.writeFileSync('id.json', JSON.stringify({ id }));
  res.send(`Id ${id} salvo com sucesso!`);
});

module.exports = app;