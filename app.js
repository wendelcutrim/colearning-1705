const express = require('express');
const app = express();
const path = require('path');
var methodOverride = require('method-override')

const port = 3000;
const homeRoutes = require('./routes/homeRoutes');
const ProdutosRoutes = require('./routes/produtosRoutes');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride('_method'))


//Utilizando rotas
app.use(homeRoutes);
app.use("/adm/",ProdutosRoutes);


app.listen(port, () => console.log("Servidor está funcionando na porta: " + port));


/*
GET - Solicitações
POST - Criar
PUT - Alteração
PATCH - Alteração
DELETE - Exclusão
*/

