const app = require('./app'); // importa o que há em app.js
const mongoose = require('mongoose');

require('dotenv').config({path:'variables.env'}); // usa a dotenv library instalado por NPM para pegar variaveis do arquivo 'variables.env'

// Conexão ao banco de dados
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true }); // DATABASE = 'mongodb://127.0.0.1:27017'
mongoose.Promise = global.Promise; // mongoose pode usar promises
mongoose.connection.on('error', (error)=>{ // error handling
    console.error("ERRO: "+error.message);
});

app.set('port', process.env.PORT || 7777); // seta a porta de acesso do servidor
const server = app.listen(app.get('port'), ()=>{
    console.log("Servidor rodando na porta: "+server.address().port);
});
