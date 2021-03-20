const express = require('express'); //import express framework
const mustache = require('mustache-express'); //npm install mustache-express --save
const router = require('./routes/index');
const helpers = require('./helpers');

// Configurações
const app = express(); // instance express

app.use((req, res, next)=>{ // template helpers
    res.locals.h = helpers; // from helpers.js
    res.locals.teste = "123";
    next(); // default function to add the content above in every route
});

app.use('/', router);


app.use(express.json()); // for POST reqs

// Template engine config:
app.engine('mst', mustache(__dirname+'/views/partials'/*param to use '{{> header}}' on any .mst*/)); // specifying engine, file extension: 'mst', required mustache like a function
app.set('view engine', 'mst'); // setting objective of engine
app.set('views', __dirname+ '/views'); // specifying views directory

module.exports = app; // modularization for all project

