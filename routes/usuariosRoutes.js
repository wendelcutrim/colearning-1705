const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/UsuariosController');

router.get("/cadastrar/usuario", UsuariosController.showPaginaDeCadastro);
router.post("/cadastrar/usuario", UsuariosController.storeUsuario);
router.get('/login', UsuariosController.showLogin);
router.post('/login', UsuariosController.login);

module.exports = router;