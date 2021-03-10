const express = require('express'); //importar framework express

// Rotas
const router = express.Router();
router.get('/', (req, res)=>{
    res.send("Yae galera kkkk!<br>Né que funciona essa joça..."); // cria rota que envia esse texto quando o cliente acessa o sistema e a requisição é '/' na raiz
});

// Configurações
const app = express(); // instanciar express em app
app.use('/', router); // usa a rota

module.exports = app; // torna este arquivo acessível por outros dentro do projeto