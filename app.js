const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const homeRoutes = require('./routes/homeRoutes');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//Utilizando rotas
app.use(homeRoutes);


app.listen(port, () => console.log("Servidor está funcionando na porta: " + port));


/*
GET - Solicitações
POST - Criar
PUT - Alteração
PATCH - Alteração
DELETE - Exclusão
*/

