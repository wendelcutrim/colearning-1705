const path = require('path');

const HomeController = {
    showPaginaInicial: (req, res) => {
        res.send('Olá tudo bem?')
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
    }
}

module.exports = HomeController;

//Criar rota /login e seu controller
