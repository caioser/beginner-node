const express = require('express');
const mustache = require('mustache-express');
const router = require('./routes/index');
const helpers = require('./helpers');

// Configurações
const app = express();

/* "app.use" marcam middlewares globais */
app.use((req, res, next)=>{ // é um exemplo de middleware global
    res.locals.h = helpers;
    res.locals.teste = "123";
    next();
});

app.use(express.json()); // ideal que fique antes do router

app.use('/', router);

// Template engine config:
app.engine('mst', mustache(__dirname+'/views/partials'));
app.set('view engine', 'mst');
app.set('views', __dirname+ '/views');

module.exports = app;