const express = require('express');
const mongoose = require('mongoose'); // não faz parte deste setup, é uma correção de commits anteriores
const mustache = require('mustache-express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');

const router = require('./routes/index');
const helpers = require('./helpers');
const errorHandler = require('./handlers/errorHandler');

// Configurações
const app = express();

app.use(express.json()); // correção de código, mudança de ordem apenas
app.use(express.urlencoded({extend:true}));

app.use(cookieParser(process.env.SECRET)); // habilitando cookie
app.use(session({ // habilitando session
    secret:process.env.SECRET,
    resave:false, // sessão não precisa ser destruída e recriada a cada requisição. Padrão é TRUE
    saveUninitialized:false // não salvar sessões vazias
}));
app.use(flash()); // habilitando flash

app.use((req, res, next)=>{
    res.locals.h = helpers;
    res.locals.flashes = req.flash(); // pega todas as mensagens para '.flashes'
    next();
});

app.use('/', router);

app.use(errorHandler.notFound);

app.engine('mst', mustache(__dirname+'/views/partials'));
app.set('view engine', 'mst');
app.set('views', __dirname+ '/views');

module.exports = app;

/*
para usar mensagens flash necessário esses 3 pacotes
$ sudo npm install cookie-parser express-session express-flash --save
*/