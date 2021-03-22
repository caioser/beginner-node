const mongoose = require('mongoose'); // conexão com DB
mongoose.Promise = global.Promise; // diz para o mongoose usar promisses

/*
MongoDB é conhecido por ser muito flexível
mongoose possui o objeto 'Schema' para padronização de entradas no DB
abaixo, criando Schema de armazenamento dos Posts
*/

const postSchema = new mongoose.Schema({
    title:{ // proporcional a coluna em SQL
        type:String, // proporcional a tipo de campo em SQL
        trim:true, // retira espaços em branco do início e fim da string
        required:'O post precisa de um título' // proporcional a NOT NULL em SQL, pode ser 'true' ou '<mensagem>'
    },
    slug:String,
    body:{
        type:String,
        trim:true,
    },
    tags:[String] // array com strings
});

module.exports = mongoose.model('Post', postSchema);
// agora precisa registar esse model no sistema, em server.js