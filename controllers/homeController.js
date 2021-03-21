// exemplo prático de criação de middleware, no caso: um middleware local
exports.userMiddleware = (req, res, next) => {
    let info = {name:'Caio', id:123}; // como se tivesse acessado banco de dados para usar informações de usuário na requisição
    req.userInfo = info; //adicionado na requisição
    next(); // 'Ei node, terminei o que fiz aqui, vai pro próximo'
};

exports.index = (req, res)=>{ // eis o próximo
    let obj = {
        pageTitle:'HOME',
        userInfo: req.userInfo // instanciando as informações no 'obj.userInfo'
    };
    res.render('home', obj); // agora, usar isso no template home.mst
}