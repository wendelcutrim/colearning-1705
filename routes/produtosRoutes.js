const express = require('express');
const router = express.Router();
const ProdutosController = require("../controllers/ProdutosController");

router.get("/produtos", ProdutosController.showTodosProdutos);

router.get("/produtos/cadastro", ProdutosController.showCadastroProdutos);

router.post("/produtos/cadastro", ProdutosController.storeProduto);

router.get("/produtos/:id", ProdutosController.viewProduto);

router.get("/produtos/:id/editar", ProdutosController.showAtualizarProduto);

router.put("/produtos/:id/editar", ProdutosController.updateProduto);



module.exports = router;
/*
GET - Solicitações
POST - Enviar informações de maneira segura
PUT - Atualizar
DELETE - Excluir
*/