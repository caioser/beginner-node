let str = `@Terminal
    iniciando projeto
        abrir terminal no diretório do projeto
        gerar o package.json
            $ npm init
    instalar dependecias iniciais
        express (um dos frameworks para node.js)
            $ npm install express --save
        nodemom (reinicia o servidor sempre que há alteração)
            $ npm install nodemom --save-dev
@package.json
    manter as chaves: name, version, scripts, dependencies, devDependencies
    criar atalho:
        tornar o valor da chave "scripts" um objeto com
        uma chave="start" e valor="nodemom ./server.js"
    configuração servidor inicial
        criar arquivo 'server.js' e 'app.js'
@app.js
    importar o express
        const express = require('express');
    configurações básicas:
        estabelecer rotas, quando usuário mandar requisição receberá algo
            const router = express.Router();
            router.get('/', (req, res)=>{
                res.send('Olá Mundo')
            });
        instanciar, iniciar o app
            const app = express();
        usar a rota
            app.use('/', router);
        tornar o app disponível em todo o sistema, pois vai importar no 'server.js'
            module.exports = app;
@server.js
    puxar a aplicação usando express importando 'app.js'
        const app = require('./app');
    fazer rodar em porta específica
        app.set('port', 7777);
    rodar o servidor
        const server = app.listen(app.get('port'), ()=>{
            console.log("Servidor rodando na porta: "+server.adress().port);
        });
@Terminal
    rodar projeto no navegador
        no diretório do projeto: (atalho do package.json na chave "script"):
            $ npm start
@browser
        entrar em 'localhost:7777' receberá o texto 'Olá Mundo'
    configurar variáveis de ambiente do projeto
        criar arquivo variables.env
@variables.env
    template de itens 'CHAVE_KEY=valor_value':
        NODE_ENV=development
        PORT=7777
@Terminal
    necessário estar com o serviço de banco de dados ativo com:
        $ sudo service mongod start
    entrar no cli do MongoDB e verificar o endereço de conexão
        $ mongo
        procurar pela linha com "connecting to: mongodb://{ip}:{port}" e copiar o endereço
            geralmente "mongodb://127.0.0.1:27017" é o padrão
@variables.env
    adicionar variável de Banco de dados
        DATABASE=mongodb://127.0.0.1:27017
@Terminal
    adicionar extensão que faz o servidor ler as vaiáveis de ambiente em 'variables.env'
        $npm install dotenv
    usar o dotenv:
@server.js
    linha 3
        require('dotenv').config({path:'variables.env'});
    mofificar a porta manual para variavel de ambiente mantendo a manual com condição OU por precaução
        app.set('port', process.env.PORT || 7777);



        Aula a assistir
        https://alunos.b7web.com.br/curso/node/configurando-o-mongodb
        Configurando MongoDB
`;









document.getElementById('text').innerText = str;



str = str
    .split('\n')
    .filter((el)=>{
        if (el.length > 4) {
            return el;
        }
    });

let i = 0;
let t = 0;
function stepping(speed = 1000) {

    t = setInterval(()=>{
        str[i] !== undefined ? (console.log(str[i]), i++) : (clearInterval(t), i=0); 
        
        /*if (str[i] !== undefined) {
            console.log(str[i]);
            i++;
        } else {
            clearInterval(t);
        }*/

    }, speed);
}