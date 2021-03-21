const express = require('express');
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', homeController.userMiddleware /* middleware adicionado antes do controller */, /*next()*/homeController.index);
// isto é necessário para que o middleware funcione corretamente
router.get('/users/login', userController.login);
router.get('/users/register', userController.register);


module.exports = router;