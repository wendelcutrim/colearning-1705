const express = require('express');
const router = express.Router();
const ProdutosController = require('../controllers/ProdutosController');

router.get('/produtos', ProdutosController.showAllProducts);
router.get('/produtos/cadastro', ProdutosController.showCadastroProduto);
router.post('/produtos/cadastro', ProdutosController.storeProduto);
router.get('/produtos/:id', ProdutosController.viewProduto);

router.delete("/produtos/:id", ProdutosController.deleteProduto);

router.get("/produtos/:id/editar", ProdutosController.showEditarProduto);
router.put("/produtos/:id/editar", ProdutosController.updateProduto);

module.exports = router;