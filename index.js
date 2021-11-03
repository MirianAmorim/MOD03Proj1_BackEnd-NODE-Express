const express = require("express");  //chamando o express
const app = express();  //definindo o app como express

app.use(express.json());  //definindo o JSON no projeto

const conn = require("./model/conn/index"); //importando a conexao

conn(); //executa a func de conexao

const port = 3000; //porta do node

const pessoasRouter = require("./routers/pessoas");
app.use('/',pessoasRouter);

const objetosRouter = require("./routers/objetos");
app.use('/',objetosRouter);

const musicasRouter = require("./routers/musicas");
app.use('/',musicasRouter);

const filmesRouter = require("./routers/filmes");
app.use('/',filmesRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});