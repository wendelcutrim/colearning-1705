const bcrypt = require('bcryptjs');


const usuarios = [
    {
        email: 'teste@mail.com',
        senha: '123456'
    }
]

const UsuariosController = {
    showPaginaDeCadastro: (req, res) => {
        res.render("cadastrar-usuario");
    },

    storeUsuario: (req, res) => {
        const { email, senha } = req.body;
        const hash = bcrypt.hashSync(senha, 10);

        const novoUsuario = {
            email,
            senha: hash
        }
        usuarios.push(novoUsuario);
        res.send(usuarios)
    },

    showLogin: (req, res) => {
        res.render('login', {titulo: "Página de login"});
    },

    login: (req, res) => {
        const { email, senha } = req.body;
        const usuario = usuarios.find(u => u.email == email);

        if(!usuario){
            res.send("Usuário não encontrado");
        }

        if(!bcrypt.compareSync(senha, usuario.senha)){
            res.send("Senha incorreta")
        }

        res.send("Autenticação realizada com sucesso");
    }
};

module.exports = UsuariosController;