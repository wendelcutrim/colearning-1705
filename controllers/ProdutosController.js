const fs = require('fs');
const {v4: gerarId} = require('uuid');

const ProdutosController = {
    
    showAllProducts: (req, res) => {
        let content = fs.readFileSync("./db.json", "utf8");
        const db = JSON.parse(content);
        res.render("admin/listar", {produtos: db.produtos});
    },

    showCadastroProduto: (req, res) => {
        res.render("admin/cadastro");
    }, 
    
    storeProduto: (req, res) => {
        const { nome, descricao } = req.body;


        let content = fs.readFileSync("./db.json", "utf8");
        const db = JSON.parse(content);

        const novoProduto = {id: gerarId(), nome, img: `/img/uploads/${req.file.filename}`, descricao};

        db.produtos.push(novoProduto);
        content = JSON.stringify(db, null, 4);
        fs.writeFileSync("./db.json", content, "utf8");

        res.redirect('/adm/produtos');
    },

    viewProduto: (req, res) => {
        const {id} = req.params;
        let content = fs.readFileSync("./db.json", "utf8");
        const db = JSON.parse(content);
        const produto = db.produtos.find(produto => produto.id == id);
        res.render("admin/detalhes", {produto});
    },

    showEditarProduto: (req, res) => {
        const {id} = req.params;
        let content = fs.readFileSync("./db.json", "utf8");
        const db = JSON.parse(content);
        const produto = db.produtos.find(produto => produto.id == id);

        res.render("admin/editar", {produto});
    },

    updateProduto: (req, res) => {
        const {id} = req.params;
        const { nome, descricao } = req.body;

        let content = fs.readFileSync("./db.json", "utf8");
        const db = JSON.parse(content);

        const indiceProduto = db.produtos.findIndex(produto => produto.id == id);
        let img = db.produtos[indiceProduto].img;
        
        if(req.file){
            img = `/img/uploads/${req.file.filename}`
        }

        const produtoAtualizado = {id, nome, img, descricao};

        db.produtos[indiceProduto] = produtoAtualizado;
        
        content = JSON.stringify(db, null, 4);
        fs.writeFileSync("./db.json", content, "utf8");

        fs.writeFileSync("./db.json", content, "utf8");
        res.redirect("/adm/produtos");
    },

    deleteProduto: (req, res) => {
        const {id} = req.params;

        let content = fs.readFileSync("./db.json", "utf8");
        const db = JSON.parse(content);

        const indiceProduto = db.produtos.findIndex(produto => produto.id == id);

        db.produtos.splice(indiceProduto, 1);

        content = JSON.stringify(db, null, 4);
        fs.writeFileSync("./db.json", content, "utf8");

        res.redirect("/adm/produtos");
    }

}

module.exports = ProdutosController