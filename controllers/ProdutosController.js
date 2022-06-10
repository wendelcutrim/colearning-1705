const fs = require('fs');

const ProdutosController = {
    showTodosProdutos: (req, res) => {
        let content = fs.readFileSync("./db.json", "utf8");
        const db = JSON.parse(content);

        res.render("admin/listar", {produtos: db.produtos});
    },

    showCadastroProdutos: (req, res) => {
        res.render("admin/cadastro");
    },

    viewProduto: (req, res) => {
        const {id} = req.params;
        let content = fs.readFileSync("./db.json", "utf8");
        const db = JSON.parse(content);
        const produto = db.produtos.find(index => index.id == id);

        res.render("admin/detalhes", {produto});
    },

    updateProduto: (req, res) => {
        res.render("admin/editar");
    }
};


module.exports = ProdutosController;