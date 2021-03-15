const express = require('express'); //importar framework express
const mustache = require('mustache-express');
const router = require('./routes/index');

// Configurações
const app = express(); // instanciar express em app
app.use('/', router); // usa a rota

app.use(express.json());

app.engine('mst', mustache()); // %Template

module.exports = app; // torna este arquivo acessível por outros dentro do projeto