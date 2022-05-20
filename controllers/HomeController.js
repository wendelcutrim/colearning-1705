const path = require('path');

const produtos = [
    {
        id: 1,
        nome: 'Um produto legal',
        img: 'https://neilpatel.com/wp-content/uploads/2019/07/mini-caixas-de-produtos-em-cima-de-laptop.jpeg',
        descricao: "Um produto legal"
    },
    {
        id: 2,
        nome: 'Um produto legal 2',
        img: 'https://t.ctcdn.com.br/5BgZqDi8kp8YzXSngnuUNiI9Klk=/512x288/smart/filters:format(webp)/i517079.jpeg',
        descricao: "Um produto legal 2"
    },
    {
        id: 3,
        nome: 'Um produto legal 3',
        img: 'https://frotas.unidas.com.br/blog/content/uploads/2021/09/alugar-caminhao-de-carga-1024x576.jpeg',
        descricao: "Um produto legal 3"
    },

]

const HomeController = {
    showPaginaInicial: (req, res) => {
        res.render('home', {produtos, title: "Promoção"});
    },

    showContato: (req, res) => {
        res.send('Página de contato');
    },

    showRenildo: (req, res) => {
        res.send('Olá, eu sou o Renildo')
    },

    showLogin: (req, res) => {
        let titulo = "Renildo"
        res.render("login");
    },

    showCadastroProduto: (req, res) => {
        res.render("cadastrar-produto");
    },

    storeProduto: (req, res) => {
        const { id, nome, img, descricao } = req.body;
        const novoProduto = {
            id,
            nome,
            img,
            descricao
        }
        produtos.push(novoProduto);
        res.redirect('/')
    }
}

module.exports = HomeController;

//Criar rota /login e seu controller
