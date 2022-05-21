const path = require('path');

const produtos = [
    {
        id: 1,
        nome: "Caixas",
        img: 'https://neilpatel.com/wp-content/uploads/2019/07/mini-caixas-de-produtos-em-cima-de-laptop.jpeg',
        descricao: "Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta."
    },
    {
        id: 2,
        nome: "Avião",
        img: 'https://t.ctcdn.com.br/5BgZqDi8kp8YzXSngnuUNiI9Klk=/512x288/smart/filters:format(webp)/i517079.jpeg',
        descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.'
    },
    {
        id: 3,
        nome:"Caminhão",
        img:'https://frotas.unidas.com.br/blog/content/uploads/2021/09/alugar-caminhao-de-carga-1024x576.jpeg',
        descricao: "Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta."
    },
];

const HomeController = {
    showPaginaInicial: (req, res) => {
        res.render('home', {
            title: "Página de produtos",
            produtos,
            tituloDoH1: "Promoções da semana"
        })
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

    createProduto: (req, res) => {
        const { id, nome, img, descricao } = req.body
        console.log(req.body);

        const novoProduto = {
            id,
            nome,
            img,
            descricao
        }
        produtos.push(novoProduto)
        res.redirect('/');
    },

    showCadastrar: (req, res) => {
        res.render('cadastrar-produto');
    }
}

module.exports = HomeController;

//Criar rota /login e seu controller
