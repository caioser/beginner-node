const express = require('express');
const mustache = require('mustache-express');
const router = require('./routes/index');
const helpers = require('./helpers');
const errorHandler = require('./handlers/errorHandler');

// Configurações
const app = express();

/* "app.use" marcam middlewares globais */
app.use((req, res, next)=>{
    res.locals.h = helpers;
    res.locals.teste = "123";
    next();
});

app.use(express.json());

app.use('/', router);

//adicionar página não encontrada, caso não encontre uma rota no comando acima
app.use(errorHandler.notFound);

// Template engine config:
app.engine('mst', mustache(__dirname+'/views/partials'));
app.set('view engine', 'mst');
app.set('views', __dirname+ '/views');

module.exports = app;