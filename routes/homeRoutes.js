const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');

router.get('/', HomeController.showPaginaInicial);
router.get('/login', HomeController.showLogin);



module.exports = router;

