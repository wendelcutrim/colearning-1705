const express = require('express');
const app = express();
const port = 3000;
const homeRoutes = require('./routes/homeRoutes');

app.set('view engine', 'ejs');

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

