const mongoose = require('mongoose');
const Post = mongoose.model('Post');

exports.add = (req, res) => {
    res.render('postAdd');
};

exports.addAction = async (req, res) => {
    const post = new Post(req.body);

    try { // evitar envio formulário vazio, pagina em loading sem resposta
        await post.save();
    } catch(error) {
        req.flash('error', 'Ocorreu um erro! Tente novamente mais tarde...');
        return res.redirect('/post/add');
    }
    
    req.flash('success', 'Post salvo com sucesso!');

    res.redirect('/');
};