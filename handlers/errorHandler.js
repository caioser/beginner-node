// criar função a ser exportada para app.js
exports.notFound = (req, res, next) => {
  res.status = 404; // importante mudar para os browsers identificarem que tipo de erro há na resposta
  res.render('404'); // render em página 404.mst nas views
}