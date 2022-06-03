const path = require('path');
const fs = require('fs');


const HomeController = {
    showPaginaInicial: (req, res) => {
        let conteudo = fs.readFileSync("./db.json", "utf8")
        const db = JSON.parse(conteudo);
        res.render('home', {produtos: db.produtos, title: "Página inicial"});
    },

    showContato: (req, res) => {
        res.send('Página de contato');
    },

    showRenildo: (req, res) => {
        res.send('Olá, eu sou o Renildo')
    },

    showLogin: (req, res) => {
        res.render("login");
    }
    
}

module.exports = HomeController;

//Criar rota /login e seu controller
