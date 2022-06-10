const path = require('path');
const fs = require('fs');

const HomeController = {
    showPaginaInicial: (req, res) => {
        let conteudo = fs.readFileSync("./db.json", "utf8");
        const db = JSON.parse(conteudo);
        res.render('home', {produtos: db.produtos, title: "Promoção"});
    },
    showLogin: (req, res) => {
        res.render("login")
    }
}

module.exports = HomeController;
