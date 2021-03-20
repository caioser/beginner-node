const express = require('express');
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');

const router = express.Router();
//get root: home page
router.get('/', homeController.index/*exported from homeController.js*/);
router.get('/users/login', userController.login);
router.get('/users/register', userController.register);


module.exports = router;