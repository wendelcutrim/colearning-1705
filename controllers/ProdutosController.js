const fs = require('fs');
const {v4: gerarId } = require('uuid');

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
        //Capturar o id do produto que está vindo pela rota || O id vem através do parametro
        const {id} = req.params
        //Capturar as informações que está vindo do body.
        const {nome, foto, descricao} = req.body
        //Acessar o banco de dados em json
        let content = fs.readFileSync("./db.json", "utf8");
        //Converter a variável que está armazenando os dados do db JSON para objeto literal JS
        const db = JSON.parse(content);
        //Verificar se tem algum produto no db de acordo com o id passado pelo parametro, caso exista ele deve ser armazenado em uma variável. Dica: método findIndex()
        const indiceProduto = db.produtos.findIndex(index => index.id == id);
        //Criar um objeto e armazenar as informações do produto que está vindo do req.body;
        const produtoAtualizado = {id, nome, img: foto, descricao};
        //Atualizar o "banco de dados" que está em formato de objeto literal
        db.produtos[indiceProduto] = produtoAtualizado;
        //Atualizar a variável que está em json e lendo o banco de dados. Mas para isso, será necessário converter o db em objeto literal para JSON e salvar nessa variável
        content = JSON.stringify(db)
        //Sincronizar o banco de dados JSON para receber as novas informações
        fs.writeFileSync("./db.json", content, "utf8");
        //Redirecionar o cliente para a rota /adm/produtos 
        res.redirect("/adm/produtos");
    },

    storeProduto: (req, res) => {
        let content = fs.readFileSync("./db.json", "utf8");
        const db = JSON.parse(content);

        const {nome, foto, descricao} = req.body;

        const novoProduto = {
            id: gerarId(),
            nome,
            img: foto,
            descricao
        }

        db.produtos.push(novoProduto);
        content = JSON.stringify(db);
        fs.writeFileSync("./db.json", content, "utf8");

        return res.redirect("/adm/produtos");
    },

    showAtualizarProduto: (req, res) => {
        let content = fs.readFileSync("./db.json", "utf8");
        const db = JSON.parse(content);

        const { id } = req.params;

        const produto = db.produtos.find(index => index.id == id);

        res.render("admin/editar", {produto});
    }
};


module.exports = ProdutosController;

